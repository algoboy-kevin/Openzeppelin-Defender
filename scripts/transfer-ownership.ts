import { ethers, upgrades } from "hardhat";

const MULTI_SIG_ADDRESS = "0x574eB3a8482E13Fe2F8077efd2a75bBd7355332A";

const main = async() => {
  console.log(`Transfering ownership of ProxyAdmin to ${MULTI_SIG_ADDRESS}`);
  const previousOwner = await (await upgrades.admin.getInstance()).signer.getAddress();
  console.log(`Transfering ownership from ${previousOwner} to ${MULTI_SIG_ADDRESS}`)
  await upgrades.admin.transferProxyAdminOwnership(MULTI_SIG_ADDRESS);
  console.log('Transfer is done')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });