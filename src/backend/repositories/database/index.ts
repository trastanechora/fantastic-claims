import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle';

import postgres from 'postgres';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { drizzle } from 'drizzle-orm/postgres-js';
import { sessionTable, userTable } from './schema';
import { ENV } from '@/helpers/env';
import * as schemas from './schema';

const { serverRuntimeEnv } = ENV;

// for migrations
const migrationClient = postgres(serverRuntimeEnv.DATABASE_URL, { max: 1 });
migrate(drizzle(migrationClient), {
  migrationsFolder: 'src/lib/backend/repositories/database/drizzle',
});
// for query purposes
const queryClient = postgres(serverRuntimeEnv.DATABASE_URL);

export const db = drizzle(queryClient, { schema: schemas });

export const adapter = new DrizzlePostgreSQLAdapter(db, sessionTable, userTable);
