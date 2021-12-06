async function main(){
	// the ethers comes from the hardhat config plugin
	const freedom = await ethers.getContractFactory("freedom");

	const freedom_1 = await freedom.deploy("Live Free Or Die!");
	console.log("Contract deployed to address: ", freedom_1.address);

}

main()
	.then(() => process.exit())
	.catch(error => {
		console.error(error);
		process.exit(1);
	});