import type { Address, Identifier, Meta, Name, Qualification, Telcom } from './base';

interface GetById {
  address: Address;
  birthday: string;
  gender: string;
  id: string;
  identifier: Identifier[];
  meta: Meta;
  name: Name[];
  qualification: Qualification[];
  resourceType: 'Practitioner';
  telcom: Telcom[];
}

interface ResponseConstructor<Data> {
  status: number;
  error: unknown;
  data: Data;
}

export type ResponsePractitionerGetById = ResponseConstructor<GetById>;
