import fetch from '@/backend/repositories/api/lib/fetch';
import type { AuthenticationResponseSuccess, AuthenticationResponseError } from './types';

const URL = process.env.SATU_SEHAT_AUTH_URL + '/accesstoken?grant_type=client_credentials';

// TODO: Move these variables somewhere if multiple instances are needed
let token: string | null = null;
let expiryTime: number = 0;

const getToken = async () => {
  if (new Date().getTime() < expiryTime && token !== null) return token;

  const formBody = [
    `${encodeURIComponent('client_id')}=${encodeURIComponent(process.env.SATU_SEHAT_CLIENT_ID || '')}`,
    `${encodeURIComponent('client_secret')}=${encodeURIComponent(process.env.SATU_SEHAT_CLIENT_SECRET || '')}`,
  ];

  try {
    const response = await fetch<AuthenticationResponseSuccess, AuthenticationResponseError>(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formBody.join('&'),
    });

    if (response.data) {
      token = response.data.access_token;
      expiryTime = Number(response.data.issued_at) + Number(response.data.expires_in);

      return token;
    } else {
      console.error(
        '[ERROR] authentication API response. Message:',
        JSON.stringify(response.error),
      );
      return null;
    }
  } catch (error) {
    console.error('[ERROR] authentication. Message:', JSON.stringify(error));
    return null;
  }
};

export default getToken;
