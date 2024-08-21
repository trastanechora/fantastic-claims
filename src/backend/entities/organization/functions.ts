import { OrganizationType } from './types';

export const getOrganizationCode = (code: string) => {
  switch (code) {
    case 'prov':
      return OrganizationType.HealthcareProvider;
    case 'dept':
      return OrganizationType.HospitalDepartment;
    case 'team':
      return OrganizationType.OrganizationalTeam;
    case 'govt':
      return OrganizationType.Government;
    case 'ins':
      return OrganizationType.InsuranceCompany;
    case 'pay':
      return OrganizationType.Payer;
    case 'edu':
      return OrganizationType.EducationalInstitute;
    case 'reli':
      return OrganizationType.ReligiousInstitution;
    case 'crs':
      return OrganizationType.ClinicalResearchSponsor;
    case 'cg':
      return OrganizationType.CommunityGroup;
    case 'bus':
      return OrganizationType.NonHealthcareBusinessOrCorporation;
    default:
      return OrganizationType.Other;
  }
};
