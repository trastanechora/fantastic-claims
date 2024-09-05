import fetch from '@/backend/repositories/api/lib/fetch';

const URL = process.env.OPENAI_BASE_URL + '/v1/chat/completions';

const getTemplate = async (documentText: string) => {
  const body = {
    model: process.env.OPENAI_MODEL,
    messages: [
      {
        role: 'system',
        content: `you are an insurance claim validator and the user will give you a piece of document for you to learn the diagnosis and its condition for a claim for certain diagnosis is said to be valid. this validation will then be used to assess electronic medical record of a patient which consist of physical examination by practitionist and lab results. the document will be in Indonesian language. return it only with a JSON with this interface:
          interface Criteria {
            validation: string; //criteria detail to be used as the basis of validation
          }
          interface ValidatorTemplate {
            diagnosis: string; // name of the diagnosis
            icd10Coding: string; // ICD 10 Coding for the diagnosis
            criterias: Criteria[]; // list of criteria for the diagnosis
          }
          type Validation = ValidatorTemplate[];
          
          if there are multiple diagnosis in a copied text, make it an array for each diagnosis
          `,
      },
      {
        role: 'user',
        content: documentText,
      },
    ],
    temperature: Number(process.env.OPENAI_TEMPERATURE),
  };

  const response = await fetch<any, any>(URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify(body),
  });

  return response;
};

export default getTemplate;
