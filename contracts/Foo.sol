// SPDX-License-Identifier: WTFPL
pragma solidity 0.8.1;


contract Foo {
    uint256 public bar;

    constructor(uint256 _bar) {
        bar = _bar;
    }

    function setBar(uint256 _bar) external {
        bar = _bar;
    }
}
