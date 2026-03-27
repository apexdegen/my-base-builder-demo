// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/Create2.sol";

contract TokenBoundRegistry {
    function createAccount(address implementation, uint256 chainId, address tokenContract, uint256 tokenId, uint256 salt) external returns (address) {
        bytes32 bytecodeHash = keccak256(abi.encodePacked(implementation));
        bytes32 saltHash = keccak256(abi.encodePacked(chainId, tokenContract, tokenId, salt));
        return Create2.computeAddress(saltHash, bytecodeHash);
    }
}
