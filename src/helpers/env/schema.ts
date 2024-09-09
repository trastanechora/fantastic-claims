import { z } from 'zod';

export const serverEnvSchema = z.object({
  DATABASE_URL: z.string(),

  // Satu Sehat environment variables
  SATU_SEHAT_AUTH_URL: z.string().url('SATU_SEHAT_AUTH_URL must be a valid URL'),
  SATU_SEHAT_BASE_URL: z.string().url('SATU_SEHAT_BASE_URL must be a valid URL'),
  SATU_SEHAT_CONSENT_URL: z.string().url('SATU_SEHAT_CONSENT_URL must be a valid URL'),
  SATU_SEHAT_ORGANIZATION_ID: z.string().min(1, 'SATU_SEHAT_ORGANIZATION_ID cannot be empty'),
  SATU_SEHAT_CLIENT_ID: z.string().min(1, 'SATU_SEHAT_CLIENT_ID cannot be empty'),
  SATU_SEHAT_CLIENT_SECRET: z.string().min(1, 'SATU_SEHAT_CLIENT_SECRET cannot be empty'),
  // SNOMED-CT environment variables
  SNOMEDCT_BASE_URL: z.string().url('SNOMEDCT_BASE_URL must be a valid URL'),
  // OpenAI environment variables
  OPENAI_BASE_URL: z.string().url('OPENAI_BASE_URL must be a valid URL'),
  OPENAI_API_KEY: z.string().min(1, 'OPENAI_API_KEY cannot be empty'),
  OPENAI_MODEL: z.string().default('gpt-3.5-turbo'),
  OPENAI_TEMPERATURE: z.preprocess((val) => parseFloat(val as string), z.number().min(0).max(1)),
  // Google oauth env
  GOOGLE_OAUTH_CLIENT_ID: z.string().min(1, 'GOOGLE_OAUTH_CLIENT_ID cannot be empty'),
  GOOGLE_OAUTH_CLIENT_SECRET: z.string().min(1, 'GOOGLE_OAUTH_CLIENT_ID cannot be empty'),
});

export const clientEnvSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url('NEXT_PUBLIC_API_URL must be a valid URL'),
});

export type ServerEnvSchemaType = z.infer<typeof serverEnvSchema>;
export type ClientEnvSchemaType = z.infer<typeof clientEnvSchema>;
