'use server';

import { getUser, lucia } from '@/backend/repositories/lib/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const logoutAction = async () => {
  const { session } = await getUser();
  if (!session) {
    return {
      error: 'Unauthorized',
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  return redirect('/');
};
