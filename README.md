# Avalanche Smart Contract Starter

Solidity starter for deploying on **Avalanche C-Chain**, with a step-by-step learning path.

---

## Join the workshop (optional)

Want to be listed as a participant? Get a copy of this repo on your machine and add yourself to the roster.

- **Get the repo:** Install [Git](https://git-scm.com/) (and [GitHub Desktop](https://desktop.github.com/) if you like), then click **Fork** on this repo and clone your fork:

  `git clone https://github.com/YOUR_USERNAME/avalanche-smart-contract-starter.git`

- **Add yourself:** In **Workshop participants** below, add one line with your name, GitHub handle, and what you do (e.g. developer, student). Save `README.md`.

- **Send it back:** From the repo root run:

  `git add . && git commit -m "Add myself to workshop participants" && git push origin main`

  Then open a Pull Request into this repo. Use a title like: **Add [Your Name] to participants**.

---

## Workshop participants

| Name | GitHub | Role / occupation |
|------|--------|--------------------|
|  |  |  |

---

## Submit your exercises

Complete the exercises in the **`exercises/`** folder (Token, Staking, etc.) and submit your work via Pull Request.

![Fork and Pull Request](images/Screenshot%202026-03-05%20at%2010.18.51.png)

**How to submit:**

1. Fork this repo and clone your fork.
2. Solve the exercises in the `exercises/` subfolders (token, staking, nft, voting, escrow, multisig, auction, timelock). Each contract has TODOs only—you write the code.
3. Commit and push to your fork.
4. Open a **Pull Request** from your fork to this repo. Use a title like: **Your Name | Exercise submission (Token, Staking)**.

---

## Exercise folders

| Folder | Topic | Description |
|--------|--------|-------------|
| [exercises/token/](exercises/token/) | Token | ERC20-style token: balanceOf, transfer |
| [exercises/staking/](exercises/staking/) | Staking | Stake AVAX and withdraw later |
| [exercises/nft/](exercises/nft/) | NFT | Mint and transfer (ERC721-style) |
| [exercises/voting/](exercises/voting/) | Voting | On-chain proposals and voting |
| [exercises/escrow/](exercises/escrow/) | Escrow | Hold funds; release to beneficiary |
| [exercises/multisig/](exercises/multisig/) | Multisig | N-of-M owners approve then execute |
| [exercises/auction/](exercises/auction/) | Auction | Highest bid wins; owner ends auction |
| [exercises/timelock/](exercises/timelock/) | Timelock | Withdraw only after a delay |

Each folder has a `README.md` (requirements) and a `.sol` file with **TODOs only**—no solution code. Implement the logic, deploy to Fuji, and share your contract address in the PR.

---

## Learning path (easy access)

| # | Topic | Path |
|---|--------|------|
| 1 | [Intro](contracts/learning/1-Intro/) | `contracts/learning/1-Intro/` |
| 2 | [State Variables](contracts/learning/2-State-Variables/) | `contracts/learning/2-State-Variables/` |
| 3 | [Local Variables](contracts/learning/3-Local-Variables/) | `contracts/learning/3-Local-Variables/` |
| 4 | [Function](contracts/learning/4-Function/) | `contracts/learning/4-Function/` |
| 5 | [Constructor](contracts/learning/5-Constructor/) | `contracts/learning/5-Constructor/` |
| 6 | [Data Types](contracts/learning/6-Data-Types/) | `contracts/learning/6-Data-Types/` |
| 7 | [Array](contracts/learning/7-Array/) | `contracts/learning/7-Array/` |
| 8 | [Loops](contracts/learning/8-Loops/) | `contracts/learning/8-Loops/` |
| 9 | [Conditionals](contracts/learning/9-Conditionals/) | `contracts/learning/9-Conditionals/` |
| 10 | [Struct](contracts/learning/10-Struct/) | `contracts/learning/10-Struct/` |
| 11 | [Mapping](contracts/learning/11-Mapping/) | `contracts/learning/11-Mapping/` |
| 12 | [Storage Locations](contracts/learning/12-Storage-Locations/) | `contracts/learning/12-Storage-Locations/` |
| 13 | [Global Variables](contracts/learning/13-Global-Variables/) | `contracts/learning/13-Global-Variables/` |
| 14 | [Contract Balance](contracts/learning/14-Contract-Balance/) | `contracts/learning/14-Contract-Balance/` |
| 15 | [Visibility](contracts/learning/15-Visibility/) | `contracts/learning/15-Visibility/` |
| 16 | [Exercises](contracts/learning/16-Exercises/) | `contracts/learning/16-Exercises/` |

Each folder has a `.sol` file you can open, edit, and compile.

---

## Quick start

```bash
pnpm install
cp .env.example .env   # then add your PRIVATE_KEY
pnpm run compile
pnpm run test
```

**Get testnet AVAX (Fuji):** Use the [Fuji faucet](https://faucet.avax.network/) so your deployer wallet has AVAX for gas.

**Optional: deploy locally (Hardhat network):**

```bash
export CONTRACT_NAME=SimpleStorage
pnpm exec hardhat run scripts/deploy.js --network hardhat
```

This writes `deployments/hardhat.json`.

## Contract names (set `CONTRACT_NAME`)

### Learning (1-15)
```bash
# 1-Intro
export CONTRACT_NAME=Intro
pnpm exec hardhat run scripts/deploy.js --network hardhat

# 2-State-Variables
export CONTRACT_NAME=StateVariables
pnpm exec hardhat run scripts/deploy.js --network hardhat

# 3-Local-Variables
export CONTRACT_NAME=LocalVariables
pnpm exec hardhat run scripts/deploy.js --network hardhat

# 4-Function
export CONTRACT_NAME=Functions
pnpm exec hardhat run scripts/deploy.js --network hardhat

# 5-Constructor
export CONTRACT_NAME=Constructor
pnpm exec hardhat run scripts/deploy.js --network hardhat

# 6-Data-Types
export CONTRACT_NAME=DataTypes
pnpm exec hardhat run scripts/deploy.js --network hardhat

# 7-Array
export CONTRACT_NAME=Array
pnpm exec hardhat run scripts/deploy.js --network hardhat

# 8-Loops
export CONTRACT_NAME=Loops
pnpm exec hardhat run scripts/deploy.js --network hardhat

# 9-Conditionals
export CONTRACT_NAME=Conditionals
pnpm exec hardhat run scripts/deploy.js --network hardhat

# 10-Struct
export CONTRACT_NAME=Struct
pnpm exec hardhat run scripts/deploy.js --network hardhat

# 11-Mapping
export CONTRACT_NAME=Mapping
pnpm exec hardhat run scripts/deploy.js --network hardhat

# 12-Storage-Locations
export CONTRACT_NAME=StorageLocations
pnpm exec hardhat run scripts/deploy.js --network hardhat

# 13-Global-Variables
export CONTRACT_NAME=GlobalVariables
pnpm exec hardhat run scripts/deploy.js --network hardhat

# 14-Contract-Balance
export CONTRACT_NAME=ContractBalance
pnpm exec hardhat run scripts/deploy.js --network hardhat

# 15-Visibility
export CONTRACT_NAME=Visibility
pnpm exec hardhat run scripts/deploy.js --network hardhat
```

### Starter contracts
```bash
export CONTRACT_NAME=SimpleStorage
pnpm exec hardhat run scripts/deploy.js --network hardhat

export CONTRACT_NAME=AvalancheGreeter
pnpm exec hardhat run scripts/deploy.js --network hardhat
```

**Deploy one contract to Avalanche Fuji (testnet):**

```bash
export CONTRACT_NAME=SimpleStorage
pnpm run deploy:fuji
```

If you want `AvalancheGreeter`:

```bash
export CONTRACT_NAME=AvalancheGreeter
export GREETING="Hello, Avalanche!"
pnpm run deploy:fuji
```

**Deploy one contract to Avalanche mainnet:**

```bash
export CONTRACT_NAME=SimpleStorage
pnpm run deploy:mainnet
```

**Verify on Snowtrace (optional):**

```bash
export CONTRACT_NAME=SimpleStorage
pnpm run verify:fuji
```

---

## Project layout

| Path | Description |
|------|-------------|
| `contracts/` | Solidity sources (`AvalancheGreeter`, `SimpleStorage`) |
| `exercises/` | Submission folders: `token/`, `staking/`, `nft/`, `voting/`, `escrow/`, `multisig/`, `auction/`, `timelock/` (TODOs only) |
| `learning/` | Numbered Solidity lessons (1-Intro … 16-Exercises) |
| `scripts/deploy.js` | Deploys the contract specified by `CONTRACT_NAME` |
| `scripts/verify.js` | Verifies deployed contract on Snowtrace |
| `test/` | Unit tests for main contracts |
| `.env.example` | Env vars template (copy to `.env`) |
| `hardhat.config.js` | Networks: `fuji` (43113), `avalanche` (43114) |

---
## Testing your deployed contracts

### Option 1: Unit tests (recommended)
This tests the contract logic in an isolated local environment.

```bash
pnpm run test
```

Note: in this repo there are currently unit tests for:
- `SimpleStorage` (`test/SimpleStorage.test.js`)
- `AvalancheGreeter` (`test/AvalancheGreeter.test.js`)

### Option 2: Interact with the deployed contract locally (persistent node)
When you deploy with `--network hardhat`, it uses an in-memory chain. For persistent testing across terminals, do this instead:

1. Start a persistent local chain (Terminal 1):
```bash
pnpm exec hardhat node
```

2. In a new terminal (Terminal 2), deploy the specific contract you want to test:
```bash
export CONTRACT_NAME=SimpleStorage
pnpm exec hardhat run scripts/deploy.js --network localhost
```

3. Open the Hardhat console (Terminal 3):
```bash
pnpm exec hardhat console --network localhost
```

4. Attach to the contract using the address saved in:
`deployments/localhost.json`

Example (SimpleStorage):
```js
const c = await ethers.getContractAt("SimpleStorage", "0xYOUR_ADDRESS_HERE");
// call contract functions, e.g.:
await c.get();
await c.set(123);
await c.get();
```

If you’re not sure which functions exist on the contract, run:
```js
c.interface.fragments
  .filter((f) => f.type === "function")
  .map((f) => f.name);
```
