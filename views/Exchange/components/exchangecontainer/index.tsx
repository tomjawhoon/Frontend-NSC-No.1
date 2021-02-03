import { BoxAmount, Container, Dropdown_box, IsExpanded, BalanceCoin, Swap_box, Btn_Exchange } from './styled'

const ExchangeContainer = () => {
  const token_code_one = 'ETH'
  const token_name_one = 'Ethereum'
  const balance = 0.5
  const token_code_two = 'DAI'
  const token_name_two = 'DAI'

  const ExpandedOne = () => {
    return (
      <IsExpanded>
        <div className="fromCoin">เหรียญต้นทาง</div>
        <div className="is-expanded-box">
          <Dropdown_box>
            <div className="kind-of-coin">
              <div className="token-logo">
                <img src="/static/images/ethereum-coin.png" />
              </div>
              <div>
                <div className="token-code">{token_code_one}</div>
                <div className="token-name">{token_name_one}</div>
              </div>
            </div>
            <div className="list-logo">
              <img src="/static/images/caret-down.svg" alt="" />
            </div>
          </Dropdown_box>
        </div>
        <BoxAmount>
          <input type="number" autoComplete="on" placeholder="Enter amount" min="0" step="0.1" />
          <div className="notify-coin">จำนวนเหรียญของคุณไม่เพียงพอ</div>
        </BoxAmount>
        <BalanceCoin>
          <div className="value-balance">
            จำนวนทั้งหมด<span> {balance} </span>
            {token_code_one}
          </div>
        </BalanceCoin>
      </IsExpanded>
    )
  }

  const ExpandedTwo = () => {
    return (
      <IsExpanded>
        <div className="fromCoin">เหรียญต้นทาง</div>
        <div className="is-expanded-box">
          <Dropdown_box>
            <div className="kind-of-coin">
              <div className="token-logo">
                <img src="/static/images/ethereum-coin.png" />
              </div>
              <div>
                <div className="token-code">{token_code_one}</div>
                <div className="token-name">Ethereum</div>
              </div>
            </div>
            <div className="list-logo">
              <img src="/static/images/caret-down.svg" alt="" />
            </div>
          </Dropdown_box>
        </div>
        <BoxAmount>
          <input type="number" autoComplete="on" placeholder="Enter amount" min="0" step="0.1" />
        </BoxAmount>
        <BalanceCoin>
          <div className="value-balance">
            อัตราการแลกเปลี่ยนประมาณการ<span> 1 </span>
            <span>{token_code_one}</span> = 1,573.5298 <span>{token_code_two}</span>
          </div>
        </BalanceCoin>
        <Btn_Exchange>
          <div className="exchange-btn">แลกเปลี่ยน</div>
        </Btn_Exchange>
      </IsExpanded>
    )
  }

  return (
    <Container>
      {ExpandedOne()}
      <Swap_box>
        <div className="swap-circle">
          <img src="/static/images/sort.svg" />
        </div>
      </Swap_box>
      {ExpandedTwo()}
    </Container>
  )
}
export default ExchangeContainer
