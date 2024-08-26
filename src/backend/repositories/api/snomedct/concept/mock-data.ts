export const EXAMPLE_NAME = 'cough';

export const RESPONSE_GET_BY_NAME = {
  status: 200,
  data: {
    items: [
      {
        conceptId: '161921002',
        active: false,
        definitionStatus: 'PRIMITIVE',
        moduleId: '900000000000207008',
        effectiveTime: '20020131',
        fsn: {
          term: '(Cough (& [symptom])) or (sputum - symptom) (finding)',
          lang: 'en',
        },
        pt: {
          term: '(Cough (& [symptom])) or (sputum - symptom)',
          lang: 'en',
        },
        id: '161921002',
        idAndFsnTerm: '161921002 | (Cough (& [symptom])) or (sputum - symptom) (finding) |',
      },
    ],
    total: 244,
    limit: 1,
    offset: 0,
    searchAfter: 'WzE2MTkyMTAwMl0=',
    searchAfterArray: [161921002],
  },
  error: null,
};
