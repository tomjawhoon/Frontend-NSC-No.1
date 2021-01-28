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
          <div className="exchange-column-right" data-aos="fade-left" data-aos-delay="200">
            <BoxMetamask />
          </div>
          <div className="exchange-column-left" data-aos="fade-right" data-aos-delay="200">
            <ExchangeContainer />
          </div>
        </Exchange_Container>
      </Container>
    </>
  )
}

export default Exchange_H
