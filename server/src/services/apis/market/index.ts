// import {
//   ISold,
//   IOnSale,
//   IRemoved,
// } from "@/global/interfaces/market.interfaces";
import { MARKET_API, API_BEARER_TOKEN } from "../../../config/db.config";
import axios from "axios";

async function queryData(query: string | void) {
  const results = await axios.get(`${MARKET_API}/${query}`, {
    headers: {
      Authorization: API_BEARER_TOKEN,
      "Content-Type": "application/json",
    },
  });

  let resultsArray = [];

  for (let i = 0; i < results.data.data.length; i++) {
    resultsArray.push(results.data.data[i]);
  }

  console.log(resultsArray);
  return resultsArray;
}

// queryData();
queryData("?status=SOLD");
