/* __auths__.queries.ts */

import {
  authControlsSchema,
  advancedSecuritySchema,
  authSecretKeysSchema,
  web3AuthAccountsSchema,
} from "./__auths__.schemas";

/*** AUTHS DB SQL QUERIES ***/

/** PUBLIC QUERIES **/

/* AuthControls queries */

export const authControlsQueries = { authControlsSchema };

/*  AdvancedSecurity queries */

export const advancedSecurityQueries = { advancedSecuritySchema };

/** PRIVATE STATES **/

/*
!!! SECURITY NOTE: INTERFACES BELOW ARE NEVER SHARED WITH THE CLIENT APP !!!
*/

/* AuthSecretKeys queries */

export const authSecretKeysQueries = { authSecretKeysSchema };

/* Web3AuthAccounts queries */

export const web3AuthAccountsQueries = { web3AuthAccountsSchema };

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-09 */
