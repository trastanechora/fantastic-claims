import fetch from '@/backend/repositories/api/lib/fetch';
import getToken from '../authentication/get-token';
import { MOCK_PATIENT_KTP } from './mock-data';

const URL =
  process.env.SATU_SEHAT_BASE_URL + '/Patient?identifier=https://fhir.kemkes.go.id/id/nik|';

const getPatientByKTP = async (id: string) => {
  const token = await getToken();

  const response = await fetch<any, any>(URL + MOCK_PATIENT_KTP, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

export default getPatientByKTP;
