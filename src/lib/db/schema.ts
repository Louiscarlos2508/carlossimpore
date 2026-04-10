import { pgTable, serial, text, timestamp, jsonb } from 'drizzle-orm/pg-core';

export const events = pgTable('events', {
  id: serial('id').primaryKey(),
  type: text('type').notNull(), // e.g., 'session_start', 'cta_click', 'form_submit'
  description: text('description'),
  metadata: jsonb('metadata').default({}), // Contextual data (locale, device, ref)
  timestamp: timestamp('timestamp').defaultNow().notNull(),
});

export type Event = typeof events.$inferSelect;
export type NewEvent = typeof events.$inferInsert;
