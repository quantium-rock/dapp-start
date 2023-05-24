/* @/services/controllers/sql/connection/__postgres__connections.ts */

import { Client } from "pg";
import initSQLTables from "@/services/controllers/sql/lib/__init__.tables";

export const connectToMarketDBy = async (
  client?: Client,
  _init_tables = false
): Promise<Client> => {
  const marketDB: Client = new Client(client);
  try {
    await marketDB.connect();
  } catch (error) {
    console.warn("\n\nERROR: authsDB.connect() failed:\n", error as Error);
    // TODO: add error logs controller
  }
  if (_init_tables) {
    try {
      await initSQLTables(marketDB); // if needed.
      console.log("\nAuthsDB initialized SQL tables correctly.");
    } catch (error) {
      console.warn(
        "\n\nERROR: AuthsDB initSQLTables() failed:\n",
        error as Error
      );
      // TODO: add error logs controller
    }
  }
  return marketDB;
};

export const connectToLogsDBy = async (
  client?: Client,
  _init_tables = false
): Promise<Client> => {
  const logsDB: Client = new Client(client);
  try {
    await logsDB.connect();
  } catch (error) {
    console.warn("\n\nERROR: usersDB.connect() failed:\n", error as Error);
    // TODO: add error logs controller
  }
  if (_init_tables) {
    try {
      await initSQLTables(logsDB); // if needed.
      console.log("\nUsersDB initialized SQL tables correctly.");
    } catch (error) {
      console.warn(
        "\n\nERROR: UsersDB initSQLTables() failed:\n",
        error as Error
      );
      // TODO: add error logs controller
    }
  }
  return logsDB;
};

const postgreSQL = {
  market: { ...connectToMarketDBy },
  logs: { ...connectToLogsDBy },
  // ...
};

export default postgreSQL;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-10 */
