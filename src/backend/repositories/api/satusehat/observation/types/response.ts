import type { Category, Coding, Encounter, Meta, Performer, Subject, ValueQuantity } from './base';

interface ResponsePost {
  category: Category[];
  code: {
    coding: Coding[];
  };
  effectiveDateTime: string;
  encounter: Encounter;
  id: string;
  issued: string;
  meta: Meta;
  performer: Performer[];
  resourceType: 'Observation';
  status: string;
  subject: Subject;
  valueQuantity: ValueQuantity;
}

interface ResponseGet {
  category: Category[];
  code: {
    coding: Coding[];
  };
  effectiveDateTime: string;
  encounter: Encounter;
  id: string;
  issued: string;
  meta: Meta;
  resourceType: 'Observation';
  status: string;
  subject: Subject;
  valueQuantity: ValueQuantity;
}

interface ResponseGetBulkEntry {
  fullUrl: string;
  resource: ResponseGet;
}

interface ResponseGetBulk {
  entry: ResponseGetBulkEntry[];
}

interface ResponseConstructor<Data> {
  status: number;
  error: unknown;
  data: Data;
}

export type ResponsePostObservation = ResponseConstructor<ResponsePost>;
export type ResponseGetObservationById = ResponseConstructor<ResponseGet>;
export type ResponseGetObservationByEncounterId = ResponseConstructor<ResponseGetBulk>;
