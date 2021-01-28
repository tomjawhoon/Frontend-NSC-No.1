import Header from '../../components/Header'
import ExchangeContainer from './components/exchangecontainer'
import BoxMetamask from './components/Metamask'

import { Exchange_Container, Container } from './styled'

const Exchange_H = () => {
  return (
    <>
      <Header />
      <Container>
        <Exchange_Container>
          <div className="exchange-column-right">
            <BoxMetamask />
          </div>
          <div className="exchange-column-left">
            <ExchangeContainer />
          </div>
        </Exchange_Container>
      </Container>
    </>
  )
}

export default Exchange_H
