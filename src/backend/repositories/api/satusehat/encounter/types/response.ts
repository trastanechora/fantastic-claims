import type {
  Class,
  EncounterLocation,
  Identifier,
  Meta,
  Participant,
  Period,
  ServiceProvider,
  StatusHistory,
  Subject,
} from './base';

interface ResponseGeneral {
  class: Class;
  id: string;
  identifier: Identifier[];
  location: EncounterLocation[];
  meta: Meta;
  participant: Participant[];
  period: Period;
  resourceType: 'Encounter';
  serviceProvider: ServiceProvider;
  status: string;
  statusHistory: StatusHistory[];
  subject: Subject;
}

interface ResponseConstructor<Data> {
  status: number;
  error: unknown;
  data: Data;
}

export type ResponsePostEncounter = ResponseConstructor<ResponseGeneral>;
export type ResponseGetEncounterById = ResponseConstructor<ResponseGeneral>;
export type ResponsePutEncounter = ResponseConstructor<ResponseGeneral>;
