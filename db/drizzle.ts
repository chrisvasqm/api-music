import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
    connectionString: process.env.DATABASE_URL,
});

const connect = async () => await client.connect();
connect();

const db = drizzle(client);

export default db;