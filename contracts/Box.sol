// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Box is Initializable {
  uint256 private value;

  event ValueChanged(uint256 newValue);

  function initialize(uint256 initialValue) public initializer {
    value = initialValue;
  }

  function store(uint256 newValue) public {
    value = newValue;
  }

  function retrieve() public view returns (uint256) {
    return value;
  }

  function version() public virtual pure returns (string memory) {
    return "1.0.0";
  }
}