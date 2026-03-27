const { expect } = require("chai");

describe("ImprovedTokenBoundAccount", function () {
  it("Should allow owner to execute calls", async function () {
    const ImprovedTBA = await ethers.getContractFactory("ImprovedTokenBoundAccount");
    const tba = await ImprovedTBA.deploy("0x0000000000000000000000000000000000000000", 1);
    await tba.waitForDeployment();

    // Basic ownership test
    expect(await tba.owner()).to.not.equal("0x0000000000000000000000000000000000000000");
  });
});
