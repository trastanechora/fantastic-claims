import { NextRequest, NextResponse } from 'next/server';
import getConceptByName from '@/backend/repositories/api/snomedct/concept/get-concepts-by-name';

export async function GET(_: NextRequest) {
  const data = await getConceptByName('');
  return NextResponse.json(data);
}
