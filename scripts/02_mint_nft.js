const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const nft = await hre.ethers.getContractAt("MyNFT", "0x0000000000000000000000000000000000000000"); // ← we will replace this later with real address

  const tx = await nft.mint(deployer.address);
  await tx.wait();
  console.log("NFT minted to:", deployer.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
