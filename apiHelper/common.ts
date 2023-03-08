
import Web3 from 'web3'

const RPC = "https://rpc.testnet.fantom.network/";

const web3 = new Web3(new Web3.providers.HttpProvider(RPC));

const signTransaction = async (tx: any, contract: any, contractGas = false) => {
  let account = <string>process.env.FROM_ADDRESS;
  let privateKey = <string>process.env.PRIVATE_KEY;
  console.log(contract.options.address)
  console.log(account)
  console.log(privateKey)

  const gas = await tx.estimateGas({ from: account });
  const gasPrice = await web3.eth.getGasPrice();
  const data = tx.encodeABI();
  const nonce = await web3.eth.getTransactionCount(account);

  var options = {
    data,
    gas,
    gasPrice,
    nonce,
    chainId: 4002,
    to: ""
  };

  if (contractGas) {
    options.to = contract.options.address;
  }

  const signedTx = (await web3.eth.accounts.signTransaction(options, privateKey));
  const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction as string);

  console.log(`Transaction hash: ${receipt.transactionHash}`);
  return receipt;
};

export default signTransaction;