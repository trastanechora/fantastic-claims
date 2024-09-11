import { InferSelectModel } from 'drizzle-orm';
import { userTable } from './schema';

export type DatabaseUserAttributes = InferSelectModel<typeof userTable>;
