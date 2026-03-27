// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BaseStaking {
    IERC20 public stakingToken;
    mapping(address => uint256) public stakedBalances;

    constructor(address _stakingToken) {
        stakingToken = IERC20(_stakingToken);
    }

    function stake(uint256 amount) external {
        stakingToken.transferFrom(msg.sender, address(this), amount);
        stakedBalances[msg.sender] += amount;
    }

    function getStakedBalance(address user) public view returns (uint256) {
        return stakedBalances[user];
    }
}
