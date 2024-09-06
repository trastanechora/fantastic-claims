import fetch from '@/backend/repositories/api/lib/fetch';
import getToken from '../token/get-token';

const URL = process.env.SATU_SEHAT_BASE_URL + '/Organization?partof=';

const getOrganizationByParentId = async (id: string) => {
  const token = await getToken();

  const response = await fetch<any, any>(URL + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export default getOrganizationByParentId;
