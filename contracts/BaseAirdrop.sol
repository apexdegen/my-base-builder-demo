// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BaseAirdrop {
    IERC20 public token;
    mapping(address => bool) public claimed;

    constructor(address _token) {
        token = IERC20(_token);
    }

    function claim() external {
        require(!claimed[msg.sender], "Already claimed");
        claimed[msg.sender] = true;
        token.transfer(msg.sender, 1000 * 10 ** 18); // 1000 tokens example
    }
}
