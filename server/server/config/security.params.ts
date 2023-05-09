import { SecurityLabel } from "../global/types";

/* SECURITY HACKS */
export const SECURITY_PRIMARYKEYS = "__"; // peffix & suffix for db primary keys
export const SECURITY_PREFFIX = "____"; // 4 underscores
export const SECURITY_SUFFIX = "____"; // 4 underscores
export const SECURITY_STRONG: SecurityLabel = "$$$"; // 3 dollar signs
export const SECURITY_MEDIUM: SecurityLabel = "$$"; // 2 dollar signs
export const SECURITY_LONG: SecurityLabel = "$"; // 1 dollar sign
export const SECURITY_HIGH_RISK: SecurityLabel = "!!!"; // 3 exclamation marks
export const SECURITY_MEDIUM_RISK: SecurityLabel = "!!!"; // 3 exclamation marks
export const SECURITY_LOW_RISK: SecurityLabel = "!!!"; // 3 exclamation marks

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-08 */
