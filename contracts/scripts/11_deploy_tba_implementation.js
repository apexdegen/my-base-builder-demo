const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  const ImprovedTBA = await hre.ethers.getContractFactory("ImprovedTokenBoundAccount");
  const tbaImpl = await ImprovedTBA.deploy();
  await tbaImpl.waitForDeployment();
  console.log("✅ Improved TBA Implementation deployed to:", await tbaImpl.getAddress());

  const addresses = JSON.parse(fs.readFileSync("deploymentAddresses.json", "utf8"));
  addresses.ImprovedTBA = await tbaImpl.getAddress();
  fs.writeFileSync("deploymentAddresses.json", JSON.stringify(addresses, null, 2));
  console.log("✅ Updated deploymentAddresses.json with TBA impl");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
