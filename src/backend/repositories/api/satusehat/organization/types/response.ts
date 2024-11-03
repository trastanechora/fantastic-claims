import { Address, Identifier, Meta, PartOf, Telcom, Type } from './base';

interface OrganizationResource {
  active: boolean;
  address: Address;
  id: string;
  identifier: Identifier[];
  meta: Meta;
  name: string;
  partOf: PartOf;
  resourceType: 'Organization';
  telcom: Telcom[];
  type: Type[];
}

interface ResponseGetOrganization {
  fullUrl: string;
  resource: OrganizationResource;
}

interface ResponseConstructor<Data> {
  status: number;
  error: unknown;
  data: Data;
}

export type ResponseGetOrganizationByParentId = ResponseConstructor<ResponseGetOrganization>;
