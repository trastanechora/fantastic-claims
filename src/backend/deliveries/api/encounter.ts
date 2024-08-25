import { NextRequest, NextResponse } from 'next/server';
import createEncounter from '@/backend/repositories/api/satusehat/encounter/create-encounter';
import getEncounterById from '@/backend/repositories/api/satusehat/encounter/get-encounter-by-id';

export async function GET(_: NextRequest) {
  const data = await getEncounterById('');
  return NextResponse.json(data);
}

export async function POST(_: NextRequest) {
  const data = await createEncounter(process.env.SATU_SEHAT_ORGANIZATION_ID || '');
  return NextResponse.json(data);
}
