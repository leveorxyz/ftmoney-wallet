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


    function sliceAddress(
        bytes calldata b,
        uint offset
    ) private pure returns (address) {
        bytes32 out;
        for (uint i = 0; i < 20; i++) {
            out |= bytes32(b[offset + i] & 0xFF) >> ((i + 12) * 8);
        }
        return address(uint160(uint(out)));
    }
}
