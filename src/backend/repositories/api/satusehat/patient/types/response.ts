import type { Identifier, Meta } from './base';

interface CreateData {
  success: boolean;
  message: string;
  data: {
    patient_id: string;
  };
}

interface GetByIdData {
  success: boolean;
  id: string;
  identifier: Identifier[];
  meta: Meta;
  resourceType: 'Patient';
}

interface EntryDataResourceName {
  text: string;
  use: string;
}

interface EntryDataResource {
  active: boolean;
  id: string;
  identifier: Identifier[];
  meta: Meta;
  resourceType: 'Patient';
  name: EntryDataResourceName[];
}

interface EntryData {
  fullUrl: string;
  resource: EntryDataResource;
}

interface Link {
  relation: string;
  url: string;
}

interface GetByKTPData {
  entry: EntryData[];
  link: Link[];
  resourceType: 'Bundle';
  total: number;
  type: string;
}

interface ResponseConstructor<Data> {
  status: number;
  error: unknown;
  data: Data;
}

export type ResponsePatientCreate = ResponseConstructor<CreateData>;
export type ResponsePatientGetById = ResponseConstructor<GetByIdData>;
export type ResponsePatientGetByKTP = ResponseConstructor<GetByKTPData>;
