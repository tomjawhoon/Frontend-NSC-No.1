import fetch from '../utils/fetch'
import tradeService from './trade';
import Web3 from 'web3';

export const getAccountAddress = async (ctx = {}, data: any) => {
  const web3 = new Web3(Web3.givenProvider);
  return tradeService.checkbalance(web3, data.addressMetamask);
  // const method = 'POST'
  // const path = `checkbalance`
  // return await fetch(method, path, data, {}, ctx)
}


export const checkcoin = async (ctx = {}, data: any) => {
  return tradeService.checkcoin(data.fromtoken, data.valueinput);
  // const method = 'POST'
  // const path = `checkcoin`
  // return await fetch(method, path, data, {}, ctx)
}

export const swaptotalcoin = async (ctx = {}, data: any) => {
  const web3 = new Web3(Web3.givenProvider);
  return tradeService.swaptotaltoken(web3, data.route, data.valueinput)
  // const method = 'POST'
  // const path = `swaptotalcoin`
  // return await fetch(method, path, data, {}, ctx)
}
