// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BaseTimelock {
    uint256 public delay = 1 days;
    mapping(bytes32 => uint256) public timestamps;

    function queue(bytes32 id) external {
        timestamps[id] = block.timestamp + delay;
    }

    function execute(bytes32 id) external {
        require(timestamps[id] != 0, "Not queued");
        require(block.timestamp >= timestamps[id], "Timelock not ready");
        timestamps[id] = 0;
        // In real use: execute the queued transaction
    }
}
