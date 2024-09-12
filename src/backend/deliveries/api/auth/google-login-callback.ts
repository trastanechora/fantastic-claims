import { GoogleUser } from '@/backend/entities/account/types/user';
import { db } from '@/backend/repositories/database';
import { authTable, userTable } from '@/backend/repositories/database/schema';
import { createLuciaLoggedInSession, google } from '@/backend/repositories/lib/auth';
import { AuthProviderId, ENTROPY_SIZE, GOOGLE_OAUTH_USER_INFO_URL } from '@/constants';
import { generateIdFromEntropySize } from 'lucia';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const cookieStore = cookies();

  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const codeVerifier = cookieStore.get('google_oauth_code_verifier')?.value;
  const storedState = cookieStore.get('google_oauth_state')?.value ?? null;

  if (!code || !state || !storedState || !codeVerifier || state !== storedState) {
    // TODO: better error message
    return Response.json({ message: 'error' }, { status: 400 });
  }

  try {
    const token = await google.validateAuthorizationCode(code, codeVerifier);

    const googleUserResponse = await fetch(GOOGLE_OAUTH_USER_INFO_URL, {
      headers: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });
    const googleUser: GoogleUser = await googleUserResponse.json();
    const existingGoogleUser = await db.query.authTable.findFirst({
      where: (val, { and, eq }) =>
        and(
          eq(val.providerId, AuthProviderId[AuthProviderId.google]),
          eq(val.providerUserId, googleUser.sub),
        ),
    });

    const existingEmail = await db.query.userTable.findFirst({
      where: (val, { eq }) => eq(val.email, googleUser.email),
    });

    if (existingGoogleUser) {
      await createLuciaLoggedInSession(existingGoogleUser.userId);
    } else if (existingEmail) {
      await db.insert(authTable).values({
        providerId: AuthProviderId[AuthProviderId.google],
        providerUserId: googleUser.sub,
        userId: existingEmail.id,
      });
      await createLuciaLoggedInSession(existingEmail.id);
    } else {
      const newUserId = await db.transaction(async (tx) => {
        const userId = generateIdFromEntropySize(ENTROPY_SIZE);
        await tx.insert(userTable).values({
          id: userId,
          email: googleUser.email,
        });
        await tx.insert(authTable).values({
          userId,
          providerId: AuthProviderId[AuthProviderId.google],
          providerUserId: googleUser.sub,
        });
        return userId;
      });
      await createLuciaLoggedInSession(newUserId);
    }
  } catch (err) {
    // error
    console.error(err);
    redirect('/login');
  } finally {
    redirect('/onboarding');
  }
}
