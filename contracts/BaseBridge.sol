// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BaseBridge {
    IERC20 public token;

    constructor(address _token) {
        token = IERC20(_token);
    }

    function bridge(uint256 amount) external {
        token.transferFrom(msg.sender, address(this), amount);
        // In a real bridge this would emit a cross-chain event
        emit Bridged(msg.sender, amount);
    }

    event Bridged(address indexed user, uint256 amount);
}
