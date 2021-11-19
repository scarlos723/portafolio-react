import styled from 'styled-components'

export const Section = styled.section`
  display:grid;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height:100vh;
`
export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  .img-box{
    width: 45%;
    height: 100%;
    padding: 10px;
    background-image: url("https://picsum.photos/500/500");
    background-size:cover;
    background-repeat: no-repeat;
  }
  .text-box{
    margin: 0 auto;
    color:white;
    font-size:22px;
    font-family: 'Genos', sans-serif;
    h1{
      font-size:40px;
    }
  }
`
