import fetch from '@/backend/repositories/api/lib/fetch';
import getToken from '../authentication/get-token';
import { BODY_OF_CREATE_ENCOUNTER } from './mock-data';

const URL = process.env.SATU_SEHAT_BASE_URL + '/Encounter';

const createLocation = async (id: string) => {
  const token = await getToken();

  const response = await fetch<any, any>(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(BODY_OF_CREATE_ENCOUNTER),
  });

  return response;
};

export default createLocation;
