import { IdentifierUse } from '../types/identifier-use';

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
