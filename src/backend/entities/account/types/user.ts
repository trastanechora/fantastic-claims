export type UserType = 'bpjs' | 'healthcare';

export interface User {
  email: string;
  name: string;
  image: string;
  type: UserType;
}

export interface UserSession extends User {
  [key: string]: unknown;
}

declare module 'next-auth' {
  interface Session {
    expires: string;
    user: User;
  }
}

const userFormName = ['password', 'email', 'general'] as const;
export interface UserFormState {
  errors: Partial<Record<(typeof userFormName)[number], string>>;
}

export interface GoogleUser {
  sub: string; // Unique identifier for the user
  name: string; // Full name of the user
  email: string; // Email address of the user
  picture: string;
}
