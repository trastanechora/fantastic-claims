import { IdentifierUse } from './types';

export const getIdentifierUse = (code: string) => {
  switch (code) {
    case 'usual':
      return IdentifierUse.Usual;
    case 'official':
      return IdentifierUse.Official;
    case 'secondary':
      return IdentifierUse.Seconsary;
    default:
      return IdentifierUse.Temporary;
  }
};
