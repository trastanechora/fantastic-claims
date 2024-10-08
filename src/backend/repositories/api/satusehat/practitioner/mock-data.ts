export const MOCK_PRACTITIONER_ID = 'N10000001';
export const MOCK_PRACTITIONER_NAME = 'Dokter Bronsig';

export const RESPONSE_PRACTITIONER_BY_ID = {
  status: 200,
  data: {
    address: [
      {
        city: 'Jakarta',
        country: 'ID',
        extension: [
          {
            extension: [
              {
                url: 'province',
                valueCode: '10',
              },
              {
                url: 'city',
                valueCode: '1010',
              },
              {
                url: 'district',
                valueCode: '1010101',
              },
              {
                url: 'village',
                valueCode: '1010101101',
              },
              {
                url: 'rt',
                valueCode: '1',
              },
              {
                url: 'rw',
                valueCode: '2',
              },
            ],
            url: 'https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode',
          },
        ],
        line: ['Gd. Prof. Dr. Sujudi Lt.5, Jl. H.R. Rasuna Said Blok X5 Kav. 4-9 Kuningan'],
        postalCode: '12950',
        use: 'home',
      },
    ],
    birthDate: '1945-11-17',
    gender: 'male',
    id: 'N10000001',
    identifier: [
      {
        system: 'https://fhir.kemkes.go.id/id/nakes-his-number',
        use: 'official',
        value: 'N10000001',
      },
      {
        system: 'https://fhir.kemkes.go.id/id/nik',
        use: 'official',
        value: '367400001111222',
      },
    ],
    meta: {
      lastUpdated: '2022-10-12T08:17:28.794983+00:00',
      versionId: 'MTY2NTU2MjY0ODc5NDk4MzAwMA',
    },
    name: [
      {
        prefix: ['Dr.', 'dr.'],
        suffix: ['MARS.'],
        text: 'Voigt',
        use: 'official',
      },
    ],
    qualification: [
      {
        code: {
          coding: [
            {
              code: 'STR-KKI',
              display: 'Surat Tanda Registrasi Dokter',
              system: 'https://terminology.kemkes.go.id/v1-0302',
            },
          ],
        },
        identifier: [
          {
            system: 'https://fhir.kemkes.go.id/id/str-kki-number',
            use: 'official',
            value: '2938/28377/STR/00001',
          },
        ],
        issuer: {
          display: 'Konsil Kedokteran Indonesia',
          reference: 'Organization/10000003',
        },
        period: {
          end: '2023-01-01',
          start: '1995-01-01',
        },
      },
      {
        code: {
          coding: [
            {
              code: 'BS',
              display: 'Bachelor of Science',
              system: 'http://terminology.hl7.org/CodeSystem/v2-0360',
            },
          ],
          text: 'Bachelor of Science',
        },
        identifier: [
          {
            system: 'http://example-university.ac.id/certificate-number',
            value: '12345',
          },
        ],
        issuer: {
          display: 'Universitas Example',
          reference: 'Organization/10000002',
        },
        period: {
          start: '1995',
        },
      },
    ],
    resourceType: 'Practitioner',
    telecom: [
      {
        system: 'phone',
        use: 'mobile',
        value: '08123456789',
      },
      {
        system: 'phone',
        use: 'home',
        value: '+622123456789',
      },
      {
        system: 'email',
        use: 'home',
        value: 'voigt@xyz.com',
      },
    ],
  },
  error: null,
};
