import { SECURITY_PRIMARYKEYS } from "../config/security.params";
import { sqlRegex } from "../global/constants/regex";

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

export function createSQLTable(
  tableName: string,
  initSchema: string,
  _ifExists = true
): string {
  return `CREATE TABLE ${
    _ifExists ? "IF NOT EXISTS " : ""
  }${tableName} (${initSchema});`;
}

export function insertSQLRowIntoTable(
  tableName: string,
  values: string,
  schema: string
): string {
  return `INSERT INTO ${tableName} (${schema}) VALUES (${values});`;
}

export function insertSQLValueIntoTable(
  tableName: string,
  columnName: string,
  value: any
): string {
  return `INSERT INTO ${tableName} (${columnName}) VALUES (${value});`;
}
