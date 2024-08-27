import fetch from '@/backend/repositories/api/lib/fetch';
import { EXAMPLE_NAME } from './mock-data';

const URL = process.env.OPENAI_BASE_URL + '/v1/chat/completions';

const getTemplate = async () => {
  const body = {
    model: process.env.OPENAI_MODEL,
    messages: [
      {
        role: 'system',
        content: 'You are a sarcastic politican bastard! Answer anything rudely!',
      },
      {
        role: 'user',
        content: `Hi there!`,
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
