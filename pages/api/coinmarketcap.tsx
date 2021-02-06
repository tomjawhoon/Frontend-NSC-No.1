import CoinGecko from 'coingecko-api'
const coinGeckoClient = new CoinGecko()

export default async (req, res) => {
  const result = await coinGeckoClient.coins.markets({
    order: CoinGecko.ORDER.MARKET_CAP_DESC,
  })

  return res.status(200).json(result.data)
}
