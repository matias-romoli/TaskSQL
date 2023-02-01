import dtv from "dotenv";
dtv.config();

export const env = {
  server: {
    port: process.env.PORT,
    pers: process.env.PERS
  },
  db: {
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DB,
    password: process.env.PASS,
  },
};
