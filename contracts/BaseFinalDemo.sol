// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BaseFinalDemo {
    string public message = "🎉 100+ commits achieved for Base Guild!";

    function celebrate() public pure returns (string memory) {
        return "Congrats! You unlocked GitHub: 100+ Commits role on Base Guild!";
    }
}
