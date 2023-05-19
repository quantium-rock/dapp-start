import { Client } from "pg";
import initSQLTables from "./__init__.tables";
import { DB2_AUTHS, DB2_USERS } from "../../../../config/dbx.config";
import * as auths from "../schemas/__auths__.schemas";
import * as users from "../schemas/users.schemas";

export const connectToAuthsDB2 = async (): Promise<Client> => {
  const authsDB: Client = new Client(DB2_AUTHS);
  try {
    await authsDB.connect();
  } catch (error) {
    console.warn("\n\nERROR: authsDB.connect() failed:\n", error as Error);
    // TODO: add error logs controller
  }
  try {
    await initSQLTables(authsDB, auths, false); // if needed.
    console.log("\nAuthsDB initialized SQL tables correctly.");
  } catch (error) {
    console.warn(
      "\n\nERROR: AuthsDB initSQLTables() failed:\n",
      error as Error
    );
    // TODO: add error logs controller
  }
  return authsDB;
};

export const connectToUsersDB2 = async (): Promise<Client> => {
  const usersDB: Client = new Client(DB2_USERS);
  try {
    await usersDB.connect();
  } catch (error) {
    console.warn("\n\nERROR: usersDB.connect() failed:\n", error as Error);
    // TODO: add error logs controller
  }
  try {
    await initSQLTables(usersDB, users, false); // if needed.
    console.log("\nUsersDB initialized SQL tables correctly.");
  } catch (error) {
    console.warn(
      "\n\nERROR: UsersDB initSQLTables() failed:\n",
      error as Error
    );
    // TODO: add error logs controller
  }
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
/* Last update: 2023-05-10 */
