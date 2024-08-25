/**
 * @description a set of codes that can be used to indicate a system of telecomunication
 * @source https://hl7.org/fhir/codesystem-contact-point-system.html
 */
export enum TelecomunicationSystem {
  Phone = 'phone',
  Fax = 'fax',
  Email = 'email',
  Pager = 'pager',
  URL = 'url',
  SMS = 'sms',
  Other = 'other',
}

/**
 * @description a set of codes that can be used to indicate a use of telecomunication
 * @source https://hl7.org/fhir/codesystem-contact-point-use.html
 */
export enum TelecomunicationUse {
  Home = 'home',
  Work = 'work',
  Temporary = 'temp',
  Mobile = 'mobile',
  Old = 'old',
}

export interface Telecomunication {
  system: TelecomunicationSystem;
  use: TelecomunicationUse;
  value: string;
}
