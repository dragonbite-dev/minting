const ERC20 = artifacts.require('ERC20');
const TokenVestingFactory = artifacts.require('TokenVestingFactory');

module.exports = function (deployer) {
  deployer.deploy(ERC20, 'Test', 'TEST', '500000000000000000000000000');
  deployer.deploy(TokenVestingFactory);
};
