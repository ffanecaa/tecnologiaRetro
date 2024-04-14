import dotenv from "dotenv";

dotenv.config();
export const {
  PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
DB_PORT,
  DB_NAME,
  TOKEN_SECRET,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  IPV4,
} = process.env;
