import { ethers, upgrades } from "hardhat";

const IMPLEMENTATION_CONTRACT = "Box"

const main = async() => {
  console.log("Deploying contract version 1.0.0, please wait");
  const V1Contract = await ethers.getContractFactory(IMPLEMENTATION_CONTRACT);
  const ProxyContract = await upgrades.deployProxy(V1Contract, [42]);
  console.log(`Contract deployed to: ${ProxyContract.address}, please verify on etherscan`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });