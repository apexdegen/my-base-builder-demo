const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  const BaseOracle = await hre.ethers.getContractFactory("BaseOracle");
  const oracle = await BaseOracle.deploy();
  await oracle.waitForDeployment();
  
  console.log("✅ BaseOracle deployed to:", await oracle.getAddress());
  
  const addresses = JSON.parse(fs.readFileSync("deploymentAddresses.json", "utf8"));
  addresses.BaseOracle = await oracle.getAddress();
  fs.writeFileSync("deploymentAddresses.json", JSON.stringify(addresses, null, 2));
  console.log("✅ Updated deploymentAddresses.json with BaseOracle");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
