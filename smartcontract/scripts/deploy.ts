import { ethers } from "hardhat";
import { UserCellRegistry } from "../typechain-types";
import { writeFile } from "fs/promises";


async function main() {

    const UserCellRegistryFactory = await ethers.getContractFactory("UserCellRegistry");
    const userCellRegistry: UserCellRegistry = await UserCellRegistryFactory.deploy();

    const deployedAddress = userCellRegistry.address;
    console.log(`UserCellRegistry deployed to ${deployedAddress}`);


    await writeFile(
        "../data.json",
        JSON.stringify({
          cellRegistryAddress: deployedAddress,
          cellRegistryLink: "https://testnet.ftmscan.com/address/" + deployedAddress
        }, null, 2)
      );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});