const { expect } = require("chai");

describe("MyNFT", function () {
  it("Should mint an NFT", async function () {
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const nft = await MyNFT.deploy();
    await nft.waitForDeployment();

    await nft.mint(await ethers.provider.getSigner(0).getAddress());
    expect(await nft.ownerOf(0)).to.equal(await ethers.provider.getSigner(0).getAddress());
  });
});
