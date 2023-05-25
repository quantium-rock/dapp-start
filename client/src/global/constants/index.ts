/* @/global/constants/index.ts */

import REGEX_CONSTANTS from "./regex.constants";
import LANGS_CONSTANTS from "./langs.constants";
import COLORS_CONSTANTS from "./color.constants";

export const userAgent = // Web compatibility.
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36";

/*** GLOBAL CONSTANTS ***/

const CONSTANTS = {
  regex: REGEX_CONSTANTS,
  langs: LANGS_CONSTANTS,
  color: COLORS_CONSTANTS,
  webComp: userAgent,
};

export default CONSTANTS;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-10 */
