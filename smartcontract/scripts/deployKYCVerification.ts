import { ethers } from "hardhat";
import { KYCVerification } from "../typechain-types";

async function main() {

    const KYCVerificationFactory = await ethers.getContractFactory("KYCVerification");
    const kYCVerification: KYCVerification = await KYCVerificationFactory.deploy();

    console.log(`KYCVerification deployed to ${kYCVerification.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});