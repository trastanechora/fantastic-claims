'use server';

import { db } from '@/backend/repositories/database';
import { userTable } from '@/backend/repositories/database/schema';
import { getUser } from '@/backend/repositories/lib/auth';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';

export const selectRoleAction = async (role: 'bpjs' | 'hospital', _formData: FormData) => {
  const { user } = await getUser();
  if (!user) {
    redirect('/login');
  }

  await db.update(userTable).set({ role }).where(eq(userTable.id, user.id));
  redirect('/');
};
