export const MOCK_CONDITION_ID = '12dc842f-74fd-42b9-a87e-10f4bb981e8c';

export const BODY_OF_CREATE_CONDITION_1 = {
  resourceType: 'Condition',
  clinicalStatus: {
    coding: [
      {
        system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
        code: 'active',
        display: 'Active',
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/condition-category',
          code: 'problem-list-item',
          display: 'Problem List Item',
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: 'http://snomed.info/sct',
        code: '359746009',
        display: "Patient's condition stable",
      },
    ],
  },
  subject: {
    reference: 'Patient/{{patient_id}}',
    display: '{{patient_name}}',
  },
  encounter: {
    reference: 'Encounter/{{Encounter_uuid}}',
    display: 'Kunjungan {{patient_name}} di tanggakl 14 Juli 2023',
  },
};

export const BODY_OF_CREATE_CONDITION_2 = {
  resourceType: 'Condition',
  clinicalStatus: {
    coding: [
      {
        system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
        code: 'active',
        display: 'Active',
      },
    ],
  },
  category: [
    {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/condition-category',
          code: 'problem-list-item',
          display: 'Problem List Item',
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: 'http://snomed.info/sct',
        code: '49727002',
        display: 'Cough',
      },
    ],
  },
  onsetRange: {
    low: {
      value: 1,
      unit: 'mo',
      system: 'http://unitsofmeasure.org',
      code: 'mo',
    },
    high: {
      value: 239,
      unit: 'mo',
      system: 'http://unitsofmeasure.org',
      code: 'mo',
    },
  },
  recordedDate: '2022-06-14T08:45:00+07:00',
  subject: {
    reference: 'Patient/{{patient_id}}',
    display: 'Maestro Trastanechora',
  },
  encounter: {
    reference: 'Encounter/{{Encounter_uuid}}',
    display: 'Kunjungan Maestro Trastanechora di tanggakl 14 Juli 2023',
  },
};

export const RESPONSE_CREATE_CONDITION_1 = {
  category: [
    {
      coding: [
        {
          code: 'problem-list-item',
          display: 'Problem List Item',
          system: 'http://terminology.hl7.org/CodeSystem/condition-category',
        },
      ],
    },
  ],
  clinicalStatus: {
    coding: [
      {
        code: 'active',
        display: 'Active',
        system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
      },
    ],
  },
  code: {
    coding: [
      {
        code: '359746009',
        display: "Patient's condition stable",
        system: 'http://snomed.info/sct',
      },
    ],
  },
  encounter: {
    display: 'Kunjungan Maestro Trastanechora di tanggakl 14 Juli 2023',
    reference: 'Encounter/12dc842f-74fd-42b9-a87e-10f4bb981e8c',
  },
  id: '675c8593-db4b-4b24-80ae-77a09bb5f972',
  identifier: [],
  meta: {
    lastUpdated: '2024-09-03T10:25:34.232213+00:00',
    versionId: 'MTcyNTM1OTEzNDIzMjIxMzAwMA',
  },
  resourceType: 'Condition',
  subject: {
    display: 'Maestro Trastanechora',
    reference: 'Patient/P02478375538',
  },
};

export const RESPONSE_CREATE_CONDITION_2 = {
  category: [
    {
      coding: [
        {
          code: 'problem-list-item',
          display: 'Problem List Item',
          system: 'http://terminology.hl7.org/CodeSystem/condition-category',
        },
      ],
    },
  ],
  clinicalStatus: {
    coding: [
      {
        code: 'active',
        display: 'Active',
        system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
      },
    ],
  },
  code: {
    coding: [
      {
        code: '49727002',
        display: 'Cough',
        system: 'http://snomed.info/sct',
      },
    ],
  },
  encounter: {
    display: 'Kunjungan Maestro Trastanechora di tanggakl 14 Juli 2023',
    reference: 'Encounter/12dc842f-74fd-42b9-a87e-10f4bb981e8c',
  },
  id: 'ee2c3d70-28aa-4d60-bd06-3ad8c683e62b',
  identifier: [],
  meta: {
    lastUpdated: '2024-09-03T10:27:35.553346+00:00',
    versionId: 'MTcyNTM1OTI1NTU1MzM0NjAwMA',
  },
  onsetRange: {
    high: {
      code: 'mo',
      system: 'http://unitsofmeasure.org',
      unit: 'mo',
      value: 239,
    },
    low: {
      code: 'mo',
      system: 'http://unitsofmeasure.org',
      unit: 'mo',
      value: 1,
    },
  },
  recordedDate: '2022-06-14T08:45:00+07:00',
  resourceType: 'Condition',
  subject: {
    display: 'Maestro Trastanechora',
    reference: 'Patient/P02478375538',
  },
};
