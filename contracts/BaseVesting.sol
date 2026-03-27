// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract BaseVesting {
    IERC20 public token;
    uint256 public totalVested;
    mapping(address => uint256) public vestedAmount;

    constructor(address _token) {
        token = IERC20(_token);
    }

    function vest(uint256 amount) external {
        token.transferFrom(msg.sender, address(this), amount);
        vestedAmount[msg.sender] += amount;
        totalVested += amount;
    }

    function claim() external {
        uint256 amount = vestedAmount[msg.sender];
        require(amount > 0, "Nothing to claim");
        vestedAmount[msg.sender] = 0;
        token.transfer(msg.sender, amount);
    }
}
