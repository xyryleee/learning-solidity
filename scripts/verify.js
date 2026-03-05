const hre = require("hardhat");

async function main() {
  const address = process.env.CONTRACT_ADDRESS;
  if (!address) {
    console.error("Set CONTRACT_ADDRESS in .env (e.g. CONTRACT_ADDRESS=0x...)");
    process.exit(1);
  }
  // AvalancheGreeter(string _greeting)
  const constructorArgs = ["Hello, Avalanche!"];
  await hre.run("verify:verify", {
    address,
    constructorArguments: constructorArgs,
  });
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
