// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract BaseFactory {
    uint256 public totalContracts;

    event ContractDeployed(address newContract);

    function deployNewNFT(string memory name, string memory symbol) external returns (address) {
        // Simple inline deployment example
        totalContracts++;
        emit ContractDeployed(address(this)); // placeholder for real deployment
        return address(this);
    }
}
