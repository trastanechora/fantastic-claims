'use client';
import { useSession } from 'next-auth/react';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

const RedirectAuthPage = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;

    switch (session.user.type) {
      case 'bpjs': {
        return redirect('/bpjs/dahsboard');
      }
      case 'healthcare': {
        return redirect('/healthcare/dahsboard');
      }
      default: {
        return redirect('/unauthorized');
      }
    }
  }, [session]);

  return <div>Loading...</div>;
};

export default RedirectAuthPage;
