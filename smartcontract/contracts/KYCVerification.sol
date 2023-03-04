// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";

contract KYCVerification is Ownable {

    struct Signature {
        uint8 v;
        bytes32 r;
        bytes32 s;
        bytes dataframe;
    }

}
