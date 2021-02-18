import { ChainId, Token, WETH, Fetcher, Route, Trade, TokenAmount, TradeType, Percent } from '@uniswap/sdk'
import { getNetwork } from '@ethersproject/networks'
import { getDefaultProvider, InfuraProvider } from '@ethersproject/providers'
import search from './search'
import ERC20 from '../../contracts/erc20'
import TOKENS_DATA from '../../constants/tokens'
import Router02 from '../../contracts/uniswap'
import { fromDecimal } from '../../utils/numberFormat'

let chainId = ChainId.KOVAN
let network = getDefaultProvider(getNetwork(chainId))

const TOKENS = { //LINK ใช่ไม่ได้ , OMG ใช่ไม่ได้ , TUSD ใช่ไม่ได้
    'ETH': WETH[chainId],
    'MKR': new Token(chainId, '0xAaF64BFCC32d0F15873a02163e7E500671a4ffcD', 18),
    'USDC': new Token(chainId, '0x2F375e94FC336Cdec2Dc0cCB5277FE59CBf1cAe5', 6),
}

const TOKENS_MAIN = {
    'ETH': new Token(chainId, "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", 18),
    'USDC': new Token(chainId, "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", 18),
    'MKR': new Token(chainId, '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2', 18),
}

const getTokenData = (chainId, address) => Fetcher.fetchTokenData(chainId, address);

const getPair = (TokenA, TokenB) => Fetcher.fetchPairData(TokenA, TokenB);

const getMidPrice = async (TokenA, TokenB) => {
    const pair = await getPair(TokenA, TokenB);
    const route = new Route([pair], TokenA);
    return +route.midPrice.toSignificant(6);
}

const getExecutionPrice = async (TokenA, TokenB, amount) => {
    const pair = await getPair(TokenA, TokenB);
    const route = new Route([pair], TokenA);
    const trade = new Trade(route, new TokenAmount(WETH[chainId], amount), TradeType.EXACT_INPUT)
}

const getAllPairMidPrices = async (tokens) => {
    const tokenNames = Object.keys(tokens);
    const tokenArr = Object.values(tokens);
    const priceMatrix = [];
    for (let i = 0; i < tokenArr.length; i++) {
        if (!priceMatrix[i]) priceMatrix[i] = [];
        for (let j = 0; j < tokenArr.length; j++) {
            priceMatrix[i][j] = i === j ? '1' : await getMidPrice(tokenArr[i], tokenArr[j]); // 1 = amount
            console.log(tokenNames[i], tokenNames[j], priceMatrix[i][j]);
        }
    };
    return priceMatrix;
}


const checkcoin = async (from, valueinput) => {
    console.log("from =>", from)
    console.log("valueinput =>", valueinput)
    //0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee = ETH
    //0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 = WETH
    const priceMatrix = await getAllPairMidPrices(TOKENS);
    const names = Object.keys(TOKENS);
    console.log("priceMatrix", priceMatrix)
    // console.log(priceMatrix);
    const bestRoute = search(priceMatrix, names);
    console.log('max', bestRoute);
    return { bestRoute, valueinput }
}

const checkbalance = async (web3, addressMetamask) => {
    const getBalances = Object.values(TOKENS_DATA).map((token, index) => {
        return ERC20(web3, token.address).methods.balanceOf(addressMetamask)
    });
    const balances = await Promise.all(getBalances);
    return Object.entries(TOKENS_DATA).map((([name, token], index) => ({
        code_coin: name,
        name_coin: token.name,
        images_coin: token.image,
        balance_coin: web3.utils.fromWei(balances[index], 'ether'),
    })))
}

const swaptotaltoken = async (web3, route, valueinput) => {
    const algorithm = route;
    console.log("algorithm", algorithm.split(" -> "))//ETH -> MKR -> USDC -> ETH
    const arr_algo = algorithm.split(" -> ")
    let RouterContract = Router02(web3);
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    const swap = async (TokenA, TokenB, amount) => {

        const pair = await getPair(TokenA, TokenB);
        const route = new Route([pair], TokenA);
        const amountIn = fromDecimal(amount, TokenA.decimals);
        console.log({ amountIn })
        const trade = new Trade(route, new TokenAmount(TokenA, amountIn.toString()), TradeType.EXACT_INPUT);
        const price = +trade.executionPrice.toSignificant(6);
        const total = price * amount;
        console.log("total === >", total)
        console.log(`Trade ${amount} ${TokenA.symbol} to ` + total + `Final way`);

        // console.log("getExecutionPrice", getExecutionPrice())
        const slippageTolerance = new Percent('50', '10000') // 50 bips, or 0.50%
        const amountOutMin = trade.minimumAmountOut(slippageTolerance).raw // needs to be converted to e.g. hex
        const amountInMax = trade.maximumAmountIn(slippageTolerance).raw
        const path = [TokenA.address, TokenB.address]
        const to = account // should be a checksummed recipient address
        const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time

        if (TokenA === WETH[chainId]) {
            console.log({
                amountOutMin: amountOutMin.toString(),
                path,
                to,
                deadline,
                from: account
            });

            const contractnew = await RouterContract.methods.swapExactETHForTokens(
                web3.utils.toHex(amountOutMin.toString()),
                path,
                to,
                deadline,
                { from: account, value: amountIn }
            )
            return { total, contractnew }
        } else if (TokenB === WETH[chainId]) {
            console.log({
                amountIn,
                amountInMax: amountInMax.toString(),
                path,
                to,
                deadline,
                rom: account
            });

            const contractnew = await RouterContract.methods.swapTokensForExactETH(
                web3.utils.toHex(amountIn.toString()),
                web3.utils.toHex(amountInMax.toString()),
                path,
                to,
                deadline,
                { from: account }
            )
            return { total, contractnew }
        } else {
            console.log({
                amountIn,
                amountOutMin: amountOutMin.toString(),
                path,
                to,
                deadline,
                from: account
            });

            const contractnew = await RouterContract.methods.swapExactTokensForTokens(
                web3.utils.toHex(amountIn.toString()),
                web3.utils.toHex(amountOutMin.toString()),
                path,
                to,
                deadline,
                { from: account }
            )
            return { total, contractnew }
        }
    }

    let arr_amount = valueinput;
    // let arr_amount = 0.001;
    let transaction_hash = []
    console.log("arr_amount", arr_amount)
    //const result = await swap(TOKENS.USDC, TOKENS.ETH, arr_amount);
    try {
        for (let i = 0; i < arr_algo.length; i++) {
            if (i != arr_algo.length - 1) {
                console.log("IN", arr_amount)
                const resultnew = await swap(TOKENS[arr_algo[i]], TOKENS[arr_algo[i + 1]], arr_amount)
                console.log("token swap else", TOKENS[arr_algo[i]], TOKENS[arr_algo[i + 1]])
                arr_amount = resultnew.total
                // arr_amount = `${arr_amount}`
                arr_amount = Number(arr_amount);
                // `${amount}e+${decimals}`;
                // console.log("show wei", arr_amount)
                arr_amount = arr_amount.toFixed(4);
                // arr_amount = arr_amount.toFixed(7)
                console.log("hash =>", resultnew.contractnew);
                transaction_hash.push(resultnew.contractnew.transactionHash)
            }
        }
    } catch (error) {
        console.error("error naja", error)
    }
    console.log("arr_amount Last =======>", arr_amount);
    console.log("transaction_hash", transaction_hash)

    return { arr_amount, transaction_hash }
}

export default {
    checkcoin,
    checkbalance,
    swaptotaltoken
}