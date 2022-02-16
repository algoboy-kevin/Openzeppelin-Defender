import { ethers, upgrades } from "hardhat";

const PROXY = "0xB08a17fbCEccE71906564bc97f6fB87648B08353";
const NEW_IMPLEMENTATION_CONTRACT = "BoxV2"

const main = async() => {
  console.log(`Upgrading contract with proxy address ${PROXY}`);
  const V2Contract = await ethers.getContractFactory(NEW_IMPLEMENTATION_CONTRACT);
  const UpgradeProxy = await upgrades.upgradeProxy(PROXY, V2Contract);
  console.log(`Contract is upgraded at ${UpgradeProxy.address}, please verify on etherscan`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });