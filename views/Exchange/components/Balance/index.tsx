import { Balance } from './styled'
import { useState } from 'react'
import axios from 'axios'

const CheckBalance = () => {
    const [newId, setNewId] = useState()
    const [price, setPrice] = useState()
    const [balance, setBalance] = useState()
    console.log("show =>", balance)
    return (
        <Balance>
            <div className="wallet-logo-box">
                <img src="/static/images/metamask.png" />
            </div>
            <div className="wallet-content-box">
                <div className="wallet-type-name">Metamask</div>
                <div className="wallet-type-description">ใช้งานง่ายบนคอมพิวเตอร์</div>
                <div className="wallet-type-Address">Address: {price} </div>
                <a>เชื่อมต่อ</a>
            </div>
        </Balance>
    )
}

export default CheckBalance
