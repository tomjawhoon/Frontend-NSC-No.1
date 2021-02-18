import ERC20_ABI from './ABI'

const ABI = ERC20_ABI;

const ERC20 = (web3, address) => {
    const contract = new web3.eth.Contract(ABI, address);

    // call
    const balanceOf = (account) => {
        return contract.methods.balanceOf(account).call();
    }

    // send
    
    return {
        contract,
        methods: {
            balanceOf
        },
        events: {
        }
    }
}

export default ERC20;