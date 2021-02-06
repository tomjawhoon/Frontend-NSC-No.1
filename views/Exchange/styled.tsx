import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #e6e6e6;

  .Box-Exchange {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    padding: 15px;
  }
  .Box-Coins-Table {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    padding: 15px;
    padding-top: 0px !important;
    .Coins-Table {
      width: 100%;
      padding: 15px;
      padding-top: 0px !important;
    }
    @media (min-width: 1080px) {
      .Coins-Table {
        width: 85%;
        padding: 15px;
        padding-top: 0px !important;
      }
    }
  }
`
export const Exchange_Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
  width: 100%;

  .exchange-column-left {
    margin-top: 15px;
  }

  .exchange-column-under {
    float: right;
    display: block;
    width: 45%;
  }

  @media (min-width: 1080px) {
    display: block;
    flex: none;
    width: 85%;
    .exchange-column-right {
      float: right;
      display: block;
      width: 45%;
    }

    .exchange-column-left {
      display: block;
      width: 54%;
      margin-top: 0px;
    }
  }
`
