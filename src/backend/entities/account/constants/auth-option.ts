import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import type { User, UserType } from '../types/user';

// TODO: move to DB later
const users: User[] = [
  {
    email: 'trastanechora@gmail.com',
    name: 'Mae',
    type: 'bpjs',
    image:
      'https://lh3.googleusercontent.com/a/ACg8ocKbJoMBwIxljy5pvXq4-QJsxvbbCcaCgXMhHnO3mJeKSogWB6Vp=s64-p-k-rw-no',
  },
  {
    email: 'mohamad.faizhar@gmail.com',
    name: 'Ijar',
    type: 'bpjs', // change this for development
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjUxZzl4h1UBJj7ZY8G2m9SeMV-c_1stpAu6sl4PcoLCOOtRTFUj=s64-p-k-rw-no',
  },
  {
    email: 'angga.puput.s@gmail.com',
    name: 'Angga',
    type: 'bpjs',
    image:
      'https://lh3.googleusercontent.com/cm/AGPWSu9lyu6gKLrWdwd9iERCMqwo_DnHVuMYNmQTInOtxQAaiH0R80GWlLYqsUszCVrfUomigQ=s64-p-k-rw-no',
  },
];

const getUserByEmail = (email: string) => {
  return users.find((user) => user.email === email);
};

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token }) {
      if (token.email) {
        const email = token.email;
        const userOnDb = await getUserByEmail(email);

        token.type = userOnDb?.type || '';
      }
      return token;
    },
    session({ session, token }) {
      session.user.type = token.type as UserType;
      return session;
    },
    async signIn({ user }) {
      if (!user.email) {
        return '/unauthorized';
      }

      const allowedUser = await getUserByEmail(user.email);
      if (!allowedUser) {
        return '/unauthorized';
      }

      const keys = Object.keys(allowedUser);
      if (keys.length === 0) {
        return '/unauthorized';
      }

      return true;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || '',
    }),
  ],
};
