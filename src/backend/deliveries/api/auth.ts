import NextAuth from 'next-auth';
import { authOptions } from '@/backend/entities/account/constants/auth-option';

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
