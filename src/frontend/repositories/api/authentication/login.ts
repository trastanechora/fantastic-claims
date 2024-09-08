import { signIn } from '../lib/auth';

const doLoginUsingGoogle = () => {
  signIn('google', { callbackUrl: '/redirect-auth' }, { prompt: 'login' });
};

export default doLoginUsingGoogle;
