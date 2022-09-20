import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { BigNumber } from "ethers";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {
    deployments: { deploy, get, getOrNull },
    network,
    getNamedAccounts,
  } = hre;

  const { funder, deployer } = await getNamedAccounts();
  const funderSigner = await ethers.getSigner(funder);
  const deployerSigner = await ethers.getSigner(deployer);

  const deployed = await getOrNull("Multicall2");
  if (deployed) {
    console.log("Multicall2 already deployed at", deployed.address);
    return;
  }

  const { gasLimit, gasPrice, gasCost } = await computeCost(hre);
  await fundAccount(funderSigner, deployerSigner, gasCost);

  await deploy("Multicall2", {
    from: deployer,
    log: true,
    contract: "contracts/Multicall2.sol:Multicall2",
    args: [],
    gasLimit: gasLimit,
    gasPrice: gasPrice,
    nonce: 0,
  });
};
export default func;

const computeCost = async ({
  companionNetworks,
}: HardhatRuntimeEnvironment) => {
  const gasLimit = ethers.BigNumber.from(595585).mul(2);
  const gasPrice = await ethers.provider.getGasPrice();
  let gasCost = gasLimit.mul(gasPrice);

  if (companionNetworks["l1"]) {
    const l1GasPrice = await companionNetworks["l1"].provider.send(
      "eth_gasPrice"
    );
    const l1GasCost = BigNumber.from(50000).mul(l1GasPrice);
    gasCost = gasCost.add(l1GasCost);
  }

  return { gasLimit, gasPrice, gasCost };
};

const fundAccount = async (
  funderSigner: SignerWithAddress,
  deployerSigner: SignerWithAddress,
  fund: BigNumber
) => {
  const deployerBalance = await deployerSigner.getBalance();
  if (deployerBalance.lt(fund)) {
    console.log("Deployer is funding by funder");
    const fundToBe = fund.sub(await deployerSigner.getBalance());
    const txFund = await funderSigner.sendTransaction({
      to: deployerSigner.address,
      value: fundToBe,
      //gasLimit: 21000,
    });
    await txFund.wait(1);
  }
};

const tags = ["Multicall2"];
export { tags };
