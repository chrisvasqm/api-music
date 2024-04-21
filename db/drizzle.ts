import dotenv from 'dotenv'
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
import * as schema from './schema'

dotenv.config();

const client = new Client({
    connectionString: process.env.DATABASE_URL!,
});

const connect = async () => await client.connect();
connect();

const db = drizzle(client, { schema });

export default db;