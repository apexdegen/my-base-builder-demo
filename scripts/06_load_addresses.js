const fs = require("fs");
const hre = require("hardhat");

async function main() {
  const addresses = JSON.parse(fs.readFileSync("deploymentAddresses.json.example", "utf8"));
  console.log("Loaded addresses:", addresses);
  // In next step we will use these in real scripts
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
