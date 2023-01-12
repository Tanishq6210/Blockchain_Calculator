//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.6;

contract calculator {
    int num1;
    int num2;

    function set(int _num1, int _num2) public {
        num1 = _num1;
        num2 = _num2;
    }

    function get(string memory op) public view returns(int) {
        int ans = 0;

        if(keccak256(abi.encodePacked(op)) == keccak256(abi.encodePacked("+"))) {
            ans = num1 + num2;    
        } else if(keccak256(abi.encodePacked(op)) == keccak256(abi.encodePacked("-"))) {
            ans = num1 - num2;
        } else if(keccak256(abi.encodePacked(op)) == keccak256(abi.encodePacked("*"))) {
            ans = num1 * num2;
        } else {
            ans = num1 / num2;
        }

        return ans;
    }
}