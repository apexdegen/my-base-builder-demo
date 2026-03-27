const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  const BaseTimelock = await hre.ethers.getContractFactory("BaseTimelock");
  const timelock = await BaseTimelock.deploy();
  await timelock.waitForDeployment();
  
  console.log("✅ BaseTimelock deployed to:", await timelock.getAddress());
  
  const addresses = JSON.parse(fs.readFileSync("deploymentAddresses.json", "utf8"));
  addresses.BaseTimelock = await timelock.getAddress();
  fs.writeFileSync("deploymentAddresses.json", JSON.stringify(addresses, null, 2));
  console.log("✅ Updated deploymentAddresses.json with BaseTimelock");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
