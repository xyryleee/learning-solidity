const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying with account:", deployer.address);
  console.log("Account balance:", (await hre.ethers.provider.getBalance(deployer.address)).toString());

  const AvalancheGreeter = await hre.ethers.getContractFactory("AvalancheGreeter");
  const greeter = await AvalancheGreeter.deploy("Hello, Avalanche!");

  await greeter.waitForDeployment();
  const address = await greeter.getAddress();

  console.log("AvalancheGreeter deployed to:", address);
  console.log("Network:", hre.network.name);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
