import { Lucia, Session, User } from 'lucia';
import { cache } from 'react';
import { cookies } from 'next/headers';
import { Google } from 'arctic';
import { ENV } from '@/helpers/env';
import { DatabaseUserAttributes } from '@/backend/repositories/database/types';
import { adapter } from '@/backend/repositories/database';

const { serverRuntimeEnv } = ENV;

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    expires: false,
    attributes: {
      secure: process.env.NODE_ENV === 'production',
    },
  },
  getUserAttributes: (attributes) => {
    return {
      // attributes has the type of DatabaseUserAttributes
      email: attributes.email,
      role: attributes.role,
    };
  },
});

export const google = new Google(
  serverRuntimeEnv.GOOGLE_OAUTH_CLIENT_ID,
  serverRuntimeEnv.GOOGLE_OAUTH_CLIENT_SECRET,
  // TODO: CHANGE THIS
  'http://localhost:3000/login/google/callback',
);

export const getUser = cache(async (): Promise<{ user: User | null; session: Session | null }> => {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
  if (!sessionId) return { user: null, session: null };
  const { user, session } = await lucia.validateSession(sessionId);
  try {
    if (session && session.fresh) {
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }
    if (!session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }
  } catch {
    // Next.js throws error when attempting to set cookies when rendering page
  }
  return { user, session };
});

export const createLuciaLoggedInSession = async (userId: string) => {
  const session = await lucia.createSession(userId, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
};

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: DatabaseUserAttributes;
  }
}
