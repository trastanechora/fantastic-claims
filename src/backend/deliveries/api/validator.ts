import { NextRequest, NextResponse } from 'next/server';
import getValidatorTemplate from '@/backend/repositories/api/openai/validator/get-template';

export async function GET(_: NextRequest) {
  const data = await getValidatorTemplate();
  return NextResponse.json(data);
}
