const JunkGuys = artifacts.require("JunkGuys");

module.exports = async function(deployer) {
  await deployer.deploy(JunkGuys);
};
