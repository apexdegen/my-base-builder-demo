const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  const BaseToken = await hre.ethers.getContractFactory("BaseToken");
  const token = await BaseToken.deploy();
  await token.waitForDeployment();
  
  console.log("✅ BaseToken deployed to:", await token.getAddress());
  
  const addresses = JSON.parse(fs.readFileSync("deploymentAddresses.json", "utf8"));
  addresses.BaseToken = await token.getAddress();
  fs.writeFileSync("deploymentAddresses.json", JSON.stringify(addresses, null, 2));
  console.log("✅ Updated deploymentAddresses.json with BaseToken");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
