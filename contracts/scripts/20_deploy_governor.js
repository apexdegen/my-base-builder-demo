const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  const BaseGovernor = await hre.ethers.getContractFactory("BaseGovernor");
  const governor = await BaseGovernor.deploy();
  await governor.waitForDeployment();
  
  console.log("✅ BaseGovernor deployed to:", await governor.getAddress());
  
  const addresses = JSON.parse(fs.readFileSync("deploymentAddresses.json", "utf8"));
  addresses.BaseGovernor = await governor.getAddress();
  fs.writeFileSync("deploymentAddresses.json", JSON.stringify(addresses, null, 2));
  console.log("✅ Updated deploymentAddresses.json with BaseGovernor");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
