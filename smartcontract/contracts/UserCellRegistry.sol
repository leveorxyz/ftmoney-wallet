// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";

contract UserCellRegistry is Ownable {
    struct Record {
        address userAddress;
        bool initialized;
        string saltHint;
    }

    mapping(bytes32 => Record) _records;
    mapping(uint256 => string) _saltHint;

}
