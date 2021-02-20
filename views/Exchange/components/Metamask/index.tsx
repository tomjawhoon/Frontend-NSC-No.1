import { Metamask } from './styled'
import { useState } from 'react'
import Web3 from 'web3'
import { getAccountAddress } from '../../../../services'

const BoxMetamask = () => {
  const [newId, setNewId] = useState()
  const [price, setPrice] = useState<any>()
  const [balance, setBalance] = useState()

  const getAccount = async () => {
    console.log("eiei")
    const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log("account", account)
    setPrice(account)
    const response = await getAccountAddress({}, { addressMetamask: account })
    setBalance(response.data)
    // showAccount.innerHTML = account;
  }
  console.log("balance", balance)
  return (
    <Metamask>
      <div className={`${price ? 'container-metamask have-address' : 'container-metamask'}`}>
        <div className="wallet-logo-box">
          <img src="/static/images/metamask.png" />
        </div>
        <div className="wallet-content-box">
          <div className="wallet-type-name">Metamask</div>
          {!price && <div className="wallet-type-description">ใช้งานง่ายบนคอมพิวเตอร์</div>}
          {price && (
            <>
              <div className="wallet-type-Address">Address:</div>
              <div className="address-names">{price} copy</div>{' '}
            </>
          )}
          {!price && (
            <div className="wallet-type-connect" onClick={() => getAccount()}>
              <a>เชื่อมต่อ</a>
            </div>
          )}
        </div>
      </div>
    </Metamask>
  )
}

export default BoxMetamask
