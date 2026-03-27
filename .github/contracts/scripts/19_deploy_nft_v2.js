const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  const BaseNFTv2 = await hre.ethers.getContractFactory("BaseNFTv2");
  const nftv2 = await BaseNFTv2.deploy();
  await nftv2.waitForDeployment();
  
  console.log("✅ BaseNFTv2 deployed to:", await nftv2.getAddress());
  
  const addresses = JSON.parse(fs.readFileSync("deploymentAddresses.json", "utf8"));
  addresses.BaseNFTv2 = await nftv2.getAddress();
  fs.writeFileSync("deploymentAddresses.json", JSON.stringify(addresses, null, 2));
  console.log("✅ Updated deploymentAddresses.json with BaseNFTv2");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
