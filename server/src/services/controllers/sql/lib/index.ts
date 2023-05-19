/* @/controllers/sql/lib/index.ts */

import * as sqlUtils from "../../../../global/utils/sql.utils";

const sql = { ...sqlUtils };

// /* DISABLE DROP TABLE */
// sql.sqlDropTable = (tableName: string): string => {
//   console.warn(
//     `\nWarning: sqlDropTable(${tableName}) was called but has been disabled.`
//   );
//   return "DROP TABLE HAS BEEN DISABLED.";
// };

export default sql;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-09 */
