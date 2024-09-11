import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/backend/repositories/database/schema/index.ts',
  out: './src/backend/repositories/database/drizzle',
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
});
