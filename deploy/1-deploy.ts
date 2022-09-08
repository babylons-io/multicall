import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function ({
  deployments: { deploy },
  getNamedAccounts,
}: HardhatRuntimeEnvironment) {
  const { deployer } = await getNamedAccounts();

  await deploy("Multicall2", {
    from: deployer,
    log: true,
    contract: "contracts/Multicall2.sol:Multicall2",
    args: [],
  });
};
export default func;
