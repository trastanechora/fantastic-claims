import { NextRequest, NextResponse } from 'next/server';
import getOrganizationByParentId from '@/backend/repositories/api/satusehat/organization/get-organization-by-parent-id';

export async function GET(_: NextRequest) {
  const data = await getOrganizationByParentId(process.env.SATU_SEHAT_ORGANIZATION_ID || '');
  return NextResponse.json(data);
}
