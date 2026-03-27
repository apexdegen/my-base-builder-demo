const hre = require("hardhat");

async function main() {
  const MyNFT = await hre.ethers.getContractFactory("MyNFT");
  const nft = await MyNFT.deploy();
  await nft.waitForDeployment();
  console.log("MyNFT deployed to:", await nft.getAddress());

  const TokenBoundRegistry = await hre.ethers.getContractFactory("TokenBoundRegistry");
  const registry = await TokenBoundRegistry.deploy();
  await registry.waitForDeployment();
  console.log("TokenBoundRegistry deployed to:", await registry.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
