import fetch from '../utils/fetch'

export const getAccountAddress = async (ctx = {}, data: any) => {
  const method = 'POST'
  const path = `checkbalance`
  return await fetch(method, path, data, {}, ctx)
}
