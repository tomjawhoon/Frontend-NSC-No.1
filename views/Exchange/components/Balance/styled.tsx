import styled from 'styled-components'

export const Balance = styled.div`
  display: block;
  float: left;
  width: 100%;

  .assets-container {
    width: 100%;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  }

  .balance-title {
    font-size: 18px;
    color: #2193ff;
    padding: 20px 20px 0;
    margin-bottom: 10px;
  }

  .token-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 20px;
    min-height: 28px;
  }

  .columns-coin {
    display: flex;
    width: 100%;
  }
  .is-coins {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  // Change size of coin
  .token-item-box {
    display: block;
    width: 50%;
  }

  .btw-box {
    padding-bottom: 10px;
  }

  .height-0 {
    flex: none;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s !important;
    padding: 0;
  }

  .height-auto {
    flex: none;
    max-height: 110px;
    overflow: hidden;
    transition: max-height 0.5s !important ;
    padding: 0;
  }

  .box-content {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .logo-coin {
    width: 30px;
    height: 30px;
    img {
      width: 100%;
    }
  }
  .box-code-name {
    margin-left: 10px;
    .code-coin {
      font-weight: 600;
      font-size: 18px;
    }
    .name-coin {
      font-size: 14px;
    }
  }
  .box-balance {
    width: 90%;
    border: none;
    outline: none;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .line-dash {
    margin-top: 20px;
    height: 1px;
    background-color: #585858;
  }
  .more-coin {
    font-size: 18px;
    color: #2193ff;
    padding: 10px 20px 20px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .token-item-box {
      width: 33.33%;
    }
  }
`
