import { getUser } from '@/backend/repositories/lib/auth';
import { redirect } from 'next/navigation';

export const LoggedInRoute = async ({ children }: { children: React.ReactNode }) => {
  const { user } = await getUser();
  if (!user) {
    redirect('/login');
  }
  return <>{children}</>;
};
