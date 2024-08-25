import type { Telecomunication } from '../telecomunication/types';

/**
 * @description a set of codes that can be used to indicate a type of address
 * @source https://hl7.org/fhir/codesystem-address-type.html
 */
export enum AddressType {
  Postal = 'postal',
  Physical = 'physical',
  Both = 'both',
}

/**
 * @description a set of codes that can be used to indicate a use of address
 * @source https://hl7.org/fhir/codesystem-address-use.html
 */
export enum AddressUse {
  Home = 'home',
  Work = 'work',
  Temporary = 'temp',
  Billing = 'billing',
  Old = 'old',
}

/**
 * @description a set of codes that can be used to indicate the purpose for which you would contact a contact party
 * @source https://terminology.hl7.org/6.0.2/CodeSystem-contactentity-type.html
 */
export enum AddressContactType {
  Bill = 'BILL',
  Admin = 'ADMIN',
  HR = 'HR',
  Payor = 'PAYOR',
  Press = 'PRESS',
  Patient = 'PATINF',
}

interface Extension {
  url: string;
  valueCode: string;
}

interface AddressExtension {
  extensions: Extension[];
  url: string;
}

export interface Address {
  city: string;
  country: string;
  line: string[];
  postalCode: string;
  type: AddressType;
  use: AddressUse;
  extensions: AddressExtension[];
  contacts: {
    purpose: AddressContactType;
    names: {
      use: string;
      text: string;
    };
    telecomunications: Telecomunication[];
  };
}
