async function deploy() {
  const NiceNFT = await ethers.getContractFactory("NiceNFT");
  const niceNFT = await NiceNFT.deploy();
  console.log("Contract deployed to address:", niceNFT.address);
}

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
