import { MOCK_PATIENT_ID, MOCK_PATIENT_NAME } from '../patient/mock-data';
import { MOCK_PRACTITIONER_ID } from '../practitioner/mock-data';
import { MOCK_ORGANIZATION_ID } from '../organization/mock-data';

export const MOCK_ENCOUNTER_ID = '12dc842f-74fd-42b9-a87e-10f4bb981e8c';
export const BODY_OF_CREATE_ENCOUNTER = {
  resourceType: 'Encounter',
  status: 'arrived',
  class: {
    system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
    code: 'AMB',
    display: 'ambulatory',
  },
  subject: {
    reference: `Patient/${MOCK_PATIENT_ID}`,
    display: MOCK_PATIENT_NAME,
  },
  participant: [
    {
      type: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
              code: 'ATND',
              display: 'attender',
            },
          ],
        },
      ],
      individual: {
        reference: `Practitioner/${MOCK_PRACTITIONER_ID}`,
        display: 'Dokter Bronsig',
      },
    },
  ],
  period: {
    start: '2022-06-14T07:00:00+07:00',
  },
  location: [
    {
      location: {
        reference: 'Location/b017aa54-f1df-4ec2-9d84-8823815d7228',
        display: 'Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G',
      },
    },
  ],
  statusHistory: [
    {
      status: 'arrived',
      period: {
        start: '2022-06-14T07:00:00+07:00',
      },
    },
  ],
  serviceProvider: {
    reference: `Organization/${MOCK_ORGANIZATION_ID}`,
  },
  identifier: [
    {
      system: `http://sys-ids.kemkes.go.id/encounter/${MOCK_ORGANIZATION_ID}`,
      value: 'P20240001', // Unique id saved from local healthcare
    },
  ],
};

export const RESPONSE_CREATE_ENCOUNTER = {
  status: 201,
  data: {
    class: {
      code: 'AMB',
      display: 'ambulatory',
      system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
    },
    id: '12dc842f-74fd-42b9-a87e-10f4bb981e8c',
    identifier: [
      {
        system: 'http://sys-ids.kemkes.go.id/encounter/36c416ae-6c05-4728-b30a-d23816a59ed0',
        value: 'P20240001',
      },
    ],
    location: [
      {
        location: {
          display: 'Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G',
          reference: 'Location/b017aa54-f1df-4ec2-9d84-8823815d7228',
        },
      },
    ],
    meta: {
      lastUpdated: '2024-08-25T06:54:35.008120+00:00',
      versionId: 'MTcyNDU2ODg3NTAwODEyMDAwMA',
    },
    participant: [
      {
        individual: {
          display: 'Dokter Bronsig',
          reference: 'Practitioner/N10000001',
        },
        type: [
          {
            coding: [
              {
                code: 'ATND',
                display: 'attender',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
              },
            ],
          },
        ],
      },
    ],
    period: {
      start: '2022-06-14T07:00:00+07:00',
    },
    resourceType: 'Encounter',
    serviceProvider: {
      reference: 'Organization/36c416ae-6c05-4728-b30a-d23816a59ed0',
    },
    status: 'arrived',
    statusHistory: [
      {
        period: {
          start: '2022-06-14T07:00:00+07:00',
        },
        status: 'arrived',
      },
    ],
    subject: {
      display: 'Maestro Trastanechora',
      reference: 'Patient/P02029544667',
    },
  },
  error: null,
};

export const RESPONSE_ENCOUNTER_BY_ID = {
  status: 200,
  data: {
    class: {
      code: 'AMB',
      display: 'ambulatory',
      system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
    },
    id: '12dc842f-74fd-42b9-a87e-10f4bb981e8c',
    identifier: [
      {
        system: 'http://sys-ids.kemkes.go.id/encounter/36c416ae-6c05-4728-b30a-d23816a59ed0',
        value: 'P20240001',
      },
    ],
    location: [
      {
        location: {
          display: 'Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G',
          reference: 'Location/b017aa54-f1df-4ec2-9d84-8823815d7228',
        },
      },
    ],
    meta: {
      lastUpdated: '2024-08-25T06:54:35.008120+00:00',
      versionId: 'MTcyNDU2ODg3NTAwODEyMDAwMA',
    },
    participant: [
      {
        individual: {
          display: 'Dokter Bronsig',
          reference: 'Practitioner/N10000001',
        },
        type: [
          {
            coding: [
              {
                code: 'ATND',
                display: 'attender',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ParticipationType',
              },
            ],
          },
        ],
      },
    ],
    period: {
      start: '2022-06-14T07:00:00+07:00',
    },
    resourceType: 'Encounter',
    serviceProvider: {
      reference: 'Organization/36c416ae-6c05-4728-b30a-d23816a59ed0',
    },
    status: 'arrived',
    statusHistory: [
      {
        period: {
          start: '2022-06-14T07:00:00+07:00',
        },
        status: 'arrived',
      },
    ],
    subject: {
      display: 'Maestro Trastanechora',
      reference: 'Patient/P02029544667',
    },
  },
  error: null,
};
