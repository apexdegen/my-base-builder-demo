// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/governance/Governor.sol";

contract BaseGovernor is Governor {
    constructor() Governor("BaseGuildGovernor") {}

    function votingDelay() public pure override returns (uint256) {
        return 1;
    }

    function votingPeriod() public pure override returns (uint256) {
        return 100;
    }

    function proposalThreshold() public pure override returns (uint256) {
        return 0;
    }
}
