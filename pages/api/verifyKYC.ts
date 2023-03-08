import { NextApiRequest, NextApiResponse } from "next";
import { ethers } from "ethers";
import abi from "../../abis/KYC.json";
import contractDetails from "../../data2.json";
import Web3 from "web3";
import * as EthJS from "ethereumjs-util";

export default async function sendMessage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const privateKey = <string>process.env.PRIVATE_KEY;
  const API_TOKEN = <string>process.env.API_TOKEN;
  const web3 = new Web3();

  const contractABI = abi.abi;
  const contractAddress = contractDetails.kycAddress;
  const { userAddress, kycHash } = req.body;
  console.log(privateKey);

  var checksumAddress = web3.utils.toChecksumAddress(userAddress);
  var payload = web3.utils.sha3(checksumAddress);
  var { v, r, s } = EthJS.ecsign(
    EthJS.toBuffer(payload),
    EthJS.toBuffer("0x" + privateKey)
  );
  var rHex = EthJS.bufferToHex(r);
  var sHex = EthJS.bufferToHex(s);
  var v = Number(v);

  console.log("calling...");
  

  const signer = new ethers.Wallet(
    privateKey,
    new ethers.providers.JsonRpcProvider(
      `https://ftm.getblock.io/${API_TOKEN}/testnet/`
    )
  );
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  const tx = await contract.approveKYC(
    checksumAddress,
    v,
    rHex,
    sHex,
    kycHash,
    userAddress
  );

  const txReceipt = await tx.wait();
  console.log(txReceipt);

  res.status(200).json({
    txHash: txReceipt.transactionHash,
  });
}
