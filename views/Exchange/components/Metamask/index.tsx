import { Metamask } from './styled'
import { useState } from 'react'
import axios from 'axios'

const BoxMetamask = () => {
  const [newId, setNewId] = useState()
  const [price, setPrice] = useState()
  const [balance, setBalance] = useState()

  const getAccount = async () => {
    console.log("eiei")
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log("account", account)
    setPrice(account)
    const response = await axios.post('http://localhost:5001/checkbalance', { //ETH
      // valueinput: valueinput, //0.005 ค่าที่กรอกในช่องอ่านั้นแหละ
      addressMetamask: account, //WETH -USDC
      // totoken: MKR,
    })
    setBalance(response.data) //10
    // showAccount.innerHTML = account;
  }
  console.log("show =>", balance)
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
