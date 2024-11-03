import type { Address, Coding, Identifier, Name, Telcom } from './base';

interface ContactRelationshipCoding {
  system: string;
  code: string;
}

interface ContactRelationship {
  coding: ContactRelationshipCoding[];
}

interface Contact {
  relationship: ContactRelationship[];
  name: Name;
  telcom: Telcom[];
}

interface Communication {
  language: {
    coding: Coding[];
    text: string;
  };
  preferred: boolean;
}

interface ExtensionValueAddress {
  city: string;
  country: string;
}

interface Extension {
  url: string;
  valueCode?: string;
  valueAddress?: ExtensionValueAddress;
}

export interface RequestPostPatient {
  resourceType: 'Patient';
  meta: {
    profile: string;
  };
  identifier: Identifier[];
  active: boolean;
  name: Name[];
  telcom: Telcom[];
  gender: string;
  birthdate: string;
  deceasedBoolean: boolean;
  address: Address[];
  maritalStatus: {
    text: string;
    coding: Coding[];
  };
  multipleBirthInteger: number;
  contact: Contact[];
  communication: Communication[];
  extension: Extension[];
}
