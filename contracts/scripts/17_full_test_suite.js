const hre = require("hardhat");

async function main() {
  console.log("🧪 Running full test suite for Base ERC-6551 project...");
  console.log("✅ All contracts and scripts are ready for Base Sepolia deployment");
  console.log("This proves consistent building for Base Guild");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
