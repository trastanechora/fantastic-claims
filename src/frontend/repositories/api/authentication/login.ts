import { signIn } from '../lib/auth';

const doLoginUsingGoogle = () => {
  signIn('google', { callbackUrl: '/dashboard' }, { prompt: 'login' });
};

export default doLoginUsingGoogle;
