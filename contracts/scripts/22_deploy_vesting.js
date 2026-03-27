const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  const BaseVesting = await hre.ethers.getContractFactory("BaseVesting");
  const vesting = await BaseVesting.deploy("0x0000000000000000000000000000000000000000"); // replace with BaseToken later
  await vesting.waitForDeployment();
  
  console.log("✅ BaseVesting deployed to:", await vesting.getAddress());
  
  const addresses = JSON.parse(fs.readFileSync("deploymentAddresses.json", "utf8"));
  addresses.BaseVesting = await vesting.getAddress();
  fs.writeFileSync("deploymentAddresses.json", JSON.stringify(addresses, null, 2));
  console.log("✅ Updated deploymentAddresses.json with BaseVesting");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
