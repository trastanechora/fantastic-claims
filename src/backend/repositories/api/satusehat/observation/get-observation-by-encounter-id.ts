import fetch from '@/backend/repositories/lib/fetch';
import getToken from '../token/get-token';
import { MOCK_ENCOUNTER_ID } from '../encounter/mock-data';

const URL = process.env.SATU_SEHAT_BASE_URL + '/Observation?encounter=';

const getObservationByEncounterId = async () => {
  const token = await getToken();

  const response = await fetch<any, any>(URL + MOCK_ENCOUNTER_ID, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export default getObservationByEncounterId;
