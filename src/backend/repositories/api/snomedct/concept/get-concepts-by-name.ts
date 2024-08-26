import fetch from '@/backend/repositories/api/lib/fetch';
import { EXAMPLE_NAME } from './mock-data';

const URL = process.env.SNOMEDCT_BASE_URL + '/MAIN/concepts';

const getConcpetsByName = async (name: string) => {
  const params = new URLSearchParams();
  params.append('term', name || EXAMPLE_NAME); // TODO: remove example
  params.append('offset', '0');
  params.append('limit', '50');
  const response = await fetch<any, any>(URL + '?' + params.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Accept-Language': 'en-X-900000000000509007,en-X-900000000000508004,en',
    },
  });

  return response;
};

export default getConcpetsByName;
