export const RESPONSE_ORGANIZATION_BY_PARENT_ID = {
  status: 200,
  data: {
    entry: [
      {
        fullUrl:
          'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Organization/e86e82c8-50ff-4b16-84e4-6530c8f1d5ea',
        resource: {
          active: true,
          address: [
            {
              city: 'Jakarta',
              country: 'ID',
              extension: [
                {
                  extension: [
                    {
                      url: 'province',
                      valueCode: '31',
                    },
                    {
                      url: 'city',
                      valueCode: '3171',
                    },
                    {
                      url: 'district',
                      valueCode: '317101',
                    },
                    {
                      url: 'village',
                      valueCode: '31710101',
                    },
                  ],
                  url: 'https://fhir.kemkes.go.id/r4/StructureDefinition/administrativeCode',
                },
              ],
              line: ['Jalan Jati Asih'],
              postalCode: '55292',
              type: 'both',
              use: 'work',
            },
          ],
          id: 'e86e82c8-50ff-4b16-84e4-6530c8f1d5ea',
          identifier: [
            {
              system:
                'http://sys-ids.kemkes.go.id/organization/36c416ae-6c05-4728-b30a-d23816a59ed0',
              use: 'official',
              value: 'Rumah Sehat Maestro',
            },
          ],
          meta: {
            lastUpdated: '2024-08-15T11:20:53.339322+00:00',
            versionId: 'MTcyMzcyMDg1MzMzOTMyMjAwMA',
          },
          name: 'Pos Imunisasi',
          partOf: {
            reference: 'Organization/36c416ae-6c05-4728-b30a-d23816a59ed0',
          },
          resourceType: 'Organization',
          telecom: [
            {
              system: 'phone',
              use: 'work',
              value: '+6221-783042654',
            },
            {
              system: 'email',
              use: 'work',
              value: 'rs-satusehat@gmail.com',
            },
            {
              system: 'url',
              use: 'work',
              value: 'www.rs-satusehat@gmail.com',
            },
          ],
          type: [
            {
              coding: [
                {
                  code: 'dept',
                  display: 'Hospital Department',
                  system: 'http://terminology.hl7.org/CodeSystem/organization-type',
                },
              ],
            },
          ],
        },
      },
    ],
    link: [
      {
        relation: 'search',
        url: 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Organization/?partof=36c416ae-6c05-4728-b30a-d23816a59ed0',
      },
      {
        relation: 'first',
        url: 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Organization/?partof=36c416ae-6c05-4728-b30a-d23816a59ed0',
      },
      {
        relation: 'self',
        url: 'https://api-satusehat-stg.dto.kemkes.go.id/fhir-r4/v1/Organization/?partof=36c416ae-6c05-4728-b30a-d23816a59ed0',
      },
    ],
    resourceType: 'Bundle',
    total: 1,
    type: 'searchset',
  },
  error: null,
};
