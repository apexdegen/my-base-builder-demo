const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  const addresses = JSON.parse(fs.readFileSync("deploymentAddresses.json.example", "utf8"));

  const nft = await hre.ethers.getContractAt("MyNFT", addresses.MyNFT);
  const txMint = await nft.mint(deployer.address);
  await txMint.wait();
  console.log("NFT minted!");

  const registry = await hre.ethers.getContractAt("TokenBoundRegistry", addresses.TokenBoundRegistry);
  const implementation = "0x0000000000000000000000000000000000000000"; // TBA impl later
  const tba = await registry.createAccount(implementation, hre.network.config.chainId, addresses.MyNFT, 1, 0);
  console.log("Token-Bound Account created at:", tba);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
