/* @/controllers/__auth__.controller.ts */

import { Client, QueryResult } from "pg";
import { IAuthPublicState } from "../../../global/interfaces/auth.interfaces";
import { AuthControlsTable } from "./schemas/__auths__.tables";
import { authControlsSchema } from "./schemas/__auths__.schemas";
// import { authenticateUser } from "../../services/auth/native-mfa/authenticate-user.service";
import sql from "./lib";

/*** AUTHS SQL DB CONTROLLERS ***/

/** PUBLIC QUERIES **/

/* AuthControls controller */

export async function uidVerifierCtrl(
  db: Client,
  uid: string
): Promise<boolean> {
  try {
    // const table = sql.addSecurityLabels("auths");
    const column = authControlsSchema;
    // const query = sql.sqlSelectXY(table, column, uid);
    // const authsDB: QueryResult = await db.query(query);
    // if (authsDB.rowCount > 0) return true; // uid exists.
  } catch (error) {
    console.warn(
      "\n\nERROR: usernameExistsCtrl() controller failed:\n",
      error as Error
    );
    // TODO: add error logs controller
  }
  return false; // uid does not exist.
}

// export async function getAuthSecretKeys();

export async function getAuthPublicStateCtrl(
  db: Client,
  uid: string
): Promise<IAuthPublicState | false> {
  try {
    const schema = authControlsSchema;
    // const table = sql.addSecurityLabels("auths");
    // const query = sql.sqlSelectRow(schema, table, uid);
    // const data: QueryResult<AuthControlsTable> = await db.query(query);
    // if (data.rowCount === 0) return false;
    // console.log("User", authenticateUser(uid, [data.rows]));
    return false;
  } catch (error) {
    console.warn(`\n\nERROR on getAuthState_ctrl() error catched:\n`, error);
    // TODO: add error logs controller
  }
  return false; // controller failed.
}

/*  AdvancedSecurity controller */

export const advancedSecurityCtrl = 0;

/** PRIVATE STATES **/

/*
!!! SECURITY NOTE: INTERFACES BELOW ARE NEVER SHARED WITH THE CLIENT APP !!!
*/

/* AuthSecretKeys controller */

export const authSecretKeysCtrl = 0;

/* Web3AuthAccounts controller */

export const web3AuthAccountsCtrl = 0;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-09 */
