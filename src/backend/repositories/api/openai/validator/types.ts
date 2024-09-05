interface Criteria {
  validation: string; //criteria detail to be used as the basis of validation
}
interface ValidatorTemplate {
  diagnosis: string; // name of the diagnosis
  icd10Coding: string; // ICD 10 Coding for the diagnosis
  criterias: Criteria[]; // list of criteria for the diagnosis
}
type Validation = ValidatorTemplate[];
