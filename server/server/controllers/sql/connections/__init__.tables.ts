import { Client } from "pg";
import {
  SECURITY_PREFFIX,
  SECURITY_SUFFIX,
  SECURITY_STRONG,
} from "../../../config/security.params";
import { SecurityLabel } from "../../../global/types/security.types";
import { createSQLTable } from "../../../utils/sql.utils";

/* CREATE DB TABLES IF NEEDED */

export default async function initSQLTables(
  dbClient: Client,
  tables: any,
  _closeInstance = false
): Promise<void> {
  console.log("\n\nInitalizing SQL tables...\n");
  const tablesKeys = Object.keys(tables);
  const initQueries: string[] = [];
  let riskLevel: SecurityLabel = SECURITY_STRONG;
  tablesKeys.forEach((key: string) => {
    if (key.endsWith("Class")) {
      riskLevel = Object(tables)[key].security;
    }
    if (key.endsWith("InitSchema")) {
      const tableName = `${SECURITY_PREFFIX}${riskLevel}_${key.replace(
        "InitSchema",
        ""
      )}_${riskLevel}${SECURITY_SUFFIX}`;
      initQueries.push(
        createSQLTable(tableName, tables.advancedSecurityInitSchema, true) // true = 'IF NOT EXISTS'.
      );
    }
  });
  const createAllTables = async (
    queries: string[],
    _db = dbClient
  ): Promise<boolean> => {
    let errors = 0;
    let i = 0;
    for (const query of queries) {
      try {
        i++;
        await _db.query(query);
        console.log(
          "\nSQL QUERY: ",
          query,
          "\n\nSUCCESS! TABLE",
          i,
          "CREATED!"
        );
      } catch (err) {
        console.log("\nERROR: SQL Auths Init tables", err);
        console.log("\n", query, "\nERROR!!!");
        errors++;
      } finally {
        if (_closeInstance) {
          await _db.end();
        }
      }
    }
    if (errors) return false;
    return true;
  };
  await createAllTables(initQueries);
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-09 */
