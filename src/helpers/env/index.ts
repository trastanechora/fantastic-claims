import { clientEnvSchema, serverEnvSchema } from './schema';
import z from 'zod';

const serverEnv = serverEnvSchema.safeParse(process.env);
if (!serverEnv.success) {
  console.error('Invalid server-side environment variables', serverEnv.error.format());
  process.exit(1); // Exit the process if server-side validation fails
}

const clientEnv = clientEnvSchema.safeParse(process.env);
if (!clientEnv.success) {
  console.error('Invalid client-side environment variables', clientEnv.error.format());
  process.exit(1); // Exit if client-side validation fails on server
}

export const { DATABASE_URL } = serverEnv.data;
export const { NEXT_PUBLIC_API_URL } = clientEnv.data;

export const ENV = {
  publicRuntimeEnv: clientEnv.data,
  serverRuntimeEnv: serverEnv.data,
};

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof serverEnvSchema>, z.infer<typeof clientEnvSchema> {}
  }
}
