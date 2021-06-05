const ERC20 = artifacts.require('ERC20');
const TokenVestingFactory = artifacts.require('TokenVestingFactory');

module.exports = function (deployer, _network, accounts) {
  try {
    // console.log(accounts);
    deployer.deploy(
      ERC20,
      'DragonBite',
      'BITE',
      '1000000000000000000000000000',
      { gas: 1600000 }
    );

    deployer.deploy(TokenVestingFactory)
  } catch (err) {
    console.error(err);
  }
};
