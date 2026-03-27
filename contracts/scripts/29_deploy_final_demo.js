const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  const BaseFinalDemo = await hre.ethers.getContractFactory("BaseFinalDemo");
  const finalDemo = await BaseFinalDemo.deploy();
  await finalDemo.waitForDeployment();
  
  console.log("🎉 BaseFinalDemo deployed to:", await finalDemo.getAddress());
  console.log("✅ 100+ commits milestone reached for Base Guild!");
  
  const addresses = JSON.parse(fs.readFileSync("deploymentAddresses.json", "utf8"));
  addresses.BaseFinalDemo = await finalDemo.getAddress();
  fs.writeFileSync("deploymentAddresses.json", JSON.stringify(addresses, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
