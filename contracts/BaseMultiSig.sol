// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BaseMultiSig {
    address[] public owners;
    uint256 public required;

    constructor(address[] memory _owners, uint256 _required) {
        owners = _owners;
        required = _required;
    }

    function isOwner(address addr) public view returns (bool) {
        for (uint i = 0; i < owners.length; i++) {
            if (owners[i] == addr) return true;
        }
        return false;
    }
}
