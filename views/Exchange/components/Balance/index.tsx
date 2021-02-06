import { Balance } from './styled'
import React, { useState, useEffect } from 'react'
import { truncate } from 'fs'
import { getAccountAddress } from '../../../../services'
// import { getAccount } from './getbalance'

const CheckBalance = () => {
  const [newId, setNewId] = useState()
  const [price, setPrice] = useState()
  const [balance, setBalance] = useState()
  const [data, setData] = useState<any>()
  const [moreCoins, setMoreCoin] = useState<boolean>(false)
  useEffect(() => {
    getAccount();
  }, [])
  const getAccount = async () => {
    console.log("eiei")
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    let response = await getAccountAddress({}, { addressMetamask: account });
    // console.log("response", response)
    setData(response.data)
    // return response;
    // showAccount.innerHTML = account;
  }
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
        {data?.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <div className={`token-item-box ${hiddenCoin(index)}`}>
              <div className="box-content">
                <div className="logo-coin">
                  <img src={item.images_coin} />
                </div>
                <div className="box-code-name">
                  <div className="code-coin">{item.code_coin}</div>
                  <div className="name-coin">{item.name_coin}</div>
                </div>
              </div>
              <input
                className="box-balance"
                value={item.balance_coin}
                onChange={() => {
                  undefined
                }}
              />
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
