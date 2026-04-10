import { PGlite } from '@electric-sql/pglite';
import { drizzle } from 'drizzle-orm/pglite';
import * as schema from './schema';

let pg: PGlite | null = null;

export const getDB = async () => {
  if (typeof window === 'undefined') return null;

  if (!pg) {
    try {
      // Use IndexedDB for persistent storage across refreshes
      pg = new PGlite('idb://carlos-portfolio-v1');
      await pg.waitReady;

      // Ensure the table exists locally
      await pg.exec(`
        CREATE TABLE IF NOT EXISTS events (
          id SERIAL PRIMARY KEY,
          type TEXT NOT NULL,
          description TEXT,
          metadata JSONB DEFAULT '{}',
          timestamp TIMESTAMP DEFAULT NOW() NOT NULL
        );
      `);
    } catch (error) {
      console.warn("PGLite could not be initialized on this device:", error);
      return null;
    }
  }

  return pg ? drizzle(pg, { schema }) : null;
};
