import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema.jsx";

const sql  = (
    process.env.NEXT_PUBLIC_DATABASE_URL 
)

export const db = drizzle(sql, { schema })