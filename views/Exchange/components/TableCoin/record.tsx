import { formatNumber } from '../../../../utils/numberFormat'
import { Logo } from './styled'

export const columns = [
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
  },
  {
    title: 'Name',
    dataIndex: ['name'],
    key: 'name',
  },
  {
    title: '24H Change',
    dataIndex: 'price_change_percentage_24h',
    key: 'price_change_percentage_24h',
    render: (text) => <div>{text}%</div>,
  },
  {
    title: 'Price ($)',
    key: 'price_change_24h',
    dataIndex: 'price_change_24h',
  },
  {
    title: 'Market cap ($)',
    key: 'market_cap',
    dataIndex: 'market_cap',
    render: (price) => {
      return <div>${formatNumber(price)}</div>
    },
  },
]
