import styled, { keyframes } from 'styled-components'
const pulseAnimation = keyframes`
  0% { box-shadow: 0px 0px 0px #A6048B  }
  25% { box-shadow: 0px 0px 2px #A6048B  }
  50% { box-shadow: 0px 0px 10px #A6048B  }
  75% { box-shadow: 0px 0px 2px #A6048B  }
  100% { box-shadow: 0px 0px 0px #A6048B  }

`

export const LogoText = styled.h1`
  animation: ${pulseAnimation} 3s linear infinite;
  display: flex;
  align-items: center;
  padding: 0px 20px ;
  height:60px ;
  border-radius: 30px;
  a{
  text-decoration: none;
  color: white;
  }
`

export const Head = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /*box-shadow: 0px 0.2px 10px 0px black;*/
  padding: 0px 40px;
`

export const Icon = styled.div`
  display: flex;
  grid-column: 1;
`

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-column: 2;
`
export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  li{
    margin-right: 40px;
    a{
      color: white;
      text-decoration: none;
      text-shadow: 0px 2px 5px rgb(255, 0, 212)
    }
    
  }
`
