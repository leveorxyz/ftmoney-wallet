import { ethers } from "hardhat";
import { UserCellRegistry } from "../typechain-types";

async function main() {

    const UserCellRegistryFactory = await ethers.getContractFactory("UserCellRegistry");
    const userCellRegistry: UserCellRegistry = await UserCellRegistryFactory.deploy();

    console.log(`UserCellRegistry deployed to ${userCellRegistry.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});