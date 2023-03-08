import { ethers } from "hardhat";
import { KYCVerification } from "../typechain-types";
import { writeFile } from "fs/promises";


async function main() {

    const KYCVerificationFactory = await ethers.getContractFactory("KYCVerification");
    const kYCVerification: KYCVerification = await KYCVerificationFactory.deploy();

    const kycDeployedAddress = kYCVerification.address;
    console.log(`KYCVerification deployed to ${kycDeployedAddress}`);
    await writeFile(
        "../data2.json",
        JSON.stringify({
          kycAddress: kycDeployedAddress,
          kycLink: "https://testnet.ftmscan.com/address/" + kycDeployedAddress
        }, null, 2)
      );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});