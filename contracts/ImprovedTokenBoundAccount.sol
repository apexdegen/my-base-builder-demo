// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

contract ImprovedTokenBoundAccount {
    address public owner;
    address public tokenContract;
    uint256 public tokenId;

    constructor(address _tokenContract, uint256 _tokenId) {
        tokenContract = _tokenContract;
        tokenId = _tokenId;
        owner = IERC165(_tokenContract).supportsInterface(0x80ac58cd) ? // simple owner check
            msg.sender : address(0);
    }

    function execute(address to, uint256 value, bytes calldata data) external payable returns (bytes memory) {
        require(msg.sender == owner, "Only owner can execute");
        (bool success, bytes memory result) = to.call{value: value}(data);
        require(success, "Call failed");
        return result;
    }

    receive() external payable {}
}
