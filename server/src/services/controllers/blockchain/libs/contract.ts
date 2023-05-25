import fs from "fs";
import path from "path";

const Contract = {
  getABI(contractName: string) {
    return contractName
      ? JSON.parse(
          fs.readFileSync(
            path.join(__dirname, "../abis/" + contractName + ".json"),
            "utf-8" // Set the encoding to obtain a string
          )
        )["abi"]
      : null;
  },
};

export default Contract;
