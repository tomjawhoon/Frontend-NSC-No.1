import { Metamask } from './styled'

const BoxMetamask = () => {
  return (
    <Metamask>
      <div className="wallet-logo-box">
        <img src="/static/images/metamask.png" />
      </div>
      <div className="wallet-content-box">
        <div className="wallet-type-name">Metamask</div>
        <div className="wallet-type-description">ใช้งานง่ายบนคอมพิวเตอร์</div>
        <div className="wallet-type-connect">
          <a>เชื่อมต่อ</a>
        </div>
      </div>
    </Metamask>
  )
}

export default BoxMetamask
