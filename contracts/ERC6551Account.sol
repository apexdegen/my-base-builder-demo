// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

contract ERC6551Account {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function execute(address to, uint256 value, bytes calldata data) external payable returns (bytes memory) {
        require(msg.sender == owner, "Only owner");
        (bool success, bytes memory result) = to.call{value: value}(data);
        require(success, "Call failed");
        return result;
    }

    function supportsInterface(bytes4 interfaceId) public pure returns (bool) {
        return interfaceId == 0x01ffc9a7 || interfaceId == 0x36372b07;
    }
}
