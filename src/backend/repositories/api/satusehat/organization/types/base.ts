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

export interface Telcom {
  system: string;
  value: string;
  use: string;
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

export interface PartOf {
  reference: string;
}

interface Coding {
  system: string;
  code: string;
  display: string;
}

export interface Type {
  coding: Coding[];
}
