import Header from '../../components/Header'
import ExchangeContainer from './components/exchangecontainer'
import BoxMetamask from './components/Metamask'
import CheckBalance from './components/Balance'
import { Exchange_Container, Container } from './styled'
import Test from './components/TableCoin'

const Exchange_H = () => {
  return (
    <>
      <Header />
      <Container>
        <Exchange_Container>
          <div className="exchange-column-right" data-aos="fade-left" data-aos-delay="400">
            <BoxMetamask />
            <CheckBalance />
          </div>

          <div className="exchange-column-left" data-aos="fade-right" data-aos-delay="400">
            <ExchangeContainer />
          </div>
          <Test />
        </Exchange_Container>
      </Container>
    </>
  )
}

export default Exchange_H
