export const config = {
  host: process.env.PGHOST || "localhost",
  port: Number(process.env.PGPORT) || 5432,
  user: process.env.PGUSER || "brissetcp",
  password: process.env.PGPASSWORD || "",
  database: process.env.PGDATABASE || "fullStock",
};
//console.log("config", config)