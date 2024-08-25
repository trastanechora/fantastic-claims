export const BODY_OF_CREATE_LOCATION = {
  resourceType: 'Location',
  identifier: [
    {
      system: 'http://sys-ids.kemkes.go.id/location/36c416ae-6c05-4728-b30a-d23816a59ed0',
      value: 'G-2-R-1A',
    },
  ],
  status: 'active',
  name: 'Ruang Periksa SATU - Maestro RS',
  description: 'Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G',
  mode: 'instance',
  telecom: [
    {
      system: 'phone',
      value: '2328',
      use: 'work',
    },
    {
      system: 'fax',
      value: '2329',
      use: 'work',
    },
    {
      system: 'email',
      value: 'second wing admissions',
    },
    {
      system: 'url',
      value: 'http://sampleorg.com/southwing',
      use: 'work',
    },
  ],
  address: {
    use: 'work',
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
      },
    ],
  },
  physicalType: {
    coding: [
      {
        system: 'http://terminology.hl7.org/CodeSystem/location-physical-type',
        code: 'ro',
        display: 'Room',
      },
    ],
  },
  position: {
    longitude: -6.23115426275766,
    latitude: 106.83239885393944,
    altitude: 0,
  },
  managingOrganization: {
    reference: 'Organization/36c416ae-6c05-4728-b30a-d23816a59ed0',
  },
};

export const RESPONSE_CREATE_LOCATION = {
  status: 201,
  data: {
    address: {
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
      use: 'work',
    },
    description: 'Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G',
    id: '65d70fff-27dd-40a1-b268-3cc8f1817426',
    identifier: [
      {
        system: 'http://sys-ids.kemkes.go.id/location/36c416ae-6c05-4728-b30a-d23816a59ed0',
        value: 'G-2-R-1A',
      },
    ],
    managingOrganization: {
      reference: 'Organization/36c416ae-6c05-4728-b30a-d23816a59ed0',
    },
    meta: {
      lastUpdated: '2024-08-25T05:28:54.074852+00:00',
      versionId: 'MTcyNDU2MzczNDA3NDg1MjAwMA',
    },
    mode: 'instance',
    name: 'Ruang Periksa SATU - Maestro RS',
    physicalType: {
      coding: [
        {
          code: 'ro',
          display: 'Room',
          system: 'http://terminology.hl7.org/CodeSystem/location-physical-type',
        },
      ],
    },
    position: {
      altitude: 0,
      latitude: 106.83239885393944,
      longitude: -6.23115426275766,
    },
    resourceType: 'Location',
    status: 'active',
    telecom: [
      {
        system: 'phone',
        use: 'work',
        value: '2328',
      },
      {
        system: 'fax',
        use: 'work',
        value: '2329',
      },
      {
        system: 'email',
        value: 'second wing admissions',
      },
      {
        system: 'url',
        use: 'work',
        value: 'http://sampleorg.com/southwing',
      },
    ],
  },
  error: null,
};

export const RESPONSE_LOCATION_GET_BY_ID = {
  status: 200,
  data: {
    address: {
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
      use: 'work',
    },
    description: 'Ruang 1A, Poliklinik Bedah Rawat Jalan Terpadu, Lantai 2, Gedung G',
    id: '65d70fff-27dd-40a1-b268-3cc8f1817426',
    identifier: [
      {
        system: 'http://sys-ids.kemkes.go.id/location/36c416ae-6c05-4728-b30a-d23816a59ed0',
        value: 'G-2-R-1A',
      },
    ],
    managingOrganization: {
      reference: 'Organization/36c416ae-6c05-4728-b30a-d23816a59ed0',
    },
    meta: {
      lastUpdated: '2024-08-25T05:28:54.074852+00:00',
      versionId: 'MTcyNDU2MzczNDA3NDg1MjAwMA',
    },
    mode: 'instance',
    name: 'Ruang Periksa SATU - Maestro RS',
    physicalType: {
      coding: [
        {
          code: 'ro',
          display: 'Room',
          system: 'http://terminology.hl7.org/CodeSystem/location-physical-type',
        },
      ],
    },
    position: {
      altitude: 0,
      latitude: 106.83239885393944,
      longitude: -6.23115426275766,
    },
    resourceType: 'Location',
    status: 'active',
    telecom: [
      {
        system: 'phone',
        use: 'work',
        value: '2328',
      },
      {
        system: 'fax',
        use: 'work',
        value: '2329',
      },
      {
        system: 'email',
        value: 'second wing admissions',
      },
      {
        system: 'url',
        use: 'work',
        value: 'http://sampleorg.com/southwing',
      },
    ],
  },
  error: null,
};
