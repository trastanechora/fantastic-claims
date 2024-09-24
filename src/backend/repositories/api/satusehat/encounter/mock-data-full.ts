// GET by ID
export const ENCOUNTER = {
  class: {
    code: 'AMB',
    display: 'ambulatory',
    system: 'http://terminology.hl7.org/CodeSystem/v3-ActCode',
  },
  diagnosis: [
    {
      condition: {
        display: 'Laboratory examination',
        reference: 'Condition/0abfe934-9956-4e8e-b389-cd8f7c7971ae',
      },
      rank: 1,
      use: {
        coding: [
          {
            code: 'encounter-diagnosis',
            display: 'Discharge diagnosis',
            system: 'http://terminology.hl7.org/CodeSystem/condition-category',
          },
        ],
      },
    },
  ],
  id: '4a6174db-e672-4f89-9829-02b758a9fb21',
  identifier: [
    {
      system: 'http://sys-ids.kemkes.go.id/encounter/10080017',
      value: 'P20240001',
    },
  ],
  location: [
    {
      location: {
        display: 'LABKLIN KF RADIO DALAM',
        reference: 'Location/8cbc0f08-73ae-4d0e-a469-72d57e5c25ec',
      },
    },
  ],
  meta: {
    lastUpdated: '2022-08-02T07:57:45.080820+00:00',
    versionId: 'MTY1OTQyNzA2NTA4MDgyMDAwMA',
  },
  period: {
    end: '2022-06-14T09:00:00+07:00',
    start: '2022-06-14T07:00:00+07:00',
  },
  resourceType: 'Encounter',
  serviceProvider: {
    display: 'LABKLIN KF RADIO DALAM',
    reference: 'Organization/10080017',
  },
  status: 'finished',
  subject: {
    display: 'Budi Santoso',
    reference: 'Patient/100000030009',
  },
};

// Get by ID
export const PATIENT = {
  active: true,
  id: 'P02478375538',
  identifier: [
    {
      system: 'https://fhir.kemkes.go.id/id/ihs-number',
      use: 'official',
      value: 'P02478375538',
    },
    {
      system: 'https://fhir.kemkes.go.id/id/nik',
      use: 'official',
      value: '################',
    },
  ],
  link: [
    {
      other: {
        reference: 'Patient/P02478375538',
      },
      type: 'refer',
    },
  ],
  meta: {
    lastUpdated: '2023-03-08T13:11:53.191496+00:00',
    profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Patient'],
    versionId: 'MTY3ODI4MTExMzE5MTQ5NjAwMA',
  },
  resourceType: 'Patient',
};

// Get by ID
export const PRACTITIONAER = {
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
  id: 'N10000005',
  identifier: [
    {
      system: 'https://fhir.kemkes.go.id/id/nakes-his-number',
      use: 'official',
      value: 'N10000005',
    },
    {
      system: 'https://fhir.kemkes.go.id/id/nik',
      use: 'official',
      value: '367400001111222',
    },
  ],
  meta: {
    lastUpdated: '2022-08-20T16:27:02.097059+00:00',
    versionId: 'MTY2MTAxMjgyMjA5NzA1OTAwMA',
  },
  name: [
    {
      text: 'Paul Therapist, PT',
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
            system: 'http://terminology.kemkes.go.id/v1-0302',
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
};

// Get by Encounter ID
export const CONDITION = {
  entry: [
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Condition/cfbfb2a9-b261-494b-a6ad-905875fcdec6',
      resource: {
        category: [
          {
            coding: [
              {
                code: 'encounter-diagnosis',
                display: 'Encounter Diagnosis',
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
              code: 'K35.8',
              display: 'Acute appendicitis, other and unspecified',
              system: 'http://hl7.org/fhir/sid/icd-10',
            },
          ],
        },
        encounter: {
          display: 'Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/abc329d0-1692-4772-9340-e75df4b29eda',
        },
        id: 'cfbfb2a9-b261-494b-a6ad-905875fcdec6',
        meta: {
          lastUpdated: '2022-08-02T05:01:32.386871+00:00',
          versionId: 'MTY1OTQxNjQ5MjM4Njg3MTAwMA',
        },
        resourceType: 'Condition',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/100000030009',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Condition/eebc5f97-0e7b-488f-835e-b8c654aa46af',
      resource: {
        category: [
          {
            coding: [
              {
                code: 'encounter-diagnosis',
                display: 'Encounter Diagnosis',
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
              code: 'A91',
              display: 'Dengue haemorrhagic fever',
              system: 'http://hl7.org/fhir/sid/icd-10',
            },
          ],
        },
        encounter: {
          display: 'Kunjungan Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/abc329d0-1692-4772-9340-e75df4b29eda',
        },
        id: 'eebc5f97-0e7b-488f-835e-b8c654aa46af',
        meta: {
          lastUpdated: '2022-08-02T05:01:32.386871+00:00',
          versionId: 'MTY1OTQxNjQ5MjM4Njg3MTAwMA',
        },
        resourceType: 'Condition',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/100000030009',
        },
      },
      search: {
        mode: 'match',
      },
    },
  ],
  resourceType: 'Bundle',
  total: 2,
  type: 'searchset',
};

// Get by Encounter ID
export const OBSERVATION = {
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
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/8d494f75-06aa-4ae5-a918-6e8367dd693e',
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
              code: '8310-5',
              display: 'Body temperature',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Suhu Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '8d494f75-06aa-4ae5-a918-6e8367dd693e',
        interpretation: [
          {
            coding: [
              {
                code: 'H',
                display: 'High',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di atas nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-24T03:00:52.511386+00:00',
          versionId: 'MTY2MTMxMDA1MjUxMTM4NjAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'Cel',
          system: 'http://unitsofmeasure.org',
          unit: 'C',
          value: 38.8,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/058a99dc-7d3b-4416-adb4-9e70fc702f2b',
      resource: {
        bodySite: {
          coding: [
            {
              code: '368209003',
              display: 'Right arm',
              system: 'http://snomed.info/sct',
            },
          ],
        },
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
              code: '8462-4',
              display: 'Diastolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Diastolik Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '058a99dc-7d3b-4416-adb4-9e70fc702f2b',
        interpretation: [
          {
            coding: [
              {
                code: 'L',
                display: 'low',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di bawah nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-24T03:00:52.111334+00:00',
          versionId: 'MTY2MTMxMDA1MjExMTMzNDAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 60,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/335acd91-2061-4b48-a196-e69723c57eab',
      resource: {
        bodySite: {
          coding: [
            {
              code: '368209003',
              display: 'Right arm',
              system: 'http://snomed.info/sct',
            },
          ],
        },
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
              code: '8480-6',
              display: 'Systolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Sistolik Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '335acd91-2061-4b48-a196-e69723c57eab',
        interpretation: [
          {
            coding: [
              {
                code: 'HU',
                display: 'significantly high',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di atas nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-24T03:00:51.763475+00:00',
          versionId: 'MTY2MTMxMDA1MTc2MzQ3NTAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 133,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/f739213f-79c5-4ed0-b5d3-0295e47c0877',
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
              code: '9279-1',
              display: 'Respiratory rate',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Pernafasan Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: 'f739213f-79c5-4ed0-b5d3-0295e47c0877',
        meta: {
          lastUpdated: '2022-08-24T03:00:51.388054+00:00',
          versionId: 'MTY2MTMxMDA1MTM4ODA1NDAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: '/min',
          system: 'http://unitsofmeasure.org',
          unit: 'breaths/minute',
          value: 22,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/d8c66d37-f016-4cc6-b03e-de9bd258eebd',
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
        id: 'd8c66d37-f016-4cc6-b03e-de9bd258eebd',
        meta: {
          lastUpdated: '2022-08-24T03:00:51.039353+00:00',
          versionId: 'MTY2MTMxMDA1MTAzOTM1MzAwMA',
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
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/8985e724-526d-4576-ad4b-0fb726fd78a2',
      resource: {
        bodySite: {
          coding: [
            {
              code: '368209003',
              display: 'Right arm',
              system: 'http://snomed.info/sct',
            },
          ],
        },
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
              code: '8480-6',
              display: 'Systolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Sistolik Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '8985e724-526d-4576-ad4b-0fb726fd78a2',
        interpretation: [
          {
            coding: [
              {
                code: 'HU',
                display: 'significantly high',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di atas nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-24T02:47:15.974433+00:00',
          versionId: 'MTY2MTMwOTIzNTk3NDQzMzAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/100000030009',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 60,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/489a77d8-b03d-4c88-887f-5c6cc33fa339',
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
              code: '8310-5',
              display: 'Body temperature',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Suhu Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '489a77d8-b03d-4c88-887f-5c6cc33fa339',
        interpretation: [
          {
            coding: [
              {
                code: 'H',
                display: 'High',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di atas nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-24T02:45:33.936486+00:00',
          versionId: 'MTY2MTMwOTEzMzkzNjQ4NjAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/100000030009',
        },
        valueQuantity: {
          code: 'Cel',
          system: 'http://unitsofmeasure.org',
          unit: 'C',
          value: 38.8,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/317da45d-9bcc-4524-8d99-e6c85661037a',
      resource: {
        bodySite: {
          coding: [
            {
              code: '368209003',
              display: 'Right arm',
              system: 'http://snomed.info/sct',
            },
          ],
        },
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
              code: '8462-4',
              display: 'Diastolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Diastolik Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '317da45d-9bcc-4524-8d99-e6c85661037a',
        interpretation: [
          {
            coding: [
              {
                code: 'L',
                display: 'low',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di bawah nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-24T02:45:21.221664+00:00',
          versionId: 'MTY2MTMwOTEyMTIyMTY2NDAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/100000030009',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 60,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/a7a3d028-4bd4-4898-8fc2-4d38c49d4d4f',
      resource: {
        bodySite: {
          coding: [
            {
              code: '368209003',
              display: 'Right arm',
              system: 'http://snomed.info/sct',
            },
          ],
        },
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
              code: '8480-6',
              display: 'Systolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Sistolik Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: 'a7a3d028-4bd4-4898-8fc2-4d38c49d4d4f',
        interpretation: [
          {
            coding: [
              {
                code: 'HU',
                display: 'significantly high',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di atas nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-24T02:38:07.491627+00:00',
          versionId: 'MTY2MTMwODY4NzQ5MTYyNzAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 133,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/93f1f197-07e2-4174-b6d8-02b7a06b5aed',
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
        id: '93f1f197-07e2-4174-b6d8-02b7a06b5aed',
        meta: {
          lastUpdated: '2022-08-24T02:37:26.783281+00:00',
          versionId: 'MTY2MTMwODY0Njc4MzI4MTAwMA',
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
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/08609870-0770-4834-bf40-396e577dcfd0',
      resource: {
        bodySite: {
          coding: [
            {
              code: '368209003',
              display: 'Right arm',
              system: 'http://snomed.info/sct',
            },
          ],
        },
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
              code: '8480-6',
              display: 'Systolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Sistolik Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '08609870-0770-4834-bf40-396e577dcfd0',
        interpretation: [
          {
            coding: [
              {
                code: 'HU',
                display: 'significantly high',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di atas nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-24T02:37:22.552147+00:00',
          versionId: 'MTY2MTMwODY0MjU1MjE0NzAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 90,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/5dcc3b75-06a6-4986-b123-58a900aea741',
      resource: {
        bodySite: {
          coding: [
            {
              code: '368209003',
              display: 'Right arm',
              system: 'http://snomed.info/sct',
            },
          ],
        },
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
              code: '8480-6',
              display: 'Systolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Sistolik Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '5dcc3b75-06a6-4986-b123-58a900aea741',
        interpretation: [
          {
            coding: [
              {
                code: 'HU',
                display: 'significantly high',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di atas nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-24T02:33:03.505032+00:00',
          versionId: 'MTY2MTMwODM4MzUwNTAzMjAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 120,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/613215ed-3366-42b2-96c8-7846f62591fa',
      resource: {
        bodySite: {
          coding: [
            {
              code: '368209003',
              display: 'Right arm',
              system: 'http://snomed.info/sct',
            },
          ],
        },
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
              code: '8462-4',
              display: 'Diastolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Diastolik Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '613215ed-3366-42b2-96c8-7846f62591fa',
        interpretation: [
          {
            coding: [
              {
                code: 'L',
                display: 'low',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di bawah nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-24T02:32:39.694737+00:00',
          versionId: 'MTY2MTMwODM1OTY5NDczNzAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 80,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/71a8ea06-bd30-4f8e-822b-2c80e9d744ca',
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
        id: '71a8ea06-bd30-4f8e-822b-2c80e9d744ca',
        meta: {
          lastUpdated: '2022-08-24T02:31:18.205901+00:00',
          versionId: 'MTY2MTMwODI3ODIwNTkwMTAwMA',
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
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/156d1643-a792-4c36-9eb8-52bfa1b85743',
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
        id: '156d1643-a792-4c36-9eb8-52bfa1b85743',
        meta: {
          lastUpdated: '2022-08-24T02:30:16.002049+00:00',
          versionId: 'MTY2MTMwODIxNjAwMjA0OTAwMA',
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
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/3c5945c6-b98f-4298-ae0b-9498a00d891e',
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
        id: '3c5945c6-b98f-4298-ae0b-9498a00d891e',
        meta: {
          lastUpdated: '2022-08-24T02:30:14.517853+00:00',
          versionId: 'MTY2MTMwODIxNDUxNzg1MzAwMA',
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
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/5c7c9868-d0d1-4678-9ce4-4c62013947ba',
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
        effectiveDateTime: '2022-08-24',
        encounter: {
          display: 'Pemeriksaan Fisik Nadi Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '5c7c9868-d0d1-4678-9ce4-4c62013947ba',
        meta: {
          lastUpdated: '2022-08-24T02:29:45.647651+00:00',
          versionId: 'MTY2MTMwODE4NTY0NzY1MTAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/100000030009',
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
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/f9c2b8d5-74dd-4df1-84e8-9290c279f847',
      resource: {
        bodySite: {
          coding: [
            {
              code: '368209003',
              display: 'Right arm',
              system: 'http://snomed.info/sct',
            },
          ],
        },
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
              code: '8480-6',
              display: 'Systolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Sistolik Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: 'f9c2b8d5-74dd-4df1-84e8-9290c279f847',
        interpretation: [
          {
            coding: [
              {
                code: 'HU',
                display: 'significantly high',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di atas nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-24T02:25:12.163272+00:00',
          versionId: 'MTY2MTMwNzkxMjE2MzI3MjAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 133,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/23eef1b7-8ab5-421b-8c86-5b47ccb5fb7c',
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
        id: '23eef1b7-8ab5-421b-8c86-5b47ccb5fb7c',
        meta: {
          lastUpdated: '2022-08-24T02:22:23.687325+00:00',
          versionId: 'MTY2MTMwNzc0MzY4NzMyNTAwMA',
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
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/34dd2a1d-37e5-44fc-83b9-3eea75f24e64',
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
        id: '34dd2a1d-37e5-44fc-83b9-3eea75f24e64',
        meta: {
          lastUpdated: '2022-08-24T02:21:35.143129+00:00',
          versionId: 'MTY2MTMwNzY5NTE0MzEyOTAwMA',
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
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/65bd974a-4e4f-43a5-9d52-1c620e16cb5c',
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
        id: '65bd974a-4e4f-43a5-9d52-1c620e16cb5c',
        meta: {
          lastUpdated: '2022-08-24T02:21:31.187520+00:00',
          versionId: 'MTY2MTMwNzY5MTE4NzUyMDAwMA',
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
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/b06cf20e-bb68-4d06-b755-aa552e722bfe',
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
        id: 'b06cf20e-bb68-4d06-b755-aa552e722bfe',
        meta: {
          lastUpdated: '2022-08-24T02:19:38.312218+00:00',
          versionId: 'MTY2MTMwNzU3ODMxMjIxODAwMA',
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
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/7b0d93ec-8123-4f2e-b4c6-902ce025ba6c',
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
              code: '8310-5',
              display: 'Body temperature',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Suhu Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '7b0d93ec-8123-4f2e-b4c6-902ce025ba6c',
        interpretation: [
          {
            coding: [
              {
                code: 'H',
                display: 'High',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di atas nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-23T08:12:37.303655+00:00',
          versionId: 'MTY2MTI0MjM1NzMwMzY1NTAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'Cel',
          system: 'http://unitsofmeasure.org',
          unit: 'C',
          value: 38.8,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/bee21173-4dad-4388-bef0-36f96e33d353',
      resource: {
        bodySite: {
          coding: [
            {
              code: '368209003',
              display: 'Right arm',
              system: 'http://snomed.info/sct',
            },
          ],
        },
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
              code: '8462-4',
              display: 'Diastolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Diastolik Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: 'bee21173-4dad-4388-bef0-36f96e33d353',
        interpretation: [
          {
            coding: [
              {
                code: 'L',
                display: 'low',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di bawah nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-23T08:12:36.980884+00:00',
          versionId: 'MTY2MTI0MjM1Njk4MDg4NDAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 60,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/deb25d6d-c0f7-4ae4-83bd-0eb3f40cf793',
      resource: {
        bodySite: {
          coding: [
            {
              code: '368209003',
              display: 'Right arm',
              system: 'http://snomed.info/sct',
            },
          ],
        },
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
              code: '8480-6',
              display: 'Systolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Sistolik Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: 'deb25d6d-c0f7-4ae4-83bd-0eb3f40cf793',
        interpretation: [
          {
            coding: [
              {
                code: 'HU',
                display: 'significantly high',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di atas nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-23T08:12:36.554532+00:00',
          versionId: 'MTY2MTI0MjM1NjU1NDUzMjAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 133,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/60cefb7f-e884-475c-b57b-db73a83a37c4',
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
              code: '9279-1',
              display: 'Respiratory rate',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Pernafasan Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '60cefb7f-e884-475c-b57b-db73a83a37c4',
        meta: {
          lastUpdated: '2022-08-23T08:12:36.251041+00:00',
          versionId: 'MTY2MTI0MjM1NjI1MTA0MTAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: '/min',
          system: 'http://unitsofmeasure.org',
          unit: 'breaths/minute',
          value: 22,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/7f9900ba-588e-4742-b195-a04b767dc57c',
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
        id: '7f9900ba-588e-4742-b195-a04b767dc57c',
        meta: {
          lastUpdated: '2022-08-23T08:12:35.912482+00:00',
          versionId: 'MTY2MTI0MjM1NTkxMjQ4MjAwMA',
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
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/c59d6ca2-e4a1-4db9-b8be-1e75f7639235',
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
        id: 'c59d6ca2-e4a1-4db9-b8be-1e75f7639235',
        meta: {
          lastUpdated: '2022-08-23T06:40:42.226238+00:00',
          versionId: 'MTY2MTIzNjg0MjIyNjIzODAwMA',
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
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/421ec509-2d0a-4010-8259-b7360778df06',
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
        id: '421ec509-2d0a-4010-8259-b7360778df06',
        meta: {
          lastUpdated: '2022-08-23T04:54:54.656728+00:00',
          versionId: 'MTY2MTIzMDQ5NDY1NjcyODAwMA',
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
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/091812a6-c200-435c-8367-c91f5d851f65',
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
              code: '8310-5',
              display: 'Body temperature',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Suhu Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '091812a6-c200-435c-8367-c91f5d851f65',
        interpretation: [
          {
            coding: [
              {
                code: 'H',
                display: 'High',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di atas nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-23T03:46:02.449506+00:00',
          versionId: 'MTY2MTIyNjM2MjQ0OTUwNjAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'Cel',
          system: 'http://unitsofmeasure.org',
          unit: 'C',
          value: 38.8,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/bcc40e07-98ed-4884-9e76-a2befd6f3041',
      resource: {
        bodySite: {
          coding: [
            {
              code: '368209003',
              display: 'Right arm',
              system: 'http://snomed.info/sct',
            },
          ],
        },
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
              code: '8462-4',
              display: 'Diastolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Diastolik Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: 'bcc40e07-98ed-4884-9e76-a2befd6f3041',
        interpretation: [
          {
            coding: [
              {
                code: 'L',
                display: 'low',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di bawah nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-23T03:46:02.128706+00:00',
          versionId: 'MTY2MTIyNjM2MjEyODcwNjAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 60,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/366de5a6-bf64-4c73-8cc7-97869a957e22',
      resource: {
        bodySite: {
          coding: [
            {
              code: '368209003',
              display: 'Right arm',
              system: 'http://snomed.info/sct',
            },
          ],
        },
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
              code: '8480-6',
              display: 'Systolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Sistolik Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '366de5a6-bf64-4c73-8cc7-97869a957e22',
        interpretation: [
          {
            coding: [
              {
                code: 'HU',
                display: 'significantly high',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di atas nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-23T03:46:01.861713+00:00',
          versionId: 'MTY2MTIyNjM2MTg2MTcxMzAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 133,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/1857981e-d259-400d-8988-b10886d5633d',
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
              code: '9279-1',
              display: 'Respiratory rate',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Pernafasan Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '1857981e-d259-400d-8988-b10886d5633d',
        meta: {
          lastUpdated: '2022-08-23T03:46:01.537403+00:00',
          versionId: 'MTY2MTIyNjM2MTUzNzQwMzAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: '/min',
          system: 'http://unitsofmeasure.org',
          unit: 'breaths/minute',
          value: 22,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/41ec0bf1-7bee-48d5-b656-d131c83786cd',
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
        id: '41ec0bf1-7bee-48d5-b656-d131c83786cd',
        meta: {
          lastUpdated: '2022-08-23T03:46:01.295453+00:00',
          versionId: 'MTY2MTIyNjM2MTI5NTQ1MzAwMA',
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
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/7d713181-6994-4054-92d8-92b923429a9a',
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
              code: '8310-5',
              display: 'Body temperature',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Suhu Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '7d713181-6994-4054-92d8-92b923429a9a',
        interpretation: [
          {
            coding: [
              {
                code: 'H',
                display: 'High',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di atas nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-23T03:42:24.455111+00:00',
          versionId: 'MTY2MTIyNjE0NDQ1NTExMTAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'Cel',
          system: 'http://unitsofmeasure.org',
          unit: 'C',
          value: 38.8,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/1766f7e3-b334-4538-83b6-edf722cfe573',
      resource: {
        bodySite: {
          coding: [
            {
              code: '368209003',
              display: 'Right arm',
              system: 'http://snomed.info/sct',
            },
          ],
        },
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
              code: '8462-4',
              display: 'Diastolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Diastolik Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '1766f7e3-b334-4538-83b6-edf722cfe573',
        interpretation: [
          {
            coding: [
              {
                code: 'L',
                display: 'low',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di bawah nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-23T03:42:19.898382+00:00',
          versionId: 'MTY2MTIyNjEzOTg5ODM4MjAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 60,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/321f847d-5947-4a1e-a555-91ee0f6fd34d',
      resource: {
        bodySite: {
          coding: [
            {
              code: '368209003',
              display: 'Right arm',
              system: 'http://snomed.info/sct',
            },
          ],
        },
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
              code: '8480-6',
              display: 'Systolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Sistolik Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '321f847d-5947-4a1e-a555-91ee0f6fd34d',
        interpretation: [
          {
            coding: [
              {
                code: 'HU',
                display: 'significantly high',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di atas nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-23T03:42:04.403619+00:00',
          versionId: 'MTY2MTIyNjEyNDQwMzYxOTAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 133,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/c9cf191f-0d96-4e1b-a00a-fa18ee535321',
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
              code: '9279-1',
              display: 'Respiratory rate',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Pernafasan Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: 'c9cf191f-0d96-4e1b-a00a-fa18ee535321',
        meta: {
          lastUpdated: '2022-08-23T03:41:59.829126+00:00',
          versionId: 'MTY2MTIyNjExOTgyOTEyNjAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: '/min',
          system: 'http://unitsofmeasure.org',
          unit: 'breaths/minute',
          value: 22,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/5cf595e2-ab6b-4d02-b97c-45597c411eda',
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
        id: '5cf595e2-ab6b-4d02-b97c-45597c411eda',
        meta: {
          lastUpdated: '2022-08-23T03:41:51.393024+00:00',
          versionId: 'MTY2MTIyNjExMTM5MzAyNDAwMA',
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
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/456d724e-dd4e-4e4f-bdbf-9d9d97d65f06',
      resource: {
        bodySite: {
          coding: [
            {
              code: '368209003',
              display: 'Right arm',
              system: 'http://snomed.info/sct',
            },
          ],
        },
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
              code: '8480-6',
              display: 'Systolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Sistolik Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '456d724e-dd4e-4e4f-bdbf-9d9d97d65f06',
        interpretation: [
          {
            coding: [
              {
                code: 'HU',
                display: 'significantly high',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di atas nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-20T11:25:38.267483+00:00',
          profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Observation|4.0.1'],
          versionId: 'MTY2MDk5NDczODI2NzQ4MzAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 133,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/6810d434-8fed-4e3a-bb83-afb920d00c14',
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
              code: '8310-5',
              display: 'Body temperature',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Suhu Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '6810d434-8fed-4e3a-bb83-afb920d00c14',
        interpretation: [
          {
            coding: [
              {
                code: 'H',
                display: 'High',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di atas nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-20T11:25:38.049558+00:00',
          profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Observation|4.0.1'],
          versionId: 'MTY2MDk5NDczODA0OTU1ODAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'Cel',
          system: 'http://unitsofmeasure.org',
          unit: 'C',
          value: 38.8,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/59f087b2-bf51-4251-ad86-36630b1f665c',
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
              code: '9279-1',
              display: 'Respiratory rate',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2015-01-17T16:00:00+07:00',
        encounter: {
          display: 'Pemeriksaan Fisik Sistol Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '59f087b2-bf51-4251-ad86-36630b1f665c',
        meta: {
          lastUpdated: '2022-08-20T11:25:36.945516+00:00',
          profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Observation|4.0.1'],
          versionId: 'MTY2MDk5NDczNjk0NTUxNjAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: '/min',
          system: 'http://unitsofmeasure.org',
          unit: 'breaths/minute',
          value: 22,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/6388f07b-1ce6-408f-ae3c-5b00f784fb17',
      resource: {
        bodySite: {
          coding: [
            {
              code: '368209003',
              display: 'Right arm',
              system: 'http://snomed.info/sct',
            },
          ],
        },
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
              code: '8480-6',
              display: 'Systolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Sistolik Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '6388f07b-1ce6-408f-ae3c-5b00f784fb17',
        interpretation: [
          {
            coding: [
              {
                code: 'HU',
                display: 'significantly high',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di atas nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-20T11:25:35.300881+00:00',
          profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Observation|4.0.1'],
          versionId: 'MTY2MDk5NDczNTMwMDg4MTAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 133,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/d2b88f96-b1e5-47f7-9c4d-8f348feb749d',
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
              code: '9279-1',
              display: 'Respiratory rate',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Pernafasan Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: 'd2b88f96-b1e5-47f7-9c4d-8f348feb749d',
        meta: {
          lastUpdated: '2022-08-20T11:25:32.945412+00:00',
          profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Observation|4.0.1'],
          versionId: 'MTY2MDk5NDczMjk0NTQxMjAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: '/min',
          system: 'http://unitsofmeasure.org',
          unit: 'breaths/minute',
          value: 22,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/b91ce882-a678-4545-8a53-9f06f200be90',
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
              code: '8310-5',
              display: 'Body temperature',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Suhu Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: 'b91ce882-a678-4545-8a53-9f06f200be90',
        interpretation: [
          {
            coding: [
              {
                code: 'H',
                display: 'High',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di atas nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-20T11:25:32.221466+00:00',
          profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Observation|4.0.1'],
          versionId: 'MTY2MDk5NDczMjIyMTQ2NjAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'Cel',
          system: 'http://unitsofmeasure.org',
          unit: 'C',
          value: 38.8,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/732138dd-69d8-4084-be3f-e5259fc1ca27',
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
              code: '9279-1',
              display: 'Respiratory rate',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Pernafasan Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '732138dd-69d8-4084-be3f-e5259fc1ca27',
        meta: {
          lastUpdated: '2022-08-20T11:25:31.784753+00:00',
          profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Observation|4.0.1'],
          versionId: 'MTY2MDk5NDczMTc4NDc1MzAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: '/min',
          system: 'http://unitsofmeasure.org',
          unit: 'breaths/minute',
          value: 22,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/8add0483-c199-4e2c-8073-681e482c45d9',
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
        id: '8add0483-c199-4e2c-8073-681e482c45d9',
        meta: {
          lastUpdated: '2022-08-20T11:25:30.293826+00:00',
          profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Observation|4.0.1'],
          versionId: 'MTY2MDk5NDczMDI5MzgyNjAwMA',
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
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/d4f81c0e-e360-41ad-9191-f909ccb2e49c',
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
        id: 'd4f81c0e-e360-41ad-9191-f909ccb2e49c',
        meta: {
          lastUpdated: '2022-08-20T11:25:28.665549+00:00',
          profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Observation|4.0.1'],
          versionId: 'MTY2MDk5NDcyODY2NTU0OTAwMA',
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
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/f06ce362-14a8-415e-b01b-5f3166d6a25a',
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
              code: '9279-1',
              display: 'Respiratory rate',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2015-01-17T16:00:00+07:00',
        encounter: {
          display: 'Kunjungan Budi Santoso pada tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: 'f06ce362-14a8-415e-b01b-5f3166d6a25a',
        meta: {
          lastUpdated: '2022-08-20T11:25:27.750358+00:00',
          profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Observation|4.0.1'],
          versionId: 'MTY2MDk5NDcyNzc1MDM1ODAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: '/min',
          system: 'http://unitsofmeasure.org',
          unit: 'breaths/minute',
          value: 22,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/5ff0be1c-5f74-49f3-b10e-fe314d71648b',
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
              code: '9279-1',
              display: 'Respiratory rate',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Pernafasan Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '5ff0be1c-5f74-49f3-b10e-fe314d71648b',
        meta: {
          lastUpdated: '2022-08-20T11:25:15.484377+00:00',
          profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Observation|4.0.1'],
          versionId: 'MTY2MDk5NDcxNTQ4NDM3NzAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: '/min',
          system: 'http://unitsofmeasure.org',
          unit: 'breaths/minute',
          value: 22,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/9cfae860-852a-4707-8aa8-8fe00f18059a',
      resource: {
        bodySite: {
          coding: [
            {
              code: '368209003',
              display: 'Right arm',
              system: 'http://snomed.info/sct',
            },
          ],
        },
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
              code: '8462-4',
              display: 'Diastolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Diastolik Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '9cfae860-852a-4707-8aa8-8fe00f18059a',
        interpretation: [
          {
            coding: [
              {
                code: 'L',
                display: 'low',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di bawah nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-20T11:24:55.787496+00:00',
          profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Observation|4.0.1'],
          versionId: 'MTY2MDk5NDY5NTc4NzQ5NjAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 60,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/7ebe7b7f-cb6d-437b-8cc6-188f958a86b9',
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
        id: '7ebe7b7f-cb6d-437b-8cc6-188f958a86b9',
        meta: {
          lastUpdated: '2022-08-20T11:22:04.357819+00:00',
          profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Observation|4.0.1'],
          versionId: 'MTY2MDk5NDUyNDM1NzgxOTAwMA',
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
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/9d77cfd9-8c80-4825-b380-1e9b7a3b4b51',
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
              code: '9279-1',
              display: 'Respiratory rate',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2015-01-17T16:00:00+07:00',
        encounter: {
          display: 'Kunjungan Budi Santoso pada tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '9d77cfd9-8c80-4825-b380-1e9b7a3b4b51',
        meta: {
          lastUpdated: '2022-08-20T11:22:01.617813+00:00',
          profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Observation|4.0.1'],
          versionId: 'MTY2MDk5NDUyMTYxNzgxMzAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: '/min',
          system: 'http://unitsofmeasure.org',
          unit: 'breaths/minute',
          value: 22,
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Observation/ae94ba33-c8ee-484b-b262-07843cd65048',
      resource: {
        bodySite: {
          coding: [
            {
              code: '368209003',
              display: 'Right arm',
              system: 'http://snomed.info/sct',
            },
          ],
        },
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
              code: '8462-4',
              display: 'Diastolic blood pressure',
              system: 'http://loinc.org',
            },
          ],
        },
        effectiveDateTime: '2022-07-14',
        encounter: {
          display: 'Pemeriksaan Fisik Diastolik Budi Santoso di hari Selasa, 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: 'ae94ba33-c8ee-484b-b262-07843cd65048',
        interpretation: [
          {
            coding: [
              {
                code: 'L',
                display: 'low',
                system: 'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
              },
            ],
            text: 'Di bawah nilai referensi',
          },
        ],
        meta: {
          lastUpdated: '2022-08-20T11:21:42.572565+00:00',
          profile: ['https://fhir.kemkes.go.id/r4/StructureDefinition/Observation|4.0.1'],
          versionId: 'MTY2MDk5NDUwMjU3MjU2NTAwMA',
        },
        resourceType: 'Observation',
        status: 'final',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
        valueQuantity: {
          code: 'mm[Hg]',
          system: 'http://unitsofmeasure.org',
          unit: 'mm[Hg]',
          value: 60,
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

// Get by Encounter ID
export const PROCEDURE = {
  entry: [
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/87859868-c35b-4f7b-86dd-da9830ae58c5',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '87859868-c35b-4f7b-86dd-da9830ae58c5',
        meta: {
          lastUpdated: '2022-08-26T07:13:22.619222+00:00',
          versionId: 'MTY2MTQ5ODAwMjYxOTIyMjAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/7ce12b39-e37e-4a40-9855-541cbcd05cad',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '7ce12b39-e37e-4a40-9855-541cbcd05cad',
        meta: {
          lastUpdated: '2022-08-24T08:44:39.047347+00:00',
          versionId: 'MTY2MTMzMDY3OTA0NzM0NzAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/8eaa4752-909e-4b20-8c15-d4df1219511d',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '8eaa4752-909e-4b20-8c15-d4df1219511d',
        meta: {
          lastUpdated: '2022-08-24T08:30:45.522196+00:00',
          versionId: 'MTY2MTMyOTg0NTUyMjE5NjAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/a10f25c7-cb93-45ea-ad24-bcd512fd5b9c',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: 'a10f25c7-cb93-45ea-ad24-bcd512fd5b9c',
        meta: {
          lastUpdated: '2022-08-24T08:26:42.048812+00:00',
          versionId: 'MTY2MTMyOTYwMjA0ODgxMjAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/713c3fc8-48e3-475c-924a-d2159f4fa525',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '713c3fc8-48e3-475c-924a-d2159f4fa525',
        meta: {
          lastUpdated: '2022-08-24T08:17:52.279267+00:00',
          versionId: 'MTY2MTMyOTA3MjI3OTI2NzAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/03cd19fe-27e0-4d8f-912f-46b4499212b2',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '03cd19fe-27e0-4d8f-912f-46b4499212b2',
        meta: {
          lastUpdated: '2022-08-24T08:07:55.918897+00:00',
          versionId: 'MTY2MTMyODQ3NTkxODg5NzAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/0462f887-d04b-4916-a664-a1180d42e205',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '0462f887-d04b-4916-a664-a1180d42e205',
        meta: {
          lastUpdated: '2022-08-24T06:54:23.344582+00:00',
          versionId: 'MTY2MTMyNDA2MzM0NDU4MjAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/3e9cb640-7c4a-4496-a7d2-f73012e49b51',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '3e9cb640-7c4a-4496-a7d2-f73012e49b51',
        meta: {
          lastUpdated: '2022-08-24T04:08:34.501634+00:00',
          versionId: 'MTY2MTMxNDExNDUwMTYzNDAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/f2618bdb-2b0a-44dc-9cd9-7abbd6c9f773',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: 'f2618bdb-2b0a-44dc-9cd9-7abbd6c9f773',
        meta: {
          lastUpdated: '2022-08-24T03:59:45.874115+00:00',
          versionId: 'MTY2MTMxMzU4NTg3NDExNTAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/2713fd3c-d454-4e53-85f8-200f08582dda',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '2713fd3c-d454-4e53-85f8-200f08582dda',
        meta: {
          lastUpdated: '2022-08-24T03:23:20.826866+00:00',
          versionId: 'MTY2MTMxMTQwMDgyNjg2NjAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/2ab4c7df-4856-4268-a5f5-d33537dfc63e',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '2ab4c7df-4856-4268-a5f5-d33537dfc63e',
        meta: {
          lastUpdated: '2022-08-24T03:15:07.500649+00:00',
          versionId: 'MTY2MTMxMDkwNzUwMDY0OTAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/100000030009',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/62ec88c3-90bc-4d28-bbe7-e27b2167ca9f',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '62ec88c3-90bc-4d28-bbe7-e27b2167ca9f',
        meta: {
          lastUpdated: '2022-08-24T03:15:01.624313+00:00',
          versionId: 'MTY2MTMxMDkwMTYyNDMxMzAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/b707f3af-4545-4a25-874c-355fb07161a9',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: 'b707f3af-4545-4a25-874c-355fb07161a9',
        meta: {
          lastUpdated: '2022-08-24T03:11:55.614038+00:00',
          versionId: 'MTY2MTMxMDcxNTYxNDAzODAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/cdb9ee02-ae45-48cd-aeaa-3fc9f6a35d24',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: 'cdb9ee02-ae45-48cd-aeaa-3fc9f6a35d24',
        meta: {
          lastUpdated: '2022-08-24T03:07:28.219666+00:00',
          versionId: 'MTY2MTMxMDQ0ODIxOTY2NjAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/7c686693-dafc-4ad8-b057-7b961a0c71f9',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '7c686693-dafc-4ad8-b057-7b961a0c71f9',
        meta: {
          lastUpdated: '2022-08-24T03:00:52.902165+00:00',
          versionId: 'MTY2MTMxMDA1MjkwMjE2NTAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/d3b1ce65-9b7f-42b4-9e0b-acee73c60d49',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: 'd3b1ce65-9b7f-42b4-9e0b-acee73c60d49',
        meta: {
          lastUpdated: '2022-08-23T08:12:37.667577+00:00',
          versionId: 'MTY2MTI0MjM1NzY2NzU3NzAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/595290b6-7e25-4823-a271-981bae06e84b',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '595290b6-7e25-4823-a271-981bae06e84b',
        meta: {
          lastUpdated: '2022-08-23T03:46:02.722534+00:00',
          versionId: 'MTY2MTIyNjM2MjcyMjUzNDAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/681d7e45-649b-4b24-ac10-4b0a92878948',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '681d7e45-649b-4b24-ac10-4b0a92878948',
        meta: {
          lastUpdated: '2022-08-23T03:42:28.417561+00:00',
          versionId: 'MTY2MTIyNjE0ODQxNzU2MTAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/caadaa70-36fd-4d04-8e5b-b427fe5a6993',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: 'caadaa70-36fd-4d04-8e5b-b427fe5a6993',
        meta: {
          lastUpdated: '2022-08-20T16:24:21.200456+00:00',
          versionId: 'MTY2MTAxMjY2MTIwMDQ1NjAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/8d9153a7-0955-48e4-a498-579e74eaf5e1',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '8d9153a7-0955-48e4-a498-579e74eaf5e1',
        meta: {
          lastUpdated: '2022-08-20T16:24:21.151399+00:00',
          versionId: 'MTY2MTAxMjY2MTE1MTM5OTAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
    {
      fullUrl:
        'https://api-satusehat-dev.dto.kemkes.go.id/fhir-r4/v1/Procedure/7ed45fb6-cb17-4cc7-a942-8222ef14bd5b',
      resource: {
        bodySite: [
          {
            coding: [
              {
                code: '302551006',
                display: 'Entire Thorax',
                system: 'http://snomed.info/sct',
              },
            ],
          },
        ],
        category: {
          coding: [
            {
              code: '103693007',
              display: 'Diagnostic procedure',
              system: 'http://snomed.info/sct',
            },
          ],
          text: 'Diagnostic procedure',
        },
        code: {
          coding: [
            {
              code: '87.44',
              display: 'Routine chest x-ray, so described',
              system: 'http://hl7.org/fhir/sid/icd-9-cm',
            },
          ],
        },
        encounter: {
          display: 'Tindakan Rontgen Dada Budi Santoso pada Selasa tanggal 14 Juni 2022',
          reference: 'Encounter/2823ed1d-3e3e-434e-9a5b-9c579d192787',
        },
        id: '7ed45fb6-cb17-4cc7-a942-8222ef14bd5b',
        meta: {
          lastUpdated: '2022-08-20T16:24:21.137864+00:00',
          versionId: 'MTY2MTAxMjY2MTEzNzg2NDAwMA',
        },
        note: [
          {
            text: 'Rontgen thorax melihat perluasan infiltrat dan kavitas.',
          },
        ],
        performedPeriod: {
          end: '2022-06-14T14:27:00+01:00',
          start: '2022-06-14T13:31:00+01:00',
        },
        performer: [
          {
            actor: {
              display: 'Dokter Bronsig',
              reference: 'Practitioner/N10000001',
            },
          },
        ],
        reasonCode: [
          {
            coding: [
              {
                code: 'A15.0',
                display:
                  'Tuberculosis of lung, confirmed by sputum microscopy with or without culture',
                system: 'http://hl7.org/fhir/sid/icd-10',
              },
            ],
          },
        ],
        resourceType: 'Procedure',
        status: 'completed',
        subject: {
          display: 'Budi Santoso',
          reference: 'Patient/P00030004',
        },
      },
      search: {
        mode: 'match',
      },
    },
  ],
  resourceType: 'Bundle',
  total: 21,
  type: 'searchset',
};

// Get by ID
export const ORGANIZATION = {
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
  id: 'abddd50b-b22f-4d68-a1c3-d2c29a27698b',
  identifier: [
    {
      system: 'http://sys-ids.kemkes.go.id/organization/10000004',
      use: 'official',
      value: 'R220001',
    },
  ],
  meta: {
    lastUpdated: '2022-08-23T06:36:12.557581+00:00',
    versionId: 'MTY2MTIzNjU3MjU1NzU4MTAwMA',
  },
  name: 'Rawat Jalan Terpadu',
  partOf: {
    reference: 'Organization/10000004',
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
};

// Get by ID
export const LOCATION = {
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
  id: 'dc01c797-547a-4e4d-97cd-4ece0630e380',
  identifier: [
    {
      system: 'http://sys-ids.kemkes.go.id/location/1000001',
      value: 'G-2-R-1A',
    },
  ],
  managingOrganization: {
    reference: 'Organization/10000004',
  },
  meta: {
    lastUpdated: '2022-08-23T06:34:44.684738+00:00',
    versionId: 'MTY2MTIzNjQ4NDY4NDczODAwMA',
  },
  mode: 'instance',
  name: 'Ruang 1A IRJT',
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
};
