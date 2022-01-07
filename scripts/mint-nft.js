require("dotenv").config();
const { ethers } = require("hardhat");

const PUBLIC_KEY = process.env.PUBLIC_KEY;

const TOKEN_URI =
  "https://gateway.pinata.cloud/ipfs/QmNyFifBBcShzu3syohQVjpxi1QoLjZ56nWZgepmJ7RLVp";

const contract = require("../artifacts/contracts/NiceNFT.sol/NiceNFT.json");
const contractAddress = "0x82b5C2862bCFD0a6b0766d38B03BE5c538e72b81";

async function mint() {
  const myNFT = await ethers.getContractAt(contract.abi, contractAddress);
  const tx = await myNFT.mintNFT(PUBLIC_KEY, TOKEN_URI);
  const receipt = await tx.wait();
  console.log("The hash of the transaction: ", receipt.transactionHash);
}

mint()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
