const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // Deploy MyNFT
  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const nft = await MyNFT.deploy();
  await nft.waitForDeployment();
  console.log("MyNFT deployed to:", await nft.getAddress());

  // Deploy TokenBoundRegistry
  const TokenBoundRegistry = await hre.ethers.getContractFactory("TokenBoundRegistry");
  const registry = await TokenBoundRegistry.deploy();
  await registry.waitForDeployment();
  console.log("TokenBoundRegistry deployed to:", await registry.getAddress());

  // Save addresses for later scripts
  const addresses = {
    MyNFT: await nft.getAddress(),
    TokenBoundRegistry: await registry.getAddress()
  };
  fs.writeFileSync("deploymentAddresses.json", JSON.stringify(addresses, null, 2));
  console.log("Addresses saved to deploymentAddresses.json");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
