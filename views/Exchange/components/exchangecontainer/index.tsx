import { BoxAmount, Container, Dropdown_box, IsExpanded, BalanceCoin, Swap_box, Btn_Exchange } from './styled'
import { useState } from 'react'
import axios from 'axios';
import { checkcoin, swaptotalcoin } from '../../../../services'
interface Props {
  result: { data: any; };
  initialId: any,
  valueinput: any,
}

const ExchangeContainer = (initialId) => {
  const token_code_one = 'ETH'
  const token_name_one = 'Ethereum'
  const balance = 0.5
  const token_code_two = 'DAI'
  const token_name_two = 'DAI'
  const [Hash, setHash] = useState(0)
  const [newId, setNewId] = useState(initialId)
  const [Price, setPrice] = useState(0)
  const [Price1, setPrice1] = useState(0)
  const [Price2, setPrice2] = useState(0)
  const [sum, setSum] = useState([])
  const [total, setTotal] = useState(null)
  const [time, setTime] = useState(true)
  const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const OMG = "0xd26114cd6ee289accf82350c8d8487fedb8a0c07";
  const MKR = "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2";
  const USDT = "0x8dd5fbce2f6a956c3022ba3663759011dd51e73e";
  const LCN = "0x0b3df94f9a997981c5ad52b0a16a26f6bb6039ed";
  const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
  // console.log("Price", Price)
  console.log("newId", newId)
  const onSave = async (valueinput: any) => {
    console.log("valueinput", valueinput)
    let response = await checkcoin({}, { valueinput: valueinput, fromtoken: WETH });
    console.log("response", response)//"ETH -> USDT -> UNI -> MKR -> DAI -> ETH"
    setSum(response.data)
    let res_swaptotalcoin = await swaptotalcoin({}, { algorithm: response, valueinput: valueinput });
    console.log("response_checkcoin", res_swaptotalcoin)
    setHash(res_swaptotalcoin.data)
  }
  const ExpandedOne = () => {
    // const [newId, setNewId] = useState(initialId)
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
          <input type="number" autoComplete="on" placeholder="Enter amount" min="0" step="0.1" onChange={(e) => setNewId(e.target.value)} />
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
          <div className="exchange-btn" onClick={() => onSave(newId)} >แลกเปลี่ยน</div>
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
