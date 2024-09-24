interface AddressExtensionItem {
  url: string;
  valueCode: string;
}

interface AddressExtension {
  url: string;
  extension: AddressExtensionItem[];
}

export interface Address {
  use: string;
  line: string[];
  city: string;
  postalCode: string;
  country: string;
  extension: AddressExtension[];
}

export interface Identifier {
  system: string;
  value: string;
  use: string;
}

export interface Meta {
  lastUpdate: string;
  versionId: string;
}

export interface Name {
  prefix: string[];
  suffix: string[];
  text: string;
  use: string;
}

export interface Period {
  start: string;
  end?: string;
}

interface QualificationCoding {
  code: string;
  display: string;
  system: string;
}

export interface Qualification {
  code: {
    coding: QualificationCoding[];
  };
  identifier: Identifier[];
  issuer: {
    display: string;
    reference: string;
  };
  period: Period;
}

export interface Telcom {
  system: string;
  value: string;
  use: string;
}
