import { TelecomunicationSystem, TelecomunicationUse } from '../types/telecomunication';

export const getTelecomunicationSystem = (code: string) => {
  switch (code) {
    case 'phone':
      return TelecomunicationSystem.Phone;
    case 'fax':
      return TelecomunicationSystem.Fax;
    case 'email':
      return TelecomunicationSystem.Email;
    case 'pager':
      return TelecomunicationSystem.Pager;
    case 'url':
      return TelecomunicationSystem.URL;
    case 'sms':
      return TelecomunicationSystem.SMS;
    default:
      return TelecomunicationSystem.Other;
  }
};

export const getTelecomunicationUse = (code: string) => {
  switch (code) {
    case 'home':
      return TelecomunicationUse.Home;
    case 'work':
      return TelecomunicationUse.Work;
    case 'temp':
      return TelecomunicationUse.Temporary;
    case 'mobile':
      return TelecomunicationUse.Mobile;
    default:
      return TelecomunicationUse.Old;
  }
};
