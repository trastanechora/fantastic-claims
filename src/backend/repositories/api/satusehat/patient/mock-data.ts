export const MOCK_PATIENT_ID = 'P02029544667';
export const MOCK_PATIENT_KTP = '3314080101010001';
export const MOCK_PATIENT_NAME = 'Maestro Trastanechora';

export const PATIENT = {
  entry: [
    {
      fullUrl: 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Patient/P02029535280',
      resource: {
        active: true,
        id: 'P02029535280',
        identifier: [
          {
            system: 'https://fhir.kemkes.go.id/id/nik',
            use: 'official',
            value: '################',
          },
          {
            system: 'https://fhir.kemkes.go.id/id/ihs-number',
            use: 'official',
            value: 'P02029535280',
          },
        ],
        meta: {
          lastUpdated: '2024-08-15T06:26:40.469437+00:00',
          profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Patient'],
          versionId: 'MTcyMzcwMzIwMDQ2OTQzNzAwMA',
        },
        name: [
          {
            text: 'Joh***',
            use: 'official',
          },
        ],
        resourceType: 'Patient',
      },
    },
  ],
  link: [
    {
      relation: 'search',
      url: 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Patient/?identifier=https%3A%2F%2Ffhir.kemkes.go.id%2Fid%2Fnik%7C3174031002890009',
    },
    {
      relation: 'first',
      url: 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Patient/?identifier=https%3A%2F%2Ffhir.kemkes.go.id%2Fid%2Fnik%7C3174031002890009',
    },
    {
      relation: 'self',
      url: 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Patient/?identifier=https%3A%2F%2Ffhir.kemkes.go.id%2Fid%2Fnik%7C3174031002890009',
    },
  ],
  resourceType: 'Bundle',
  total: 1,
  type: 'searchset',
};

export const RESPONSE_PATIENT_CREATE = {
  status: 201,
  data: {
    success: true,
    message: 'New Patient has been created successfully',
    data: {
      patient_id: 'P02029544667',
    },
  },
  error: null,
};

export const RESPONSE_PATIENT_GET_BY_ID = {
  status: 200,
  data: {
    active: true,
    id: 'P02029544667',
    identifier: [
      {
        system: 'https://fhir.kemkes.go.id/id/nik',
        use: 'official',
        value: '################',
      },
      {
        system: 'https://fhir.kemkes.go.id/id/kk',
        use: 'official',
        value: '################',
      },
      {
        system: 'https://fhir.kemkes.go.id/id/ihs-number',
        use: 'official',
        value: 'P02029544667',
      },
    ],
    meta: {
      lastUpdated: '2024-08-24T22:53:32.164802+00:00',
      profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Patient'],
      versionId: 'MTcyNDU0MDAxMjE2NDgwMjAwMA',
    },
    resourceType: 'Patient',
  },
  error: null,
};

export const RESPONSE_PATIENT_GET_BY_KTP = {
  status: 200,
  data: {
    entry: [
      {
        fullUrl: 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Patient/P02029544667',
        resource: {
          active: true,
          id: 'P02029544667',
          identifier: [
            {
              system: 'https://fhir.kemkes.go.id/id/nik',
              use: 'official',
              value: '################',
            },
            {
              system: 'https://fhir.kemkes.go.id/id/kk',
              use: 'official',
              value: '################',
            },
            {
              system: 'https://fhir.kemkes.go.id/id/ihs-number',
              use: 'official',
              value: 'P02029544667',
            },
          ],
          meta: {
            lastUpdated: '2024-08-24T22:53:32.164802+00:00',
            profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Patient'],
            versionId: 'MTcyNDU0MDAxMjE2NDgwMjAwMA',
          },
          name: [
            {
              text: 'Mae***',
              use: 'official',
            },
          ],
          resourceType: 'Patient',
        },
      },
    ],
    link: [
      {
        relation: 'search',
        url: 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Patient/?identifier=https%3A%2F%2Ffhir.kemkes.go.id%2Fid%2Fnik%7C3314080101010001',
      },
      {
        relation: 'first',
        url: 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Patient/?identifier=https%3A%2F%2Ffhir.kemkes.go.id%2Fid%2Fnik%7C3314080101010001',
      },
      {
        relation: 'self',
        url: 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Patient/?identifier=https%3A%2F%2Ffhir.kemkes.go.id%2Fid%2Fnik%7C3314080101010001',
      },
    ],
    resourceType: 'Bundle',
    total: 1,
    type: 'searchset',
  },
  error: null,
};

export const BODY_OF_CREATE_PATIENT = {
  resourceType: 'Patient',
  meta: {
    profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Patient'],
  },
  identifier: [
    {
      use: 'official',
      system: 'https://fhir.kemkes.go.id/id/nik',
      value: '3314080101010001',
    },
    // {
    //   use: 'official',
    //   system: 'https://fhir.kemkes.go.id/id/paspor',
    //   value: 'AT123456', // can't find correct format
    // },
    {
      use: 'official',
      system: 'https://fhir.kemkes.go.id/id/kk',
      value: '3314080101000001',
    },
  ],
  active: true,
  name: [
    {
      use: 'official',
      text: 'Maestro Trastanechora',
    },
  ],
  telecom: [
    {
      system: 'phone',
      value: '08123456789',
      use: 'mobile',
    },
    {
      system: 'phone',
      value: '+622123456789',
      use: 'home',
    },
    {
      system: 'email',
      value: 'john.smith@xyz.com',
      use: 'home',
    },
  ],
  gender: 'male',
  birthDate: '2001-01-01',
  deceasedBoolean: false,
  address: [
    {
      use: 'home',
      line: ['Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan'],
      city: 'Jakarta',
      postalCode: '12950',
      country: 'ID',
      extension: [
        {
          url: 'https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode',
          extension: [
            {
              url: 'province',
              valueCode: '33',
            },
            {
              url: 'city',
              valueCode: '3314',
            },
            {
              url: 'district',
              valueCode: '331408',
            },
            {
              url: 'village',
              valueCode: '3314082001',
            },
            {
              url: 'rt',
              valueCode: '2',
            },
            {
              url: 'rw',
              valueCode: '2',
            },
          ],
        },
      ],
    },
  ],
  maritalStatus: {
    coding: [
      {
        system: 'http://terminology.hl7.org/CodeSystem/v3-MaritalStatus',
        code: 'M',
        display: 'Married',
      },
    ],
    text: 'Married',
  },
  multipleBirthInteger: 0,
  contact: [
    {
      relationship: [
        {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/v2-0131',
              code: 'C',
            },
          ],
        },
      ],
      name: {
        use: 'official',
        text: 'Jane Smith',
      },
      telecom: [
        {
          system: 'phone',
          value: '0690383372',
          use: 'mobile',
        },
      ],
    },
  ],
  communication: [
    {
      language: {
        coding: [
          {
            system: 'urn:ietf:bcp:47',
            code: 'id-ID',
            display: 'Indonesian',
          },
        ],
        text: 'Indonesian',
      },
      preferred: true,
    },
  ],
  extension: [
    {
      url: 'https://fhir.kemkes.go.id/r4/StructureDefinition/birthPlace',
      valueAddress: {
        city: 'Bandung',
        country: 'ID',
      },
    },
    {
      url: 'https://fhir.kemkes.go.id/r4/StructureDefinition/citizenshipStatus',
      valueCode: 'WNI',
    },
  ],
};
