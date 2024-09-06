export { getServerSession } from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';
export const googleAuthProvider = GoogleProvider;
