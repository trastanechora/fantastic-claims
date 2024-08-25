import { AddressType, AddressUse, AddressContactType } from './types';

export const getAddressType = (code: string) => {
  switch (code) {
    case 'postal':
      return AddressType.Postal;
    case 'physical':
      return AddressType.Physical;
    default:
      return AddressType.Both;
  }
};

export const getAddressUse = (code: string) => {
  switch (code) {
    case 'home':
      return AddressUse.Home;
    case 'work':
      return AddressUse.Work;
    case 'temp':
      return AddressUse.Temporary;
    case 'billing':
      return AddressUse.Billing;
    default:
      return AddressUse.Old;
  }
};

export const getAddressContactType = (code: string) => {
  switch (code) {
    case 'BILL':
      return AddressContactType.Bill;
    case 'ADMIN':
      return AddressContactType.Admin;
    case 'HR':
      return AddressContactType.HR;
    case 'PAYOR':
      return AddressContactType.Payor;
    case 'PRESS':
      return AddressContactType.Press;
    default:
      return AddressContactType.Patient;
  }
};
