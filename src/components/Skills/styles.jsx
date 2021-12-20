import styled from 'styled-components'
import { SiReact } from 'react-icons/si'
import { GiroAnimate } from '../../Animations'
export const Grid = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr 1fr;
  align-items:center;
  gap:16px;
  padding:0 80px;
`
export const Col = styled.article`
 display:flex;
 align-items: center;
 flex-flow: column nowrap;
 color: #a1d9ed;
 h2{
   font-size:48px;
 }
 h4{
   font-size:32px;
   margin: 0 10px;
   margin-bottom:16px;
 }
`

export const Ul = styled.ul`
  list-style: none;
  
  margin:0;
  padding:0;
  display:grid;
    grid-template-columns:1fr 1fr;
  li{
    display:flex;
    align-items:center;
    
   
    font-size:24px;
    margin:0;
    padding:0;
    color: white;
    margin-bottom:12px;
  }
`

export const CustomSiReact = styled(SiReact)`
  ${GiroAnimate({ time: '10s' })}
`
