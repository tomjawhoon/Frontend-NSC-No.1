import React, { ReactElement, useEffect, useState } from 'react'
import CoinGecko from 'coingecko-api'
const coinGeckoClient = new CoinGecko()
import { Logo, Tables_Coin, Table_Coin_isMobile } from './styled'
import { formatNumber } from '../../../../utils/numberFormat'
import { Input, Button, Space, Table } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import Highlighter from 'react-highlight-words'
import axios from 'axios'

const CoinsTable = () => {
  const [data, setData] = useState<any>()
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const res = await axios.get('/api/coinmarketcap')
    setData(res.data)
  }

  const res = axios.get('/api/coinmarketcap')

  const [searchText, setSearchText] = useState<any>()
  const [searchInput, setSearchInput] = useState<any>()
  const [searchedColumn, setSearchedColumn] = useState<any>()

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }

  const handleReset = (clearFilters) => {
    clearFilters()
    setSearchText('')
  }

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            setSearchInput(node)
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  })

  const columns = [
    {
      title: 'Logo',
      dataIndex: 'image',
      key: 'image',
      render: (logo) => (
        <Logo>
          <img src={logo} />
        </Logo>
      ),
    },
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
      render: (text) => <div>{text}</div>,
      ...getColumnSearchProps('symbol'),
    },
    {
      title: 'Name',
      dataIndex: ['name'],
      key: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: '24H Change',
      dataIndex: 'price_change_percentage_24h',
      key: 'price_change_percentage_24h',
      render: (text) => <div>{text}%</div>,
    },
    {
      title: 'Price ($)',
      key: 'ath',
      dataIndex: 'ath',
      render: (price) => {
        return <div>{formatNumber(price)}</div>
      },
    },
    {
      title: 'Market cap ($)',
      key: 'market_cap',
      dataIndex: 'market_cap',
      render: (market_cap) => {
        return <div>{formatNumber(market_cap)}</div>
      },
    },
  ]

  const columnsMobile = [
    {
      title: 'Logo',
      dataIndex: 'image',
      key: 'image',
      render: (logo) => (
        <Logo>
          <img src={logo} />
        </Logo>
      ),
    },
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
      render: (text) => <div>{text}</div>,
      ...getColumnSearchProps('symbol'),
    },
    {
      title: 'Price ($)',
      key: 'ath',
      dataIndex: 'ath',
      render: (price) => {
        return <div>{formatNumber(price)}</div>
      },
    },
  ]

  return (
    <React.Fragment>
      <Tables_Coin>
        <Table columns={columns} dataSource={data} rowKey={'id'} />
      </Tables_Coin>
    </React.Fragment>
  )
  // return <div>{JSON.stringify(data)}</div>
}

export default CoinsTable
