import { Options } from '@node-rs/argon2';

export const ARGON_HASH_OPTION: Options = {
  // recommended minimum parameters
  memoryCost: 19456,
  timeCost: 2,
  outputLen: 32,
  parallelism: 1,
};

export enum AuthProviderId {
  'google',
  'email',
}

export const ENTROPY_SIZE = 10;

export const GOOGLE_OAUTH_USER_INFO_URL = 'https://www.googleapis.com/oauth2/v3/userinfo';
