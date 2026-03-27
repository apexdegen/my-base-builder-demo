const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const registry = await hre.ethers.getContractAt("TokenBoundRegistry", "0x0000000000000000000000000000000000000000"); // ← placeholder

  const implementation = "0x0000000000000000000000000000000000000000"; // ← TBA implementation address later
  const account = await registry.createAccount(implementation, hre.network.config.chainId, "0x0000000000000000000000000000000000000000", 1, 0);
  console.log("Token-Bound Account created at:", account);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
