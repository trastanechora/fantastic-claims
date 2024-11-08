import fetch from '@/backend/repositories/lib/fetch';
import getToken from '../token/get-token';
import { BODY_OF_CREATE_PATIENT } from './mock-data';

const URL = process.env.SATU_SEHAT_BASE_URL + '/Patient';

// TODO: remove mock data
const createPatient = async () => {
  const token = await getToken();

  const response = await fetch<any, any>(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(BODY_OF_CREATE_PATIENT),
  });

  return response;
};

export default createPatient;
