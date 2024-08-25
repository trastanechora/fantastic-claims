import { NextRequest, NextResponse } from 'next/server';
import createLocation from '@/backend/repositories/api/satusehat/location/create-location';
import getLocationById from '@/backend/repositories/api/satusehat/location/get-location-by-id';

const MOCK_LOCATION_ID = '65d70fff-27dd-40a1-b268-3cc8f1817426';

export async function GET(_: NextRequest) {
  const data = await getLocationById(MOCK_LOCATION_ID || '');
  return NextResponse.json(data);
}

export async function POST(_: NextRequest) {
  const data = await createLocation(process.env.SATU_SEHAT_ORGANIZATION_ID || '');
  return NextResponse.json(data);
}
