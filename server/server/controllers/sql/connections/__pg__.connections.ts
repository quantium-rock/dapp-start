import { Client } from "pg";
import initSQLTables from "./__init__.tables";
import { DB2_AUTHS, DB2_USERS } from "../../../config/db2.params";
import * as auths from "../schemas/__auths__.schemas";
import * as users from "../schemas/users.schemas";

export const connectAuthsDB = async (): Promise<Client> => {
  const authsDB: Client = new Client(DB2_AUTHS);
  await authsDB.connect();
  await initSQLTables(authsDB, auths, false); // if needed.
  return authsDB;
};

export const connectUsersDB = async (): Promise<Client> => {
  const usersDB: Client = new Client(DB2_USERS);
  await usersDB.connect();
  await initSQLTables(usersDB, users, false); // if needed.
  return usersDB;
};

// const messagesDBurl: string = String(process.env.MESSAGES_DB_URL);
// export const messagesDB: Client = new Client(messagesDBurl);
// messagesDB.connect();

// const nftsDBurl: string = String(process.env.NFTS_DB_URL);
// export const nftsDB: Client = new Client(nftsDBurl);
// nftsDB.connect();

// const tokenDBurl: string = String(process.env.TOKEN_DB_URL);
// export const tokenDB: Client = new Client(tokenDBurl);
// tokenDB.connect();

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-09 */
