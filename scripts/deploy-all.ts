import hre from "hardhat";
import { exec } from "child_process";
import fs from "fs";

const deployOne = async (networkName: string) => {
  const tags = hre.config.networks[networkName].tags;
  if (!(tags && tags.includes("deploy"))) {
    return {
      level: "info",
      message: `Skipping ${networkName} because it doesn't have the deploy tag`,
    };
  }

  return await new Promise((resolve, reject) => {
    exec(
      `npx hardhat deploy --network ${networkName} --export exports/${networkName}.json`,
      (error, stdout, stderr) => {
        if (error) {
          return resolve({
            level: "error",
            message: error.message,
          });
        }

        resolve({
          level: "success",
          message: stdout,
        });
      }
    );
  });
};

const main = async () => {
  const networkNames = Object.keys(hre.config.networks);

  const results = await Promise.all(
    networkNames.map((networkName) =>
      deployOne(networkName).then((result) => ({ networkName, result }))
    )
  );

  fs.writeFileSync("./result.json", JSON.stringify(results, null, 2));
};

main();
