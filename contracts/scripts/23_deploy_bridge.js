const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  const BaseBridge = await hre.ethers.getContractFactory("BaseBridge");
  const bridge = await BaseBridge.deploy("0x0000000000000000000000000000000000000000"); // replace with BaseToken later
  await bridge.waitForDeployment();
  
  console.log("✅ BaseBridge deployed to:", await bridge.getAddress());
  
  const addresses = JSON.parse(fs.readFileSync("deploymentAddresses.json", "utf8"));
  addresses.BaseBridge = await bridge.getAddress();
  fs.writeFileSync("deploymentAddresses.json", JSON.stringify(addresses, null, 2));
  console.log("✅ Updated deploymentAddresses.json with BaseBridge");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
