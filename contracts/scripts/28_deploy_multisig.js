const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  const BaseMultiSig = await hre.ethers.getContractFactory("BaseMultiSig");
  const multisig = await BaseMultiSig.deploy([deployer.address], 1); // 1-of-1 for demo
  await multisig.waitForDeployment();
  
  console.log("✅ BaseMultiSig deployed to:", await multisig.getAddress());
  
  const addresses = JSON.parse(fs.readFileSync("deploymentAddresses.json", "utf8"));
  addresses.BaseMultiSig = await multisig.getAddress();
  fs.writeFileSync("deploymentAddresses.json", JSON.stringify(addresses, null, 2));
  console.log("✅ Updated deploymentAddresses.json with BaseMultiSig");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
