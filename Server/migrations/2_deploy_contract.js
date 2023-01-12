const calc = artifacts.require("calculator");
module.exports = function(deployer) {
    deployer.deploy(calc);
};