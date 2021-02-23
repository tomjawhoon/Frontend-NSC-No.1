import { BoxAmount, Container, Dropdown_box, IsExpanded, BalanceCoin, Swap_box, Btn_Exchange, Reload, Setmodal_margin, Set_images } from './styled'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import axios from 'axios';
import { checkcoin, swaptotalcoin } from '../../../../services'
import { Button, Divider, Modal, Spin, Tag, Steps, Popover } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, ArrowRightOutlined } from '@ant-design/icons';


interface Props {
  result: { data: any; };
  initialId: any,
  valueinput: any,
}

//  const router = useRouter()
const ExchangeContainer = (initialId) => {
  const router = useRouter()
  const token_code_one = 'ETH'
  const token_name_one = 'Ethereum'
  const balance = 0.5
  const token_code_two = 'DAI'
  const token_name_two = 'DAI'
  const [Hash, setHash] = useState([])
  const [newId, setNewId] = useState(null)
  const [Price, setPrice] = useState([])
  const [sum, setSum] = useState([])
  const [total, setTotal] = useState(null)
  const [check, setCheck] = useState(false)
  const [profit, setProfit] = useState(false)
  const [img, setImg] = useState([])
  const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
  // const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  // const OMG = "0xd26114cd6ee289accf82350c8d8487fedb8a0c07";
  // const MKR = "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2";
  // const USDT = "0x8dd5fbce2f6a956c3022ba3663759011dd51e73e";
  // const LCN = "0x0b3df94f9a997981c5ad52b0a16a26f6bb6039ed";
  // const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
  // console.log("Price", Price)
  console.log("newId", newId)
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    localStorage.setItem('Show', 'false');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    localStorage.setItem('Show', 'false');
  };
  //===============================================================================================
  const onSave = async (valueinput: any) => {

    setCheck(true);
    console.log("valueinput", valueinput)
    let response = await checkcoin({}, { valueinput: valueinput, fromtoken: WETH });
    // console.log("response.data.bestRoute.bestRoute", response.data.bestRoute.bestRoute)
    console.log(response);
    const algorithm_Front = response.bestRoute.bestRoute;
    // localStorage.setItem('Hash', JSON.stringify(Hash));

    console.log("algorithm_Front", algorithm_Front.split(" -> "))
    const arr_algo = algorithm_Front.split(" -> ")
    console.log("arr_algo", arr_algo) //array
    setSum(arr_algo)
    localStorage.setItem('Sum', JSON.stringify(arr_algo));
    let res_swaptotalcoin = await swaptotalcoin({}, { route: algorithm_Front, valueinput: valueinput });
    console.log("response_checkcoin", res_swaptotalcoin)
    if (res_swaptotalcoin) {
      setCheck(false);
      setHash(res_swaptotalcoin.transaction_hash)
      setPrice(res_swaptotalcoin.arr_amount)

      localStorage.setItem('Hash', JSON.stringify(res_swaptotalcoin.transaction_hash));
      localStorage.setItem('Price', JSON.stringify(res_swaptotalcoin.arr_amount));

      localStorage.setItem('Show', 'true');


      console.log("parseFloat", parseFloat(res_swaptotalcoin.arr_amount))
      console.log("show parseFloat", parseFloat(valueinput))

      if (parseFloat(res_swaptotalcoin.arr_amount) <= parseFloat(valueinput)) {
        setProfit(false)
        //low-profits
      } else {
        //low-profits
        setProfit(true)
      }
      showModal()
      //arr_amount
    }
    // ตรงนี้
  }
  const Images = {
    'ETH': "https://tokens.1inch.exchange/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png",
    'USDC': "https://tokens.1inch.exchange/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
    'MKR': "https://tokens.1inch.exchange/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2.png",
  }
  console.log("all gori_sum_sum", sum)
  console.log("Images", Images)

  const Clickhas = async (link: any) => {
    router.push(`https://kovan.etherscan.io/tx/${link}`)
  }

  useEffect(() => {
    const Hash = localStorage.getItem('Hash');
    const Sum = localStorage.getItem('Sum');
    const Price = localStorage.getItem('Price');
    const Show = localStorage.getItem('Show');

    if (Hash && Sum && Price && Show) {
      setHash(JSON.parse(Hash));
      setSum(JSON.parse(Sum));
      setPrice(JSON.parse(Price));
      setIsModalVisible(JSON.parse(Show));
    }
  }, []);


  const ExpandedOne = (): JSX.Element => {
    const customDot = (dot, { status, index }) => (
      <Popover
        content={
          <span>
            step {index} status: {status}
          </span>
        }
      >
        {dot}
      </Popover>
    );
    const { Step } = Steps;

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
          {/* <div className="notify-coin">จำนวนเหรียญของคุณไม่เพียงพอ</div> */}
        </BoxAmount>
        <BalanceCoin>
          {/* <div className="value-balance">
            จำนวนทั้งหมด<span> {balance} </span>
            {token_code_one}
          </div> */}
        </BalanceCoin>
        <Btn_Exchange>
          <div className="exchange-btn" onClick={() => onSave(newId)} >
            Arbitrage
          </div>
        </Btn_Exchange>
        <Btn_Exchange>
          {check ?
            <Steps current={1} progressDot={customDot}>
              {Hash.map((x, index) => {
                // console.log("index=<>",index)
                <div key={index}>
                  <Step title="START" description="Just a Moment." />
                  <Step title="In Progress" description="Just a Moment." />
                  <Step title="Waiting" description="Just a Moment." />
                  <Step title="Finish" description="Just a Moment." />
                </div>
                console.log("index=<>", index)
              })}
            </Steps>
            : <div></div>}
        </Btn_Exchange>
        {/* <Button type="primary" onClick={showModal}>
          Open Modal
      </Button> */
        }
        <Modal title="STATUS" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>{Hash.map((x, index) => {
            return (
              <Setmodal_margin>
                <div className="setmodal" key={index}>
                  <span >Swap {index + 1} :  </span><a style={{ color: 'unset' }} target='_blank' href={`https://kovan.etherscan.io/tx/${x}`}>  <Tag color="#108ee9">Hash</Tag></a>
                  {/* <span>{Images.ETH}</span> */}
                  <img className="editimages" src={Images[sum[index]]} ></img> <ArrowRightOutlined></ArrowRightOutlined>
                  <img className="editimages" src={Images[sum[index + 1]]}></img>
                </div>
                <Divider></Divider>
              </Setmodal_margin>
            )
          })}
          </p>
          <Set_images>
            <p>
              <div className="setimages">
                <img src="https://tokens.1inch.exchange/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png" />
              </div>
              <div className="setValue">
                <div className="setcost"><b>Cost : {newId}</b></div>
                <div className="setprice"> <b>ETH : {Price}</b>
                  <div className="settotalvalue"></div>
                  {profit ?
                    <div className="setimages1">
                      <ArrowUpOutlined style={{ color: "green", fontSize: "20" }} />  High profit {(Number(Price) - newId).toFixed(7)}
                    </div>
                    : <div className="setimages1">
                      <ArrowDownOutlined style={{ color: "red", fontSize: "20" }} /> Low profit ({(Number(Price) - newId).toFixed(7)})
                     <div><b>There might be a problem at DEX</b></div>
                    </div>}
                </div>
              </div>
            </p></Set_images>
          {/* <p>Some contents...</p> */}
        </Modal>
      </IsExpanded >
    )
  }
  // swap1 : Hash
  // swap2 : Hash
  // swap3 : Hash
  // ETH TOTAL =
  // const ExpandedTwo = () => {
  //   return (
  //     <IsExpanded>
  //       <div className="fromCoin">เหรียญต้นทาง</div>
  //       <div className="is-expanded-box">
  //         <Dropdown_box>
  //           <div className="kind-of-coin">
  //             <div className="token-logo">
  //               <img src="/static/images/ethereum-coin.png" />
  //             </div>
  //             <div>
  //               <div className="token-code">{token_code_one}</div>
  //               <div className="token-name">Ethereum</div>
  //             </div>
  //           </div>
  //           <div className="list-logo">
  //             <img src="/static/images/caret-down.svg" alt="" />
  //           </div>
  //         </Dropdown_box>
  //       </div>
  //       <BoxAmount>
  //         <input type="number" autoComplete="on" placeholder="Enter amount" min="0" step="0.1" />
  //       </BoxAmount>
  //       <BalanceCoin>
  //         <div className="value-balance">
  //           อัตราการแลกเปลี่ยนประมาณการ<span> 1 </span>
  //           <span>{token_code_one}</span> = 1,573.5298 <span>{token_code_two}</span>
  //         </div>
  //       </BalanceCoin>
  //       <Btn_Exchange>
  //         <div className="exchange-btn" onClick={() => onSave(newId)} >แลกเปลี่ยน</div>
  //       </Btn_Exchange>
  //     </IsExpanded>
  //   )
  // }

  return (
    <Container>
      {ExpandedOne()}
      <Swap_box>
        {/* <div className="swap-circle">
        
          <img src="/static/images/sort.svg" />
        </div> */}
      </Swap_box>
      {/* {ExpandedTwo()} */}
    </Container>
  )
}
export default ExchangeContainer
