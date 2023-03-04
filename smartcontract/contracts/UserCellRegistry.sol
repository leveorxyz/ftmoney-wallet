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

    struct Signature {
        uint8 v;
        bytes32 r;
        bytes32 s;
        address userAddress;
    }

    modifier isApproved(Signature calldata signature) {
        require(checkApproval(signature));
        _;
    }

    function getSaltHint(uint256 userCell) public view returns (string memory) {
        return _saltHint[userCell];
    }

    function getUserAddress(
        string calldata salt,
        uint256 userCell
    ) public view returns (bool isRegistered, address key) {
        Record memory record = _records[
            keccak256(abi.encodePacked(salt, userCell))
        ];
        if (record.initialized) {
            isRegistered = true;
            key = record.userAddress;
        }
    }

    function registerUser(
        string calldata salt,
        string calldata saltHint,
        uint256 userCell,
        address userAddress,
        Signature calldata signature
    ) public isApproved(signature) onlyOwner {
        Record storage record = _records[
            keccak256(abi.encodePacked(salt, userCell))
        ];
        record.userAddress = userAddress;
        record.initialized = true;
        _saltHint[userCell] = saltHint;
    }

    function checkApproval(
        Signature calldata _signature
    ) internal view returns (bool) {
        bytes32 hash = keccak256(abi.encodePacked(_signature.userAddress));
        address recoverdSigner = ecrecover(
            hash,
            _signature.v,
            _signature.r,
            _signature.s
        );

        require(recoverdSigner == owner());
        return true;
    }
}
