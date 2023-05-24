/* @/services/controllers/sql/connection/index.ts */

import postgreSQL from "./__postgres__.connection";
import mySQL from "./__mysql__.connection";

const SQL = {
  postgreSQL,
  mySQL,
};

export default SQL;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-21 */
