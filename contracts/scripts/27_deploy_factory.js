const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  const BaseFactory = await hre.ethers.getContractFactory("BaseFactory");
  const factory = await BaseFactory.deploy();
  await factory.waitForDeployment();
  
  console.log("✅ BaseFactory deployed to:", await factory.getAddress());
  
  const addresses = JSON.parse(fs.readFileSync("deploymentAddresses.json", "utf8"));
  addresses.BaseFactory = await factory.getAddress();
  fs.writeFileSync("deploymentAddresses.json", JSON.stringify(addresses, null, 2));
  console.log("✅ Updated deploymentAddresses.json with BaseFactory");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
