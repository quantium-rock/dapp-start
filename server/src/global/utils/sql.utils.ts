/* @/global/utils/sql.utils.ts */

import {
  SECURITY_PRIMARYKEYS,
  SECURITY_HIGH_RISK,
  SECURITY_SUFFIX,
} from "../../config/security.config";
import { TSecurityLabel } from "../../global/types/custom/security.types";
import { sqlRegex } from "../../global/constants/regex.constants";

/*** SQL UTILS ***/

export function sqlInjectionFilter(text: string): string {
  if (!text.match(sqlRegex)) {
    return text.replace(/ /g, "");
  }
  return "SQL INJECTION DETECTED";
}

export function convertClassToSQLSchema(classObject: any): string {
  return Object.keys(classObject).join(", ");
}

export function convertClassToSQLInitSchema(classObject: any): string {
  let initSchema = "";
  const primaryKeys = [] as string[];
  const schema = Object.keys(classObject);
  schema.map((key: string) => {
    if (
      key.startsWith(SECURITY_PRIMARYKEYS) &&
      key.endsWith(SECURITY_PRIMARYKEYS)
    ) {
      primaryKeys.push(key);
    }
    if (typeof classObject[key] === "string") {
      initSchema += `${key} VARCHAR(255), `;
    } else if (typeof classObject[key] === "number") {
      initSchema += `${key} FLOAT, `;
    } else if (typeof classObject[key] === "boolean") {
      initSchema += `${key} BOOLEAN, `;
    } else if (typeof classObject[key] === "bigint") {
      initSchema += `${key} BIGINT, `;
    } else if (typeof classObject[key] === "object") {
      if (Array.isArray(classObject[key])) {
        initSchema += `${key} VARCHAR(1255), `;
      } else {
        console.log(
          "\nERROR: convertClassToSQLSchema() can't transform deep objects. Only array object are allow for SQL schemas.",
          key
        );
      }
    }
  });
  return `${initSchema} PRIMARY KEY (${primaryKeys.join(", ")})`;
}

export function addSecurityLabels(
  name: string,
  _preffix = SECURITY_SUFFIX,
  _suffix = SECURITY_SUFFIX,
  _security: TSecurityLabel = SECURITY_HIGH_RISK
): string {
  return `${_preffix}${_security}_${name}_${_security}${_suffix}`;
}

/* SQL QUERIES */

/* CREATE QUERIES */

export function sqlCreateDatabase(db: string): string {
  return `CREATE DATABASE ${db};`;
}

export function sqlCreateTable(
  tableName: string,
  initSchema: string,
  _ifNotExists = true
): string {
  return `CREATE TABLE ${
    _ifNotExists ? "IF NOT EXISTS " : ""
  }${tableName} (${initSchema});`;
}

export function sqlDropTable(tableName: string): string {
  return `DROP TABLE ${tableName};`;
}

/* INSERT QUERIES */

export function sqlInsertRow(
  table: string,
  schema: string,
  row: string // strings must have 'quotes'
): string {
  return `INSERT INTO ${table} (${schema}) VALUES (${row});`;
}

export function sqlInsertColumn(
  table: string,
  column: string,
  datatype: string
): string {
  return `ALTER TABLE ${table} ADD ${column} ${datatype};`;
}

export function sqlInsertXY(
  table: string,
  column: string,
  row: string // strings must have 'quotes'
): string {
  return `UPDATE ${table} SET ${column} WHERE ${row};`;
}

/* SELECT QUERIES */

export function sqlSelectRow(
  table: string,
  schema: string,
  row: string
): string {
  return `SELECT ${schema} FROM ${table} WHERE ${row};`;
}

export function sqlSelectColumn(table: string, column: string): string {
  return `SELECT ${column} FROM ${table};`;
}

export function sqlSelectXY(
  table: string,
  column: string,
  row: string // strings must have 'quotes'
): string {
  return `SELECT ${column} FROM ${table} WHERE ${row};`;
}

export function sqlSelectAll(
  table: string,
  column: string,
  row: string // strings must have 'quotes'
): string {
  return `SELECT ${column} FROM ${table} WHERE ${row};`;
}

export function sqlSelectWhere(
  table: string,
  column: string,
  condition: string // strings must have 'quotes'
): string {
  return `SELECT ${column} FROM ${table} WHERE ${condition};`;
}

export function sqlSelectWhereAnd(
  table: string,
  column: string,
  conditions: string[] // strings must have 'quotes'
): string {
  let query = `SELECT ${column} FROM ${table} WHERE`;
  for (const condition of conditions) query += ` ${condition} AND`;
  return query.slice(0, -3) + ";";
}

/* END OF SCRIPT */
/* v1.0 */
/* Last update: 2023-05-09 */
