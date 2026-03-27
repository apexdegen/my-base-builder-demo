const hre = require("hardhat");

async function main() {
  console.log("🌐 Web3 Demo Script for Base");
  console.log("This project demonstrates ERC-6551 on Base chain");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
