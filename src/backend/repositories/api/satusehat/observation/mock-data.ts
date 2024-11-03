import { MOCK_PATIENT_ID, MOCK_PATIENT_NAME } from '../patient/mock-data';
import { MOCK_PRACTITIONER_ID } from '../practitioner/mock-data';
import { MOCK_ENCOUNTER_ID } from '../encounter/mock-data';

export const MOCK_OBSERVATION_ID = '12dc842f-74fd-42b9-a87e-10f4bb981e8c';

export const BODY_OF_CREATE_OBSERVATION = {
  resourceType: 'Observation',
  status: 'final',
  category: [
    {
      coding: [
        {
          system: 'http://terminology.hl7.org/CodeSystem/observation-category',
          code: 'vital-signs',
          display: 'Vital Signs',
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: 'http://loinc.org',
        code: '8867-4',
        display: 'Heart rate',
      },
    ],
  },
  subject: {
    reference: `Patient/${MOCK_PATIENT_ID}`,
  },
  performer: [
    {
      reference: `Practitioner/${MOCK_PRACTITIONER_ID}`,
    },
  ],
  encounter: {
    reference: `Encounter/${MOCK_ENCOUNTER_ID}`,
    display: `Pemeriksaan Fisik Nadi ${MOCK_PATIENT_NAME} di hari Selasa, 14 Juni 2022`,
  },
  effectiveDateTime: '2022-07-14',
  issued: '2022-07-14T14:27:00+07:00',
  valueQuantity: {
    value: 80,
    unit: 'beats/minute',
    system: 'http://unitsofmeasure.org',
    code: '/min',
  },
};

export const RESPONSE_CREATE_OBSERVATION = {
  category: [
    {
      coding: [
        {
          code: 'vital-signs',
          display: 'Vital Signs',
          system: 'http://terminology.hl7.org/CodeSystem/observation-category',
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        code: '8867-4',
        display: 'Heart rate',
        system: 'http://loinc.org',
      },
    ],
  },
  effectiveDateTime: '2022-07-14',
  encounter: {
    display: 'Pemeriksaan Fisik Nadi Maestro Trastanechora di hari Selasa, 14 Juni 2022',
    reference: 'Encounter/12dc842f-74fd-42b9-a87e-10f4bb981e8c',
  },
  id: '40a8c3c0-89fb-4ed3-b646-399c6a909d8a',
  issued: '2022-07-14T14:27:00+07:00',
  meta: {
    lastUpdated: '2022-12-30T02:04:21.968692+00:00',
    versionId: 'MTY3MjM2NTg2MTk2ODY5MjAwMA',
  },
  performer: [
    {
      reference: 'Practitioner/N10000001',
    },
  ],
  resourceType: 'Observation',
  status: 'final',
  subject: {
    reference: 'Patient/P02029544667',
  },
  valueQuantity: {
    code: '/min',
    system: 'http://unitsofmeasure.org',
    unit: 'beats/minute',
    value: 80,
  },
};

export const RESPONSE_OBSERVATION_GET_BY_ID = {
  category: [
    {
      coding: [
        {
          code: 'vital-signs',
          display: 'Vital Signs',
          system: 'http://terminology.hl7.org/CodeSystem/observation-category',
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        code: '8867-4',
        display: 'Heart rate',
        system: 'http://loinc.org',
      },
    ],
  },
  effectiveDateTime: '2022-07-14',
  encounter: {
    display: 'Pemeriksaan Fisik Nadi Budi Santoso di hari Selasa, 14 Juni 2022',
    reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
  },
  id: '6d6186d9-9f29-4837-98f1-b61ac593ce15',
  meta: {
    lastUpdated: '2022-08-24T03:49:47.563124+00:00',
    versionId: 'MTY2MTMxMjk4NzU2MzEyNDAwMA',
  },
  resourceType: 'Observation',
  status: 'final',
  subject: {
    reference: 'Patient/P00030004',
  },
  valueQuantity: {
    code: '/min',
    system: 'http://unitsofmeasure.org',
    unit: 'beats/minute',
    value: 80,
  },
};

export const RESPONSE_OBSERVATION_GET_BY_ENCOUNTER_ID = {
  entry: [
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/6d6186d9-9f29-4837-98f1-b61ac593ce15',
      resource: {
        category: [
          {
            coding: [
              {
                code: 'vital-signs',
                display: 'Vital Signs',
                system: 'http://terminology.hl7.org/CodeSystem/observation-category',
              },
            ],
          },
        ],
        code: {
          coding: [
            {
              code: '8867-4',
              display: 'Heart rate',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Nadi Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '6d6186d9-9f29-4837-98f1-b61ac593ce15',
        meta: {
          lastUpdated: '2022-08-24T03:49:47.563124+00:00',
          versionId: 'MTY2MTMxMjk4NzU2MzEyNDAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: '/min',
          system: 'http://unitsofmeasure.org',
          unit: 'beats/minute',
          value: 80,
        },
      },
      search: {
        mode: 'match',
      },
    },
  ],
  resourceType: 'Bundle',
  total: 55,
  type: 'searchset',
};
