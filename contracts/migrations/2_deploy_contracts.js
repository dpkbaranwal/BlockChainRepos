var Auction = artifacts.require("../contracts/Auction.sol");

module.exports = function(deployer) {
  deployer.deploy(Auction);
};
