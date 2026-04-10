"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { PgliteDatabase } from "drizzle-orm/pglite";
import * as schema from "@/lib/db/schema";

type Database = PgliteDatabase<typeof schema>;

const DBContext = createContext<Database | null>(null);

export const DBProvider = ({ children }: { children: React.ReactNode }) => {
  const [db, setDb] = useState<Database | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const { getDB } = await import("@/lib/db/client");
        const database = await getDB();
        setDb(database as Database);
      } catch (e) {
        console.warn("DBProvider: PGLite skipped on this environment.");
      }
    };
    init();
  }, []);

  return (
    <DBContext.Provider value={db}>
      {children}
    </DBContext.Provider>
  );
};

export const useDB = () => {
  const context = useContext(DBContext);
  return context;
};
