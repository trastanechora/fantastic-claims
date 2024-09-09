'use server';

import { userFormSchema } from '@/backend/entities/account/schema';
import { UserFormState } from '@/backend/entities/account/types/user';
import { db } from '@/backend/repositories/database';
import { createLuciaLoggedInSession } from '@/backend/repositories/lib/auth';
import { ARGON_HASH_OPTION } from '@/constants';
import { verify } from '@node-rs/argon2';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const loginUsingEmail = async (
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

  //  Check if email exists
  const userInDb = await db.query.userTable.findFirst({
    where: (user, { eq }) => {
      return eq(user.email, validatedData.email);
    },
  });
  if (!userInDb) {
    return { errors: { ...prev.errors, general: 'Incorrect username or password' } };
  }
  // Check if password valid
  const validPassword = await verify(
    userInDb.passwordHash || '',
    validatedData.password,
    ARGON_HASH_OPTION,
  );
  if (!validPassword) {
    return { errors: { ...prev.errors, general: 'Incorrect username or password' } };
  }

  // Set session to current user
  await createLuciaLoggedInSession(userInDb.id);
  return redirect('/');
};
