import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #0559af;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
  font-family: 'Poppins', sans-serif;
`

export const IsExpanded = styled.div`
  padding: 30px;
  width: 100%;

  .fromCoin {
    color: white;
    font-size: 15px;
  }
  .is-expanded-box {
    width: 100%;
  }
`

export const Dropdown_box = styled.div`
  margin-top: 20px;
  margin-bottom: 25px;
  width: 100%;
  border-radius: 2px;
  background-color: #fff;
  padding: 5px 9px;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .token-logo {
    width: 30px;
    height: 30px;
    margin-right: 7px;
    img {
      width: 100%;
    }
  }
  .kind-of-coin {
    display: flex;
    align-items: center;
  }
  .token-code {
    font-size: 13px;
    font-weight: 600;
  }
  .token-name {
    font-size: 13px;
  }
  .list-logo {
    display: flex;
    align-items: center;
    width: 15px;
    img {
      width: 100%;
    }
  }
`

export const BoxAmount = styled.div`
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;
  input {
    padding-bottom: 3px;
    background: transparent;
    border-top: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    border-bottom: 1px solid #fff;
    width: 100%;
    color: #fff;
    outline: none;
    font-size: 1rem;
  }
  .notify-coin {
    color: #ff7d40;
    font-size: 14px;
    font-weight: 700;
    margin-top: 5px;
  }
`

export const BalanceCoin = styled.div`
  text-align: right;
  width: 100%;
  .value-balance {
    color: #fff;
    span {
      font-weight: 600;
    }
  }
`

export const Swap_box = styled.div`
  height: 1px;
  background: #fff;
  position: relative;
  margin: 50px 0 30px 0;
  display: block;
  .swap-circle {
    width: 58px;
    height: 58px;

    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: -29px;
    transform: translate(-50%);
    text-align: center;
    cursor: pointer;
  }
  .img {
    max-width: auto;
    height: auto;
  }
`

export const Btn_Exchange = styled.div`
  padding: 30px;
  width: 100%;
  .exchange-btn {
    padding: 11px;
    font-weight: 700;
    border-radius: 2px;
    border: 2px solid #fff;
    text-align: center;
    width: 100%;
    color: #fff;
  }

  .exchange-btn:hover {
    color: #0559af;
    background: #fff;
  }
`
