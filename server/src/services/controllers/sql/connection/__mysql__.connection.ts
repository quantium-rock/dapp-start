/* @/services/controllers/sql/connection/__mysql__connections.ts */

import mysql from "mysql";
import {
  MYSQL_DB_NAME,
  MYSQL_HOST,
  MYSQL_PASSWORD,
  MYSQL_USER,
} from "../../../../config/db.config";

const mySQL = mysql.createConnection({
  host: MYSQL_HOST, // Replace with your MySQL server host
  user: MYSQL_USER, // Replace with your MySQL username
  password: MYSQL_PASSWORD, // Replace with your MySQL password
  database: MYSQL_DB_NAME, // Replace with your MySQL database name
});

export default mySQL;

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-21 */
