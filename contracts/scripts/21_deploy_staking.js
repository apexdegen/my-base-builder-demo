const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  const BaseStaking = await hre.ethers.getContractFactory("BaseStaking");
  const staking = await BaseStaking.deploy("0x0000000000000000000000000000000000000000"); // will replace with BaseToken address later
  await staking.waitForDeployment();
  
  console.log("✅ BaseStaking deployed to:", await staking.getAddress());
  
  const addresses = JSON.parse(fs.readFileSync("deploymentAddresses.json", "utf8"));
  addresses.BaseStaking = await staking.getAddress();
  fs.writeFileSync("deploymentAddresses.json", JSON.stringify(addresses, null, 2));
  console.log("✅ Updated deploymentAddresses.json with BaseStaking");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
