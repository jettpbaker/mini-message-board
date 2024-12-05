import pkg from "pg";
import { readFileSync } from "fs";
import path from "path";

const { Client } = pkg;

const dbUrl = process.env.DATABASE_URL;
console.log("DATABASE_URL:", dbUrl);

const sqlFilePath = path.resolve("./db/seed.sql");
const SQL = readFileSync(sqlFilePath, "utf-8");

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: dbUrl,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
