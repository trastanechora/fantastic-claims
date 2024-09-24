import type { Category, Coding, Encounter, Performer, Subject, ValueQuantity } from './base';

export interface RequestCreateObservation {
  resourceType: 'Observation';
  status: string;
  category: Category[];
  code: {
    coding: Coding[];
  };
  subject: Subject;
  performer: Performer[];
  encounter: Encounter;
  effectiveDateTime: string;
  issued: string;
  valueQuantity: ValueQuantity;
}
