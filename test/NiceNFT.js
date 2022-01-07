const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("Mint NFT Contract", function () {
  let NiceNFT;
  let niceNFT;
  let owner;

  const TOKEN_URI = "EXAMPLE_TOKEN_URI";

  beforeEach(async function () {
    NiceNFT = await ethers.getContractFactory("NiceNFT");

    [owner] = await ethers.getSigners();
    niceNFT = await NiceNFT.deploy();
  });

  describe("Deployment", function () {
    it("Should have the correct owner", async function () {
      expect(await niceNFT.owner()).to.equal(owner.address);
    });

    it("Should have the correct balance after minting", async function () {
      const initialBalance = await niceNFT.balanceOf(owner.address);
      expect(initialBalance.toString()).to.equal("0");

      await niceNFT.mintNFT(owner.address, TOKEN_URI);

      const finalBalance = await niceNFT.balanceOf(owner.address);
      expect(finalBalance.toString()).to.equal("1");
    });
  });
});
