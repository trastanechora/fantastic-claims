'use server';

import { userFormSchema } from '@/backend/entities/account/schema';
import { UserFormState } from '@/backend/entities/account/types/user';
import { db } from '@/backend/repositories/database';
import { authTable, userTable } from '@/backend/repositories/database/schema';
import { createLuciaLoggedInSession } from '@/backend/repositories/lib/auth';
import { ARGON_HASH_OPTION, AuthProviderId, ENTROPY_SIZE } from '@/constants';
import { hash } from '@node-rs/argon2';
import { generateIdFromEntropySize } from 'lucia';
import { redirect } from 'next/navigation';

export const createUserWithEmailAction = async (
  prev: UserFormState,
  formData: FormData,
): Promise<UserFormState> => {
  const rawFormData = {
    email: formData.get('email')?.toString(),
    password: formData.get('password')?.toString(),
  };

  //   Validate Input
  const validation = userFormSchema.safeParse(rawFormData);

  if (!validation.success) {
    const errors = validation.error.flatten().fieldErrors;

    return {
      errors: {
        ...prev.errors,
        email: errors.email?.[0] || '',
        password: errors.password?.[0] || '',
      },
    };
  }
  const validatedData = validation.data;

  //  Check If User Exist
  try {
    const userInDb = await db.query.userTable.findFirst({
      where: (user, { eq }) => {
        return eq(user.email, validatedData.email);
      },
    });
    if (!!userInDb) {
      return { errors: { ...prev.errors, general: 'User already exists' } };
    }
  } catch {
    console.error('error');
  }

  //   Create User
  const passwordHash = await hash(validatedData.password, ARGON_HASH_OPTION);
  const userId = generateIdFromEntropySize(ENTROPY_SIZE); // 16 characters long

  await db.transaction(async (tx) => {
    await tx.insert(userTable).values({
      id: userId,
      email: validatedData.email,
      passwordHash,
    });
    await tx.insert(authTable).values({
      providerId: AuthProviderId[AuthProviderId.email],
      providerUserId: validatedData.email,
      userId,
    });
  });
  // Set session to current user
  await createLuciaLoggedInSession(userId);
  return redirect('/onboarding');
};
