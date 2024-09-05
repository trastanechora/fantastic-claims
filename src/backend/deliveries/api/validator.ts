import { NextRequest, NextResponse } from 'next/server';
import getValidatorTemplate from '@/backend/repositories/api/openai/validator/get-template';

export async function POST(req: NextRequest) {
  const { documentText } = await req.json();

  if (typeof documentText !== 'string')
    return NextResponse.json('documentText is required', { status: 400 });

  const data = await getValidatorTemplate(documentText);
  return NextResponse.json(data);
}
