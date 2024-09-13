'use client';

import { loginUsingEmailAction } from '@/backend/deliveries/server-actions/login';
import { UserFormState } from '@/backend/entities/account/types/user';
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/frontend/deliveries/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/frontend/deliveries/components/ui/card';
import { Input } from '@/frontend/deliveries/components/ui/input';
import { Label } from '@/frontend/deliveries/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/frontend/deliveries/components/ui/alert';
import { AlertCircle } from 'lucide-react';

const initialFormState: UserFormState = {
  errors: {
    email: '',
    password: '',
  },
};

const LoginForm = () => {
  const [state, dispatch] = useFormState<UserFormState, FormData>(
    loginUsingEmailAction,
    initialFormState,
  );
  const { pending } = useFormStatus();
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
          {state.errors.general && (
            <Alert variant={'destructive'}>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{state.errors.general}</AlertDescription>
            </Alert>
          )}
        </CardHeader>
        <CardContent>
          <form action={dispatch}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <div>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="m@example.com"
                    required
                  />
                  {state.errors.email && (
                    <p className="mt-0.5 text-xs text-red-600">{state.errors.email}</p>
                  )}
                </div>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {/* <Link href="#" className="ml-auto inline-block text-sm underline">
                    Forgot your password?
                  </Link> */}
                </div>
                <div>
                  <Input id="password" type="password" name="password" required />
                  {state.errors.password && (
                    <p className="mt-0.5 text-xs text-red-600">{state.errors.password}</p>
                  )}
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={pending}>
                Login
              </Button>
              <Link href={'/login/google'}>
                <Button variant="outline" className="w-full" disabled={pending}>
                  Login with Google
                </Button>
              </Link>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="underline">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
