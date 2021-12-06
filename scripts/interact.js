const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers } = require("hardhat");
const contract = require("../artifacts/contracts/freedom.sol/freedom.json");

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="ropsten",API_KEY);

// signer - you (requires paying gas)
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance (tells script we are interacting at contract address)
const freedomContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main(){
	const message = await freedomContract.message();
	console.log("\n\nThe message is: "+ message);

	console.log("\n\nupdating the message..");
	const tx = await freedomContract.update("This is my 1st Contract");
	await tx.wait();

	const newMessage = await freedomContract.message();
	console.log("\n\nThe new message is: "+ newMessage);
	// contract.update("")

}

main()
	.then(() => process.exit())
	.catch(error => {
		console.error(error);
		process.exit(1);
	});