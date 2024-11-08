import fetch from '@/backend/repositories/lib/fetch';
import getToken from '../token/get-token';
import { MOCK_LOCATION_ID } from './mock-data';

const URL = process.env.SATU_SEHAT_BASE_URL + '/Location/';

const getLocationByParentId = async () => {
  const token = await getToken();

  // TODO: remove mock data
  const response = await fetch<any, any>(URL + MOCK_LOCATION_ID, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export default getLocationByParentId;
