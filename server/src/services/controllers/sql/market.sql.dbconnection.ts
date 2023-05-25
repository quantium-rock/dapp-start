import {
  ISold,
  IOnSale,
  IRemoved,
} from "@/global/interfaces/market.interfaces";
import { sqlSelectWhere } from "../../../global/utils/sql.utils";
import mySQL from "./connection/__mysql__.connection";

export const querySaleTable = async (column: string, condition: string) => {
  try {
    mySQL.connect();

    console.log("Connected to MySQL server");

    const query = sqlSelectWhere("sales", column, condition);
    const results = await new Promise<IOnSale | IRemoved | ISold | void>(
      (resolve, reject) => {
        mySQL.query(query, (error, results) => {
          if (error) {
            console.error("Error executing query:", error);
            reject(error);
            return;
          }
          console.log("Query results:", results);
          resolve(results);
        });
      }
    );

    mySQL.end();

    console.log("Connection closed");

    return results;
  } catch (error: any) {
    console.error("Error connecting to MySQL:", error);
    throw error;
  }
};

querySaleTable("*", `status = "ACTIVE"`);
