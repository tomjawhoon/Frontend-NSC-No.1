import styled from 'styled-components'

export const Tables_Coin = styled.div`
  display: none;
  @media (min-width: 615px) {
    display: block;
    margin-top: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    .ant-table-pagination.ant-pagination {
      padding-right: 26px;
    }
    .ant-table-thead > tr > th {
      font-weight: 700;
    }
  }
`

export const Logo = styled.div`
  width: 40px;
  height: 40px;

  img {
    width: 100%;
  }
`
