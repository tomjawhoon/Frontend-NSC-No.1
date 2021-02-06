import { Balance } from './styled'
import React, { useState } from 'react'
import { truncate } from 'fs'

const CheckBalance = () => {
  const [newId, setNewId] = useState()
  const [price, setPrice] = useState()
  const [balance, setBalance] = useState()
  const [moreCoins, setMoreCoin] = useState<boolean>(false)
  const mapCoins = () => {
    const hiddenCoin = (index) => {
      if (index < 9) {
        return 'btw-box'
      } else {
        if (index > 8 && moreCoins === false) {
          return 'height-0'
        } else {
          return 'height-auto' + ' btw-box'
        }
      }
    }

    // ${index > 9 && moreCoins === false ? 'height-0' : 'height-auto'}
    return (
      <>
        {Array.from(Array(50).keys()).map((item: any, index: number) => (
          <React.Fragment key={index}>
            <div className={`token-item-box ${hiddenCoin(index)}`}>
              <div className="box-content">
                <div className="logo-coin">
                  <img src="/static/images/ethereum-coin.png" />
                </div>
                <div className="box-code-name">
                  <div className="code-coin">ETH</div>
                  <div className="name-coin">Ethereum</div>
                </div>
              </div>
              <input className="box-balance" value="1,1111.123456789012345655555555555555555555555555555555555" />
            </div>
          </React.Fragment>
        ))}
      </>
    )
  }

  return (
    <Balance>
      <div className="assets-container">
        <div className="balance-title">ยอดเงิน</div>
        <div className="token-container">
          <div className="columns-coin">
            <div className="is-coins">{mapCoins()}</div>
          </div>
        </div>
        <div className="line-dash" />
        <div className="more-coin" onClick={() => setMoreCoin(!moreCoins)}>
          ดูเพิ่มเติม
        </div>
      </div>
    </Balance>
  )
}

export default CheckBalance
