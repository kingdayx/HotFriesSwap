const Router = artifacts.require('HotFriesRouter01')
const WETH = artifacts.require('WETH')

module.exports = async function (deployer, network) {
  let weth
  const FACTORY_ADDRESS = '0x9F36DE512830CbA726D4F8f8F3857A1A5cCDc828'

  if (network === 'mainnet') {
    weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')
  } else {
    await deployer.deploy(WETH)
    weth = await WETH.deployed()
  }
  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address)
}
