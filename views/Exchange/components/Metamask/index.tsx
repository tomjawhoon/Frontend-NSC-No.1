import { Metamask } from './styled'
import { useState } from 'react'
import Web3 from 'web3'
import { getAccountAddress } from '../../../../services'

const BoxMetamask = () => {
  const [newId, setNewId] = useState()
  const [price, setPrice] = useState<any>()
  const [balance, setBalance] = useState()

  const getAccount = async () => {
    const web3 = new Web3(Web3.givenProvider)
    const accounts = await web3.eth.getAccounts()
    const account = accounts[0]
    setPrice(account)
    const response = await getAccountAddress({}, { addressMetamask: account })
    setBalance(response.data)
    // showAccount.innerHTML = account;
  }

  return (
    <Metamask>
      <div className="wallet-logo-box">
        <img src="/static/images/metamask.png" />
      </div>
      <div className="wallet-content-box">
        <div className="wallet-type-name">Metamask</div>
        <div className="wallet-type-description">ใช้งานง่ายบนคอมพิวเตอร์</div>
        <div className="wallet-type-Address">Address: {price} </div>
        <div className="wallet-type-connect" onClick={() => getAccount()}>
          <a>เชื่อมต่อ</a>
        </div>
      </div>
    </Metamask>
  )
}

export default BoxMetamask
