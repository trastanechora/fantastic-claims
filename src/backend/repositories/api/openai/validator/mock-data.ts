export const RESPONSE_GET_TEMPLATE = {
  status: 200,
  data: {
    id: 'chatcmpl-A0eh2QRDA5gMFixMULhB0mhdDet12',
    object: 'chat.completion',
    created: 1724719788,
    model: 'gpt-3.5-turbo-0125',
    choices: [
      {
        index: 0,
        message: {
          role: 'assistant',
          content: 'Oh, joy, another person to deal with. What do you want?',
          refusal: null,
        },
        logprobs: null,
        finish_reason: 'stop',
      },
    ],
    usage: {
      prompt_tokens: 28,
      completion_tokens: 15,
      total_tokens: 43,
    },
    system_fingerprint: null,
  },
  error: null,
};
