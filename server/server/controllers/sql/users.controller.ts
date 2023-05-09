// TODO: Users ____profiles____ table
// TODO: Users ____friends____ table
// TODO: Users ____uiconfigs____ table
// TODO: Users ____activity____ table
// TODO: Users ____stats____ table

import { Client, QueryResult } from "pg";
import {
  AuthConnection,
  AuthControls,
  AuthState,
  UserProfile,
} from "../../global/interfaces";
import { AuthsDB } from "../../global/interfaces/sql.interfaces";
import {
  usernameExists_query,
  _getUserAuths,
  _getAuthInfo,
  _updateLastLogin,
  _getUserToken,
  _createUser,
  _updateUserProfile,
  _updateUserAuth,
  _isNewUser,
  _searchUsers,
  _getUserProfile,
  _usersFlags,
} from "./schemas/users.queries";
import { getAuthState } from "../../services/auth/get-auth-state";

export async function usernameExists_ctrl(
  db: Client,
  username: string
): Promise<boolean> {
  try {
    const authsDB: QueryResult = await db.query(usernameExists_query(username));
    if (authsDB.rowCount > 0) return true;
  } catch (error) {
    console.log("\n\nERROR on usernameExists_ctrl() caught:\n", error as Error);
    // TODO: add error logs controller
  }
  return false;
}

export async function getAuthState_ctrl(
  db: Client,
  username: string
): Promise<AuthState | false> {
  try {
    const data: Promise<QueryResult<AuthsDB>> | any = await db.query(
      _getUserAuths(username)
    );
    if (data.rowsCount === 0) return false;
    return getAuthState(data.rows);
  } catch (error) {
    console.log(`\n\nERROR on getAuthState_ctrl() error catched:\n`, error);
    // TODO: add error logs controller
  }
}

export async function updateLastLogin(
  db: Client,
  username: string,
  token: string
): Promise<boolean> {
  try {
    await db.query(_updateLastLogin(username, token));
    return true;
  } catch (error) {
    console.log("updateLastLogin Ctrl error:", error);
    return false;
  }
}

export async function getUserToken(
  db: Client,
  username: string
): Promise<string> {
  try {
    const data = await db.query(_getUserToken(username));
    return data.rows[0].__token__;
  } catch (error) {
    console.log("getUserToken Ctrl error:", error);
    return "";
  }
}

// export async function createUser(authInfo: AuthInfo): Promise<boolean> {
//   try {
//     await db.query(
//       _createUser(authInfo.username, authInfo.token, authInfo.email)
//     );
//     return true;
//   } catch (error) {
//     if (String(error).includes("duplicate")) {
//       console.log("ERROR: User already exists");
//       return false;
//     }
//     console.log(error);
//     return false;
//   }
// }

export async function updateUserAuth(
  db: Client,
  username: string,
  token: string,
  update: string,
  value: string
): Promise<boolean> {
  try {
    await db.query(_updateUserAuth(username, token, update, value));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function updateUserProfile(
  db: Client,
  username: string,
  update: string,
  value: string
): Promise<boolean | Error> {
  try {
    await db.query(_updateUserProfile(username, update, value));
    return true;
  } catch (error) {
    console.log(error);
    // TODO: add error logs controller
  }
  return false;
}

export async function getUserProfile(
  db: Client,
  username: string
): Promise<UserProfile | false> {
  try {
    const data = await db.query(_getUserProfile(username));
    if (data.rows.length === 0) return false; // No records found in db
    return data.rows[0];
  } catch (error) {
    console.log(error);
    // TODO: add error logs controller
  }
}

export async function searchUsers(
  db: Client,
  search: string
): Promise<Array<object> | boolean> {
  try {
    const data = await db.query(_searchUsers(search));
    const rows = data.rows;
    return rows;
  } catch (error) {
    console.log(error);
    return false;
  }
}
