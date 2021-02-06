import axios from 'axios'
import { access } from 'fs'

import { env } from '../constants/environments'

const fetch = (
  method: any = 'GET',
  endpoint: string = '/',
  body: Object = {},
  headers: Object = {},
  ctx: any = {},
  apiUrl: any = env.apiUrl,
  options: Object = {}
) => {
  const url = `${apiUrl}/${endpoint}`
  const data = body
  const queryName = method === 'GET' ? 'params' : 'data'
  const api = axios.create({
    baseURL: url,
  })

  api.interceptors.request.use((config) => {
    let accessToken = 'GET TOKEN'
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }
    return config
  })

  const res = api.request({
    method,
    url,
    [queryName]: data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
    ...options,
  })

  res.catch((error) => {
    console.log(error)
    if (error.response) {
      console.error(error.response)
    }
  })

  return Promise.resolve(res)
}

export default fetch
