import * as dotenv from "dotenv";
import { cleanEnv, num, str } from "envalid";

dotenv.config();

const env = cleanEnv(process.env, {
  TOKEN: str(),
  NODE_ENV: str({
    choices: ["development", "production"],
  }),
  ADMIN_ID: num(),
  DOMAIN: str({
    default: "localhost",
  }),
  PORT: num({
    default: 5000,
  }),
});

export { env };
