import type { Address } from '../address/types';
import type { Telecomunication } from '../telecomunication/types';
import { IdentifierUse } from '../use/types';

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

/**
 * @description a set of codes that can be used to identifies the purpose for this identifier, if known
 * @source https://hl7.org/fhir/codesystem-identifier-use.html
 */
type OrganizationIdentifierUse = IdentifierUse;

interface OrganizationIdentifier {
  system: string;
  use: OrganizationIdentifierUse;
  value: string;
}

interface TypeCodingItem {
  code: OrganizationType;
  display: string;
  system: string;
}

interface TypeCoding {
  codings: TypeCodingItem[];
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
  identifiers: OrganizationIdentifier[];
  isActive: boolean;
  addresses: Address[];
  telecomunications: Telecomunication[];
  types: TypeCoding[];
  meta: Meta;
  relations: Relation[];
}
