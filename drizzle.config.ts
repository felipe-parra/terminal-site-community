import serverConfig from '@/config/serverConfig';
import type { Config } from 'drizzle-kit';

console.log('Database URL:', serverConfig.TURSO_DATABASE_URL);
console.log('Auth Token:', serverConfig.TURSO_AUTH_TOKEN);
export default {
  schema: './src/lib/drizzle.ts',
  out: './drizzle/migrations',
  dialect: 'turso',
  dbCredentials: {
    url: serverConfig.TURSO_DATABASE_URL || '',
    authToken: serverConfig.TURSO_AUTH_TOKEN || '',
  },
  verbose: true,
} satisfies Config;
