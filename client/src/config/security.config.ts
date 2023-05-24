/* @/config/security.config.ts */

import { TSecurityLabel } from "../global/types/custom/security.types";

/*** SECURITY HACKS ***/

export const SECURITY_PRIMARYKEYS = "__"; // peffix & suffix for db primary keys
export const SECURITY_PREFFIX = "____"; // 4 underscores
export const SECURITY_SUFFIX = "____"; // 4 underscores
export const SECURITY_STRONG: TSecurityLabel = "$$$"; // 3 dollar signs
export const SECURITY_MEDIUM: TSecurityLabel = "$$"; // 2 dollar signs
export const SECURITY_LONG: TSecurityLabel = "$"; // 1 dollar sign
export const SECURITY_HIGH_RISK: TSecurityLabel = "!!!"; // 3 exclamation marks
export const SECURITY_MEDIUM_RISK: TSecurityLabel = "!!!"; // 3 exclamation marks
export const SECURITY_LOW_RISK: TSecurityLabel = "!!!"; // 3 exclamation marks

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-08 */
