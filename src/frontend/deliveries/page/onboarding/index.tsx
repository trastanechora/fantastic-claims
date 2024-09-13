import { selectRoleAction } from '@/backend/deliveries/server-actions/selectRole';
import { getUser } from '@/backend/repositories/lib/auth';
import { LoggedInRoute } from '@/frontend/deliveries/components/LoggedInRoute';
import { Button } from '@/frontend/deliveries/components/ui/button';
import { redirect } from 'next/navigation';

export const OnboardingPage = async () => {
  const { user } = await getUser();
  if (!!user?.role) {
    redirect('/');
  }

  return (
    <LoggedInRoute>
      <div className="flex min-h-full flex-col items-center justify-center pt-10">
        <h1 className="text-3xl font-bold">Choose your role</h1>
        <p className="text-md text-center">
          Hi {user?.email}! Please select your role below to continue.
        </p>
        <div className="mt-4 flex flex-row justify-center gap-2">
          <form action={selectRoleAction.bind(null, 'bpjs')}>
            <Button variant={'outline'}>BPJS</Button>
          </form>
          <form action={selectRoleAction.bind(null, 'hospital')}>
            <Button variant="outline">Hospital</Button>
          </form>
        </div>
      </div>
    </LoggedInRoute>
  );
};
