const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  const BaseHelper = await hre.ethers.getContractFactory("BaseHelper");
  const helper = await BaseHelper.deploy();
  await helper.waitForDeployment();
  
  console.log("✅ BaseHelper deployed to:", await helper.getAddress());
  
  const addresses = JSON.parse(fs.readFileSync("deploymentAddresses.json", "utf8"));
  addresses.BaseHelper = await helper.getAddress();
  fs.writeFileSync("deploymentAddresses.json", JSON.stringify(addresses, null, 2));
  console.log("✅ Updated deploymentAddresses.json with BaseHelper");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
