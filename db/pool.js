import pkg from "pg";
const { Pool } = pkg;

export default new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  idleTimeoutMillis: 300000, // 5 minutes
  max: 20,
  allowExitOnIdle: true,
});
