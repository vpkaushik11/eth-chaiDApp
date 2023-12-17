# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js --network ganache # <Network name> :<localhost> for harhat network 
```

App has two part: node backend with hardhat
react frontend built with VITE

in root folder of project, make a .env file and add the following
1) GANACHE_ACC_PRIVATE_KEY -> private key of any one of the ganache accounts
2) GANACHE_URL -> URL of ganache network
3) CHAIN_ID

in the client folder, make a JSON file private.json
{
	"CONTRACT_ADDR": <Input the contract address given once we run the hardhat backend code using deploy thingy>
}

once this is done we will have the app up and running
use "npm run dev" in a terminal at client, then app is set to run