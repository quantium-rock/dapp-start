/* @/global/utils/json.utils.ts */

import { jsonRegex } from "../../global/constants/regex.constants";

/*** JSON UTILS ***/

export function jsonInjectionFilter(text: string): string {
  if (!text.match(jsonRegex)) {
    return text.replace(/ /g, "");
  }
  return "JSON INJECTION DETECTED";
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-06-10 */
