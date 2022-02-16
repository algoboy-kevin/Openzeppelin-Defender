# Upgrading a Smart Contract via Multisig
This is a repository for smart contract upgrading using multisig and Open Zeppelin Defender. To get started, you will need the following:
  1. Defender Account. Head over Open Zeppelin to sign up
  2. Infura Server
  3. Multisignature wallet. Check out on Gnosis
  4. Installed dev dependencies
  5. Preparing .env variables (API and private keys)

## Deploying Box V1
Run ```npx hardhat run scripts/deployV1.ts --network goerli``` to start. There should be three contract deployed:
  1. Box (implementation, copy this address for verifying)
  2. Proxy Admin
  3. Proxy Contract (copy this for V2 upgrade)

Run ```npx hardhat verify YOUR_BOX_V1_ADDRESS --network goerli```, you may get error message on terminal. The verification may still succeed, please recheck at etherscan.

## Upgrading to V2
Prior to upgrading contract, please make sure you have changed the PROXY address variable in deployV2.ts to your own proxy contract address, then run ```npx hardhat run scripts/deployV2.ts --network goerli```

Run ```npx hardhat verify YOUR_BOX_V2_ADDRESS --network goerli``` to verify the newly created implementation contract.

## Transfering Ownership to Gnosis Multisig
Change MULTI_SIG_ADDRESS value in transfer-ownership.ts to your own Gnosis Multisig address. Then run ```npx hardhat run scripts/transfer-ownership.ts --network goerli```, now the Multisig is the proxy owner.

## Preparing Proposal Upgrade for V3
To upgrade into V3, you need to prepare a proposal to be signed by multisig wallet. Please adjust PROXY variable address to your prior running the script. Run ```npx hardhat run scripts/prepareV3.ts --network goerli``` it should return the BoxV3 implementation address, verify it using hardhat verify. Copy the address to make upgrade proposal in Openzeppelin Defender.

## Manage Upgrade Via Openzeppelin Defender
Add your Proxy Contract address to open zeppelin, then initiate the upgrade. Put the BoxV3 address as the latest implementation address. Insert title and decription and click propose.

## Sign and Execute
You can sign and execute the upgrade proposal via Defender or Gnosis. Once it is signed and executed, the upgrade should be applied.