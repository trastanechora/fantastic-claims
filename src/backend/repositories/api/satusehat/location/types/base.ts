export interface Telcom {
  system: string;
  value: string;
  use: string;
}

export interface Identifier {
  system: string;
  value: string;
}

export interface Position {
  longitude: number;
  latitude: number;
  altitude: number;
}

interface Coding {
  system: string;
  code: string;
  display: string;
}

export interface LocationPhysicalType {
  coding: Coding[];
}

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

export interface LocationManagingOrganization {
  reference: string;
}

export interface Meta {
  lastUpdate: string;
  versionId: string;
}
