import hre from "hardhat";
import { exec } from "child_process";

const main = async () => {
  const networkNames = Object.keys(hre.config.networks);
  for (const networkName of networkNames) {
    if (!hre.config.networks[networkName].live) continue;

    await new Promise<void>((resolve, reject) => {
      console.log(`Deploying to ${networkName}...`);
      exec(
        `npx hardhat deploy --network ${networkName} --export exports/${networkName}.json`,
        (error, stdout, stderr) => {
          if (error) {
            console.log(`Error occured: ${networkName}`);
            return reject(error);
          }

          resolve();
        }
      );
    });
  }
};

main();
