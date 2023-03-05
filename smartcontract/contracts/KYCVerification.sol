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

    modifier onlyWhitelisted(Signature calldata signature) {
        require(isKYCApproved(signature));
        _;
    }

    function isKYCApproved(
        Signature calldata _signature
    ) internal view returns (bool) {
        address whitelistedAddress = sliceAddress(_signature.dataframe, 0);
        bytes32 hash = keccak256(_signature.dataframe);
        address recoverdSigner = ecrecover(
            hash,
            _signature.v,
            _signature.r,
            _signature.s
        );

        require(whitelistedAddress == msg.sender);
        require(recoverdSigner == owner());
        return true;
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
