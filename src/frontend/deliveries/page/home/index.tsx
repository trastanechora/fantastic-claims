import { logoutAction } from '@/backend/deliveries/server-actions/logout';
import { getUser } from '@/backend/repositories/lib/auth';
import { Button } from '@/frontend/deliveries/components/ui/button';
import Link from 'next/link';

export default async function Home() {
  const { user } = await getUser();
  return (
    <div className="m-auto p-2">
      {!!user ? (
        <div>
          <span>logged in:</span>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      ) : (
        <p>not logged in</p>
      )}
      <div className="flex gap-2">
        {!!user ? (
          <form action={logoutAction}>
            <Button type="submit">SIGN OUT</Button>
          </form>
        ) : (
          <div className="flex gap-2">
            <Link href={'/login'}>
              <Button>LOG IN</Button>
            </Link>
            <Link href={'/register'}>
              <Button>REGISTER</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
