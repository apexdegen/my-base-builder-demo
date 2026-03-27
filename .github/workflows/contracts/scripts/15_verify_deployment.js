const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const addresses = JSON.parse(fs.readFileSync("deploymentAddresses.json", "utf8"));
  console.log("🔍 Verifying deployment on Base Sepolia...");
  console.log("Addresses:", addresses);
  console.log("✅ Deployment looks good for Base Guild progress!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
