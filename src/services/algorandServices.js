import algosdk from 'algosdk';

// Function to create a new Algorand wallet
export function createWallet() {
  // Generate a new account
  const account = algosdk.generateAccount();

  // Get the address and private key
  const address = account.addr;
  const privateKey = account.sk;
  console.log(account)

  // Generate the mnemonic phrase for backup (seed phrase)
  const mnemonic = algosdk.secretKeyToMnemonic(privateKey);

  return { address, privateKey, mnemonic };
}
