const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  const BaseAirdrop = await hre.ethers.getContractFactory("BaseAirdrop");
  const airdrop = await BaseAirdrop.deploy("0x0000000000000000000000000000000000000000"); // replace with BaseToken later
  await airdrop.waitForDeployment();
  
  console.log("✅ BaseAirdrop deployed to:", await airdrop.getAddress());
  
  const addresses = JSON.parse(fs.readFileSync("deploymentAddresses.json", "utf8"));
  addresses.BaseAirdrop = await airdrop.getAddress();
  fs.writeFileSync("deploymentAddresses.json", JSON.stringify(addresses, null, 2));
  console.log("✅ Updated deploymentAddresses.json with BaseAirdrop");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
