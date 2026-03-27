// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/Create2.sol";

contract ERC6551Registry {
    event AccountCreated(address account, address implementation, uint256 chainId, address tokenContract, uint256 tokenId, uint256 salt);

    function createAccount(
        address implementation,
        uint256 chainId,
        address tokenContract,
        uint256 tokenId,
        uint256 salt
    ) external returns (address) {
        bytes32 saltHash = keccak256(abi.encodePacked(chainId, tokenContract, tokenId, salt));
        address account = Create2.computeAddress(saltHash, keccak256(abi.encodePacked(implementation)));
        emit AccountCreated(account, implementation, chainId, tokenContract, tokenId, salt);
        return account;
    }
}
