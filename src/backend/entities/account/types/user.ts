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
