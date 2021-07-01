pragma solidity =0.5.16;

import '../HotFriesERC20.sol';

contract ERC20 is HotFriesERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
