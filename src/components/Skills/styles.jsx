import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
export const Col = styled.article`
 display: flex;
 width: 100%;
 align-items: center;
 flex-flow: column nowrap;
 h4{
   margin: 0 10px;
 }
`

export const Ul = styled.ul`
  list-style: none;
  li{
    color: violet;
  }
`
