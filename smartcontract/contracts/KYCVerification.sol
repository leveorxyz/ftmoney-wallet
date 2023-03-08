// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/access/Ownable.sol";

contract KYCVerification is Ownable {


    mapping (address => string) kycProofs;


    function approveKYC(
        bytes dataframe, uint8 v, bytes32 r, bytes32 s,
        string kycHash
    ) internal view  {
        // TODO: Verify from the cellRegistry contract whitelistaddress exist
        address whitelistedAddress = sliceAddress(_signature.dataframe, 0);
        bytes32 hash = keccak256(_signature.dataframe);
        address recoverdSigner = ecrecover(
            hash,
            v,
            r,
            s
        );
        require(recoverdSigner == whitelistedAddress);
        kycProofs[recoverdSigner] = kycHash;
    }

    function sliceAddress(
        bytes calldata b,
        uint256 offset
    ) private pure returns (address) {
        bytes32 out;
        for (uint256 i = 0; i < 20; i++) {
            out |= bytes32(b[offset + i] & 0xFF) >> ((i + 12) * 8);
        }
        return address(uint160(uint256(out)));
    }
}
