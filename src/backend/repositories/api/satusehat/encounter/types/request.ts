import type {
  Class,
  EncounterLocation,
  Identifier,
  Participant,
  Period,
  ServiceProvider,
  StatusHistory,
  Subject,
} from './base';

export interface RequestCreateEncounter {
  resourceType: 'Encounter';
  status: string;
  class: Class;
  subject: Subject;
  participant: Participant[];
  period: Period;
  location: EncounterLocation[];
  statusHistory: StatusHistory[];
  serviceProvider: ServiceProvider;
  identifier: Identifier[];
}
