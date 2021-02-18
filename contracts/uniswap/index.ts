import IUniswapV2Router02 from './ABI'

const address = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
const ABI = IUniswapV2Router02;

const Router02 = (web3) => {
    const contract = new web3.eth.Contract(ABI, address);

    // send
    const swapExactTokensForTokens = (amountIn, amountOutMin, path, to, deadline, options) => {
        return contract.methods.swapExactTokensForTokens(amountIn, amountOutMin, path, to, deadline).send(options);
    }

    const swapExactETHForTokens = (amountOutMin, path, to, deadline, options) => {
        return contract.methods.swapExactETHForTokens(
            amountOutMin,
            path,
            to,
            deadline
        ).send(options);
    }

    const swapTokensForExactETH = (amountOut, amountInMax, path, to, deadline, options) => {
        return contract.methods.swapTokensForExactETH(
            amountOut, 
            amountInMax, 
            path, 
            to, 
            deadline
        ).send(options)
    }

    return {
        contract,
        methods: {
            swapExactTokensForTokens,
            swapExactETHForTokens,
            swapTokensForExactETH
        },
        events: {
        }
    }
}

export default Router02;

