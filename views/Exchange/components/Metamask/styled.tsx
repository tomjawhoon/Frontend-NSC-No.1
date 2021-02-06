import styled from 'styled-components'

export const Metamask = styled.div`
  .container-metamask {
    background-color: #3f5eab;
    display: flex;
    align-items: center;
    float: left;
    width: 100%;
    box-shadow: 0 2px 4px 0 rgba(85, 85, 85, 0.5);
    border-radius: 3px;
    padding: 18px;
    margin-bottom: 10px;
    font-family: 'Poppins', sans-serif;
  }

  .have-address {
    flex-direction: column;
  }

  .wallet-logo-box {
    width: 6rem;
    height: 6rem;
    margin-right: 17px;
  }
  .wallet-content-box {
    width: calc(100%);
  }
  .wallet-type-name {
    font-size: 20px;
    color: white;
  }
  .wallet-type-description {
    font-size: 15px;
    color: white;
  }
  .wallet-type-Address {
    font-size: 13px;
    color: white;
  }
  .address-names {
    display: flex;
    word-wrap: break-word;
    font-size: 15px;
    color: white;
    width: 100%;
    height: 50px;
    overflow: hidden;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .wallet-type-connect {
    float: left;
    width: 100%;
    margin-top: 23px;
    max-width: 240px;
    a {
      background: transparent;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 3px;
      padding: 10px;
      width: 100%;
      display: block;
      text-align: center;
      cursor: pointer;
    }
    a:hover {
      color: #3f5eab;
      background: #fff;
    }
  }
  img {
    width: 100px;
    border-radius: 50%;
  }
`
