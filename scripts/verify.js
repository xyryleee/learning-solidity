const fs = require("fs");
const path = require("path");

const hre = require("hardhat");

async function main() {
  const networkName = hre.network.name;
  const deploymentsDir = path.join(__dirname, "..", "deployments");
  const deployedFilePath = path.join(deploymentsDir, `${networkName}.json`);

  const argv = process.argv.slice(2);
  const getArgValue = (flag) => {
    const idx = argv.findIndex((x) => x === flag);
    if (idx !== -1 && argv[idx + 1]) return argv[idx + 1];
    const eq = argv.find((x) => x.startsWith(`${flag}=`));
    if (eq) return eq.split("=").slice(1).join("=");
    return undefined;
  };

  const contractName = process.env.CONTRACT_NAME || getArgValue("--contract");

  // Optional: verify a specific address directly.
  const contractAddress = process.env.CONTRACT_ADDRESS || getArgValue("--address");

  if (contractAddress && !contractName) {
    // Best effort: locate constructor args in deployments file by address.
    if (!fs.existsSync(deployedFilePath)) {
      console.error(
        `Missing deployments file: ${deployedFilePath}\n` +
          "Run deploy first or set CONTRACT_NAME so we know constructor args."
      );
      process.exit(1);
    }
    const deployment = JSON.parse(fs.readFileSync(deployedFilePath, "utf8"));
    const contracts = deployment.contracts || {};

    for (const [name, info] of Object.entries(contracts)) {
      if (info && info.address && info.address.toLowerCase() === contractAddress.toLowerCase()) {
        console.log(`Verifying ${name}:`, contractAddress);
        await hre.run("verify:verify", {
          address: info.address,
          constructorArguments: info.constructorArgs || [],
        });
        return;
      }
    }

    console.error(
      "Contract address not found in deployments file.\n" +
        "Set CONTRACT_NAME or run deploy so the constructor args are saved."
    );
    process.exit(1);
  }

  if (contractAddress && contractName) {
    // Backwards compatible convenience:
    // - AvalancheGreeter can be verified without relying on deployments json.
    if (contractName === "AvalancheGreeter") {
      const greeting = process.env.GREETING || "Hello, Avalanche!";
      console.log("Verifying AvalancheGreeter:", contractAddress);
      await hre.run("verify:verify", {
        address: contractAddress,
        constructorArguments: [greeting],
      });
      return;
    }

    // For other contracts, use constructor args from deployments json.
    if (!fs.existsSync(deployedFilePath)) {
      console.error(
        `Missing deployments file: ${deployedFilePath}\n` +
          "Run deploy first so we can store constructor args."
      );
      process.exit(1);
    }

    const deployment = JSON.parse(fs.readFileSync(deployedFilePath, "utf8"));
    const info = (deployment.contracts || {})[contractName];
    if (!info || !info.constructorArgs) {
      console.error(
        `No deployment entry found for "${contractName}" in ${deployedFilePath}. ` +
          "Run deploy first."
      );
      process.exit(1);
    }

    console.log(`Verifying ${contractName}:`, contractAddress);
    await hre.run("verify:verify", {
      address: contractAddress,
      constructorArguments: info.constructorArgs || [],
    });
    return;
  }

  if (!fs.existsSync(deployedFilePath)) {
    console.error(
      `Missing deployments file: ${deployedFilePath}\n` +
        "Run deploy first (e.g. `npx hardhat run scripts/deploy.js --network fuji`) " +
      "or set CONTRACT_NAME/CONTRACT_ADDRESS."
    );
    process.exit(1);
  }

  const deployment = JSON.parse(fs.readFileSync(deployedFilePath, "utf8"));

  const contracts = deployment.contracts || {};
  const entries = Object.entries(contracts);
  if (entries.length === 0) {
    console.error("No contracts found in deployment file.");
    process.exit(1);
  }

  const toVerify = contractName
    ? entries.filter(([name]) => name === contractName)
    : entries;

  if (toVerify.length === 0) {
    console.error(
      `No deployment found for contract "${contractName}".\n` +
        "Deploy it first (so we can store constructor args), then run verify again."
    );
    process.exit(1);
  }

  console.log(`Verifying ${toVerify.length} contract(s) on network: ${networkName}`);

  for (const [name, info] of toVerify) {
    console.log(`- ${name}: ${info.address}`);
    await hre.run("verify:verify", {
      address: info.address,
      constructorArguments: info.constructorArgs || [],
    });
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
