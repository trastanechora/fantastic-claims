import { authOptions } from '@/backend/entities/account/constants/auth-option';
import { getServerSession } from '../lib/auth';

export const getServerAuthSession = () => getServerSession(authOptions);
