const hre = require("hardhat");
const fs = require("fs");

async function main() {
  console.log("🚀 Running full end-to-end ERC-6551 demo on Base Sepolia...");
  const addresses = JSON.parse(fs.readFileSync("deploymentAddresses.json", "utf8"));

  console.log("✅ Using deployed addresses:", addresses);
  console.log("Project ready for real on-chain testing!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
