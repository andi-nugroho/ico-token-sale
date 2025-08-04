const hre = require("hardhat")

const tokens = (nToken) => {
    return ethers.utils.parseUnits(nToken.toString(), "wei");
}

async function main () {
    // ZXT Token Address 0x1DAdaF3bc9Ca303D71898D950bfea45A0d835d17
    // DEPLOY TOKEN SALE CONTRACT;
    const _tokenPrice = tokens(100000000000000)

    const TokenSale = await hre.ethers.getContractFactory("TokenSale");
    const tokenSale = await TokenSale.deploy("0x1DAdaF3bc9Ca303D71898D950bfea45A0d835d17", _tokenPrice);

    await tokenSale.deployed()
    console.log(`TokenSale: ${tokenSale.address}`)
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})