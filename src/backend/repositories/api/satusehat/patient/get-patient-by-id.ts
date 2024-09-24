import fetch from '@/backend/repositories/lib/fetch';
import getToken from '../token/get-token';
import { MOCK_PATIENT_ID } from './mock-data';

const URL = process.env.SATU_SEHAT_BASE_URL + '/Patient/';

// TODO: remove mock data
const getPatientById = async () => {
  const token = await getToken();

  const response = await fetch<any, any>(URL + MOCK_PATIENT_ID, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export default getPatientById;
