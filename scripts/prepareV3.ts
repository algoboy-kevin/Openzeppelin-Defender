import { ethers, upgrades } from "hardhat";

const PROXY = "0xB08a17fbCEccE71906564bc97f6fB87648B08353";
const NEW_IMPLEMENTATION_CONTRACT = "BoxV3"

const main = async() => {
  console.log(`Upgrading contract with proxy address ${PROXY}`);
  const V3Contract = await ethers.getContractFactory(NEW_IMPLEMENTATION_CONTRACT);
  const PrepareUpgrade = await upgrades.prepareUpgrade(PROXY,V3Contract)
  console.log(`${PrepareUpgrade}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });