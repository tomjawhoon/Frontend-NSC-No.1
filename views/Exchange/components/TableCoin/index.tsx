import React, { ReactElement, useEffect, useState } from 'react'
import CoinGecko from 'coingecko-api'
const coinGeckoClient = new CoinGecko()
import { Table, Tag, Space } from 'antd'
import { Logo, Tables_Coin } from './styled'
import { formatNumber } from '../../../../utils/numberFormat'
import { columns } from './record'

const CoinsTable = () => {
  const [data, setData] = useState<any>()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const result = await coinGeckoClient.coins.markets({
      order: CoinGecko.ORDER.MARKET_CAP_DESC,
    })
    setData(result.data)
  }

  return (
    <Tables_Coin>
      <Table columns={columns} dataSource={data} rowKey={'id'} />
    </Tables_Coin>
  )
  // return <div>{JSON.stringify(data)}</div>
}

export default CoinsTable
