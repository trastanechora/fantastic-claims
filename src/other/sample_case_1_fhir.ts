// KASUS DBD LOLOS KLAIM
export const DBD_CASE_1_FHIR = {
  resourceType: 'Bundle',
  type: 'transaction',
  entry: [
    {
      resource: {
        resourceType: 'Patient',
        id: '323XXX',
        name: [
          {
            use: 'official',
            family: 'R',
            prefix: ['Tn.'],
          },
        ],
        address: [
          {
            use: 'home',
            text: 'Sragen, Jawa Tengah',
          },
        ],
        birthDate: '2006',
        gender: 'male',
      },
    },
    {
      resource: {
        resourceType: 'Observation',
        id: 'vital-signs',
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
              code: '85354-9',
              display: 'Vital signs panel',
            },
          ],
        },
        subject: {
          reference: 'Patient/323XXX',
        },
        component: [
          {
            code: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '8867-4',
                  display: 'Heart rate',
                },
              ],
            },
            valueQuantity: {
              value: 123,
              unit: 'beats/minute',
              system: 'http://unitsofmeasure.org',
              code: '/min',
            },
          },
          {
            code: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '9279-1',
                  display: 'Respiratory rate',
                },
              ],
            },
            valueQuantity: {
              value: 28,
              unit: 'breaths/minute',
              system: 'http://unitsofmeasure.org',
              code: '/min',
            },
          },
          {
            code: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '8310-5',
                  display: 'Body temperature',
                },
              ],
            },
            valueQuantity: {
              value: 38,
              unit: 'degree Celsius',
              system: 'http://unitsofmeasure.org',
              code: 'Cel',
            },
          },
          {
            code: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '2708-6',
                  display: 'Oxygen saturation',
                },
              ],
            },
            valueQuantity: {
              value: 97,
              unit: '%',
              system: 'http://unitsofmeasure.org',
              code: '%',
            },
          },
          {
            code: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '29463-7',
                  display: 'Body weight',
                },
              ],
            },
            valueQuantity: {
              value: 50,
              unit: 'kg',
              system: 'http://unitsofmeasure.org',
              code: 'kg',
            },
          },
        ],
      },
    },
    {
      resource: {
        resourceType: 'Observation',
        id: 'physical-exam',
        status: 'final',
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '29545-1',
              display: 'Physical examination',
            },
          ],
        },
        subject: {
          reference: 'Patient/323XXX',
        },
        component: [
          {
            code: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '10210-3',
                  display: 'General physical examination',
                },
              ],
            },
            valueString: 'mata cowong -/-, sdv +/+ rbh -/- wh -/-',
          },
          {
            code: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '100550-7',
                  display: 'Cardiovascular system examination',
                },
              ],
            },
            valueString: 's1s2 reguler, kuat angkat',
          },
          {
            code: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '10196-4',
                  display: 'Abdomen examination',
                },
              ],
            },
            valueString: 'timpani, BU (+) NT (-) turgor kulit NORMAL, hepatosplenomegali (-)',
          },
          {
            code: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '100207-4',
                  display: 'Extremities examination',
                },
              ],
            },
            valueString: 'dbn CTR<2detik, petekie +',
          },
        ],
      },
    },
    {
      resource: {
        resourceType: 'Observation',
        id: 'lab-results',
        status: 'final',
        code: {
          coding: [
            {
              system: 'http://loinc.org',
              code: '24323-8',
              display: 'Lab results',
            },
          ],
        },
        subject: {
          reference: 'Patient/323XXX',
        },
        component: [
          {
            code: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '6690-2',
                  display: 'Leukocytes',
                },
              ],
            },
            valueQuantity: {
              value: 3500,
              unit: '10^9/L',
              system: 'http://unitsofmeasure.org',
              code: '10^9/L',
            },
            referenceRange: [
              {
                low: {
                  value: 4500,
                  unit: '10^9/L',
                },
                high: {
                  value: 11000,
                  unit: '10^9/L',
                },
              },
            ],
          },
          {
            code: {
              coding: [
                {
                  system: 'http://loinc.org',
                  code: '26515-7',
                  display: 'Platelet count',
                },
              ],
            },
            valueQuantity: {
              value: 87000,
              unit: '10^9/L',
              system: 'http://unitsofmeasure.org',
              code: '10^9/L',
            },
            referenceRange: [
              {
                low: {
                  value: 150000,
                  unit: '10^9/L',
                },
                high: {
                  value: 450000,
                  unit: '10^9/L',
                },
              },
            ],
          },
          // Add other lab results similarly
        ],
      },
    },
    {
      resource: {
        resourceType: 'Condition',
        id: 'diagnosis',
        subject: {
          reference: 'Patient/323XXX',
        },
        code: {
          coding: [
            {
              system: 'http://hl7.org/fhir/sid/icd-10',
              code: 'A90',
              display: 'Dengue fever',
            },
          ],
        },
        onsetDateTime: '2024-09-04',
        clinicalStatus: {
          coding: [
            {
              system: 'http://terminology.hl7.org/CodeSystem/condition-clinical',
              code: 'active',
            },
          ],
        },
      },
    },
    {
      resource: {
        resourceType: 'MedicationRequest',
        id: 'rl-infusion',
        status: 'active',
        intent: 'order',
        medicationCodeableConcept: {
          coding: [
            {
              system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
              code: '854390',
              display: "Ringer's Lactate Solution",
            },
          ],
        },
        subject: {
          reference: 'Patient/323XXX',
        },
        authoredOn: '2024-09-05',
        requester: {
          reference: 'Practitioner/5678',
        },
        dosageInstruction: [
          {
            timing: {
              repeat: {
                frequency: 1,
                period: 1,
                periodUnit: 'h',
              },
            },
            rateRatio: {
              numerator: {
                value: 20,
                unit: 'tpm',
                system: 'http://unitsofmeasure.org',
                code: 'tpm',
              },
            },
          },
        ],
      },
    },
    {
      resource: {
        resourceType: 'MedicationRequest',
        id: 'paracetamol-injection',
        status: 'active',
        intent: 'order',
        medicationCodeableConcept: {
          coding: [
            {
              system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
              code: '161',
              display: 'Paracetamol 1g/100ml solution for injection',
            },
          ],
        },
        subject: {
          reference: 'Patient/323XXX',
        },
        authoredOn: '2024-09-05',
        requester: {
          reference: 'Practitioner/5678',
        },
        dosageInstruction: [
          {
            doseAndRate: [
              {
                doseQuantity: {
                  value: 1000,
                  unit: 'mg',
                  system: 'http://unitsofmeasure.org',
                  code: 'mg',
                },
              },
            ],
          },
        ],
      },
    },
    {
      resource: {
        resourceType: 'MedicationRequest',
        id: 'ondansetron-injection',
        status: 'active',
        intent: 'order',
        medicationCodeableConcept: {
          coding: [
            {
              system: 'http://www.nlm.nih.gov/research/umls/rxnorm',
              code: '582620',
              display: 'Ondansetron 4mg/2ml solution for injection',
            },
          ],
        },
        subject: {
          reference: 'Patient/323XXX',
        },
        authoredOn: '2024-09-05',
        requester: {
          reference: 'Practitioner/5678',
        },
        dosageInstruction: [
          {
            doseAndRate: [
              {
                doseQuantity: {
                  value: 4,
                  unit: 'mg',
                  system: 'http://unitsofmeasure.org',
                  code: 'mg',
                },
              },
            ],
          },
        ],
      },
    },
  ],
};
