/* __auths__.controller.ts */

// import { Client, QueryResult } from "pg";
import {
  authControlsQueries,
  advancedSecurityQueries,
  authSecretKeysQueries,
  web3AuthAccountsQueries,
} from "./schemas/__auths__.queries";

console.log("hello world");

/*** AUTHS DB SQL QUERIES ***/

/** PUBLIC QUERIES **/

/* AuthControls controller */

export const authControlsCtrl = authControlsQueries;

/*  AdvancedSecurity controller */

export const advancedSecurityCtrl = advancedSecurityQueries;

/** PRIVATE STATES **/

/*
!!! SECURITY NOTE: INTERFACES BELOW ARE NEVER SHARED WITH THE CLIENT APP !!!
*/

/* AuthSecretKeys controller */

export const authSecretKeysCtrl = authSecretKeysQueries;

/* Web3AuthAccounts controller */

export const web3AuthAccountsCtrl = web3AuthAccountsQueries;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-09 */
