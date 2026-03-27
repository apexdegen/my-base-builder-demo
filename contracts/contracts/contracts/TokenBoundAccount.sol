// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract TokenBoundAccount {
    address public owner;
    address public tokenContract;
    uint256 public tokenId;

    constructor(address _tokenContract, uint256 _tokenId) {
        tokenContract = _tokenContract;
        tokenId = _tokenId;
        owner = IERC721(_tokenContract).ownerOf(_tokenId);
    }

    function execute(address to, uint256 value, bytes calldata data) external returns (bytes memory) {
        require(msg.sender == owner, "Only owner");
        (bool success, bytes memory result) = to.call{value: value}(data);
        require(success, "Call failed");
        return result;
    }
}
