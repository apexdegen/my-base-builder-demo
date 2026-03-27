const hre = require("hardhat");

async function main() {
  const account = await hre.ethers.getContractAt("TokenBoundAccount", "0x0000000000000000000000000000000000000000"); // ← placeholder

  const tx = await account.execute(
    "0x0000000000000000000000000000000000000000", // example target
    0,
    "0x" // example calldata
  );
  await tx.wait();
  console.log("Executed call from Token-Bound Account");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
