import { IdentifierUse } from './identifier-use';
import type { Telecomunication } from './telecomunication';

/**
 * @description a set of codes that can be used to indicate a type of gender used for administrative purposes
 * @source https://hl7.org/fhir/codesystem-administrative-gender.html
 */
export enum GenderType {
  Male = 'male',
  Female = 'female',
  Other = 'other',
  Unknown = 'unknown',
}

/**
 * @description a set of codes that can be used to identifies the purpose for this identifier, if known
 * @source https://hl7.org/fhir/codesystem-identifier-use.html
 */
type PatientIdentifierUse = IdentifierUse;

interface PatientIdentifier {
  system: string;
  use: PatientIdentifierUse;
  value: string;
}

interface Name {
  use: string;
  text: string;
  family: string;
  given: string;
  prefix: string;
  suffix: string;
  period: string;
}

export interface Patient {
  active: boolean;
  telecomunications: Telecomunication[];
  gender: GenderType;
  identifier: PatientIdentifier;
  birthDate: string; // YYYY-MM-DD
  deceased: string;
  deceasedBoolean: boolean;
  deceasedDateTIme: string;
}
