import fetch from '../utils/fetch'

export const getAccountAddress = async (ctx = {}, data: any) => {
  const method = 'POST'
  const path = `checkbalance`
  return await fetch(method, path, data, {}, ctx)
}


export const checkcoin = async (ctx = {}, data: any) => {
  const method = 'POST'
  const path = `checkcoin`
  return await fetch(method, path, data, {}, ctx)
}

export const swaptotalcoin = async (ctx = {}, data: any) => {
  const method = 'POST'
  const path = `swaptotalcoin`
  return await fetch(method, path, data, {}, ctx)
}
