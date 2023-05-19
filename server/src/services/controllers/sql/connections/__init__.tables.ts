import { Client } from "pg";
import sql from "../lib";
import {
  SECURITY_PREFFIX,
  SECURITY_SUFFIX,
  SECURITY_STRONG,
} from "../../../../config/security.config";
import { TSecurityLabel } from "../../../../global/types/custom/security.types";

/* CREATE DB TABLES IF NEEDED */

export default async function initSQLTables(
  dbClient: Client,
  tables: any,
  _closeInstance = false,
  _sql = sql
): Promise<void> {
  console.log("\n\nInitalizing SQL tables...\n");

  const tablesKeys = Object.keys(tables);
  const initQueries: string[] = [];
  let riskLevel: TSecurityLabel = SECURITY_STRONG;

  tablesKeys.forEach((key: string) => {
    if (key.endsWith("Class")) {
      riskLevel = Object(tables)[key].security;
    }
    if (key.endsWith("InitSchema")) {
      // const tableName = _sql.addSecurityLabels(
      //   key.replace("InitSchema", ""),
      //   SECURITY_SUFFIX,
      //   SECURITY_PREFFIX,
      //   riskLevel
      // );
      // initQueries.push(
      // _sql.sqlCreateTable(tableName, tables.advancedSecurityInitSchema, true) // true = 'IF NOT EXISTS'.
      // );
    }
  });

  const createAllTables = async (
    queries: string[]
    // _db = dbClient
  ): Promise<boolean> => {
    let errors = 0;
    let i = 0;
    for (const query of queries) {
      try {
        i++;
        // await _db.query(query);
        console.log(
          "\nSQL QUERY RES: ",
          query,
          "\n\n",
          `${i} Table ${query} created succesfully TABLE`,
          "CREATED!"
        );
      } catch (err) {
        console.log("\nERROR: SQL Auths Init tables", err);
        console.log("\n", query, "\nERROR!!!");
        errors++;
      } finally {
        // if (_closeInstance) {
        //   await _db.end();
        // }
      }
    }
    if (errors) return false;
    return true;
  };
  // await createAllTables(initQueries);
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-09 */
