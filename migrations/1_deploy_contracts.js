const SimpleAuction = artifacts.require("SimpleAuction");

module.exports = function(deployer) {
    deployer.deploy(SimpleAuction, 6000, "0x7B4C0131c985640f918698210094931705431555");
}