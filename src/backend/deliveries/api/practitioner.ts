import { NextRequest, NextResponse } from 'next/server';
import getPractitionerById from '@/backend/repositories/api/satusehat/practitioner/get-practitioner-by-id';

export async function GET(_: NextRequest) {
  const data = await getPractitionerById('');
  return NextResponse.json(data);
}
