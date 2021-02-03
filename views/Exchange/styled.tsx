import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Exchange_Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;

  .exchange-column-left {
    margin-top: 15px;
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
    }
  }
`
