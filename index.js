const Wallet = require("ethers").Wallet;
const Mnemonic = require("bitcore-mnemonic");

// let wallet;
// let mnemonic;
// let privKey;
function generateMnemonic() {
  const words = new Mnemonic(Mnemonic.Words.ENGLISH);
  const mnemonic = words.toString();
  // privKey = words.toHDPrivateKey();
  return mnemonic;
}

function createWallet() {
  const mnemonic = generateMnemonic();
  walletMnemonic = Wallet.fromMnemonic(mnemonic);
  // wallet = new Wallet(walletMnemonic.privateKey);
  return walletMnemonic.address;
}

console.log("wallet address:", createWallet());