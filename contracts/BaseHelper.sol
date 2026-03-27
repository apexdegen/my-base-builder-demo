// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BaseHelper {
    string public constant BASE_NETWORK = "Base Sepolia";
    
    function getNetworkInfo() public pure returns (string memory) {
        return BASE_NETWORK;
    }
}
