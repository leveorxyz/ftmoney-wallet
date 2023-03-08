import { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";
import abi from "../../abis/UserCellRegistryABI.json";
import contractDetails from "../../data.json";


export default async function sendMessage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const privateKey = <string>process.env.PRIVATE_KEY;
  console.log(privateKey);
  const RPC = "";
  const contractABI = abi.abi;
  const contractAddress = contractDetails.cellRegistryAddress;
  const { salt, saltHint, userCell, userAddress } = req.body;

  const signer = new ethers.Wallet(
    privateKey,
    new ethers.providers.JsonRpcProvider("https://rpc.testnet.fantom.network/")
  );
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  console.log(salt, saltHint, userCell, userAddress);
  
  const tx = await contract.registerUser(salt, saltHint, userCell, userAddress);
  console.log("done");
   
  const txReceipt = await tx.wait();
  console.log(txReceipt);

  res.status(200).json({
    "txHash": txReceipt.transactionHash,
  });
}
