import { NextRequest, NextResponse } from 'next/server';
import getPatientById from '@/backend/repositories/api/satusehat/patient/get-patient-by-id';
import getPatientByKTP from '@/backend/repositories/api/satusehat/patient/get-patient-by-ktp';
import createPatient from '@/backend/repositories/api/satusehat/patient/create-patient';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');
  const ktp = req.nextUrl.searchParams.get('ktp');

  if (id) {
    const data = await getPatientById(id || '');
    return NextResponse.json(data);
  }

  if (ktp) {
    const data = await getPatientByKTP(ktp || '');
    return NextResponse.json(data);
  }

  const data = await getPatientById('');
  return NextResponse.json(data);
}

export async function POST(_: NextRequest) {
  const data = await createPatient(process.env.SATU_SEHAT_ORGANIZATION_ID || '');
  return NextResponse.json(data);
}
