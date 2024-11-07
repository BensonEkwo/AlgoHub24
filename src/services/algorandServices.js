import algosdk from 'algosdk';

const algodClient = new algosdk.Algodv2("", "https://testnet-api.algonode.cloud", "")

// Function to create a new Algorand wallet
export  function createWallet() {
	// Generate a new account
	
	const account = algosdk.generateAccount();

	// Get the address and private key
	const address = account.addr;
	const privateKey = account.sk;
	console.log(account)

	// Generate the mnemonic phrase for backup (seed phrase)
	const mnemonic = algosdk.secretKeyToMnemonic(privateKey);
	localStorage.setItem("user_mnemonic", mnemonic);
	localStorage.setItem("user_address", address);
	localStorage.setItem("user_privateKey", privateKey);

	return { address, privateKey, mnemonic };
}

async function getUserDetails() {
	let acctInfo = await algodClient.accountInformation(localStorage.getItem("user_address")).do();
	return acctInfo.amount;
}

localStorage.setItem("userAccountBallance", getUserDetails());

// function to make transactions
export async function makeTransaction(sender, receiver, amount, note = "Transaction from") {
	console.log(await algodClient.ready().do())
	let accInfo = await algodClient.accountInformation(sender).do();
	console.assert(accInfo.amount >= amount, "Insufficient funds")

	if (note === "Transaction from") {
		note = "Transaction from " + sender.addr + "to " + receiver.addr;
	}

	const suggetedParams = await algodClient.getTransactionParams().do;
	const paymentTxn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
		from: sender.addr,
		suggestedParams,
		to: receiver.addr,
		amount,
		note: new Uint8Array(Buffer(note))
	});

	const signedTxn = paymentTxn.signTxn(sender.privateKey)
	const { txnId } = await algodClient.sendRawTransaction(signedTxn).do();
	const result = await algosdk.waitForConfirmation(algodClient, txnId, 4);
	console.log(result);
}
