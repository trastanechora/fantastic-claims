/**
 * @description a set of codes that can be used to indicate a type of organization
 * @source https://terminology.hl7.org/6.0.2/CodeSystem-organization-type.html
 */
export enum OrganizationType {
  HealthcareProvider = 'prov',
  HospitalDepartment = 'dept',
  OrganizationalTeam = 'team',
  Government = 'govt',
  InsuranceCompany = 'ins',
  Payer = 'pay',
  EducationalInstitute = 'edu',
  ReligiousInstitution = 'reli',
  ClinicalResearchSponsor = 'crs',
  CommunityGroup = 'cg',
  NonHealthcareBusinessOrCorporation = 'bus',
  Other = 'other',
}

interface Extension {
  url: string;
  valueCode: string;
}

interface AddressExtension {
  extensions: Extension[];
  url: string;
}

interface Address {
  city: string;
  country: string;
  line: string[];
  postalCode: string;
  type: string;
  use: string;
  extensions: AddressExtension[];
}

interface DynamicField {
  system: string;
  use: string;
  value: string;
}

interface DynamicCoding {
  code: OrganizationType;
  display: string;
  system: string;
}

interface TypeCoding {
  codings: DynamicCoding[];
}

interface Meta {
  lastUpdated: string;
  versionId: string;
}

interface Relation {
  type: string;
  id: string;
}

export interface Organization {
  id: string;
  name: string;
  identifiers: DynamicField[];
  isActive: boolean;
  addresses: Address[];
  telecomunications: DynamicField[];
  types: TypeCoding[];
  meta: Meta;
  relations: Relation[];
}
