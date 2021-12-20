import styled, { css } from 'styled-components'
import { PulseAnimation, PulseTextAnimation } from './Animations'
import useAnimation from './hooks/useAnimation'

export const Main = styled.main`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImg});
  background-size:cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 0px;
  position:relative;
  perspective: 700px;
`
export const FilterArea = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  
  background: linear-gradient(0deg, 
    rgba(0,0,0,1) 20%, 
      rgba(253,29,29,0) 50%, 
    rgba(0,0,0,1) 80%);
  opacity: .8;
`

const Section = styled.section`
  width: 100%;
  height:100%;
  position: absolute;
  top: 0;
  transition: all 0.5s;
`

// Contact
const contStyles = {
  start: css`
    background-color: #00c24179;
    box-shadow:0px 10px 20px 0px hotpink;
    transform: rotateX(-20deg) rotateY(50deg) rotateZ(10deg) scale(0.15);
    top:-100px;
    left: -20px;
    z-index:1;
  `,
  end: css`
    background-color: #00c2a2;
    box-shadow:0px 0px 20px 5px hotpink;
    transform: rotateY(0deg) rotateZ(0deg)  scale(.6);
    top:0;
    left:0;
    background-color:gold;
    z-index:10;
  `
}
export const SectionCont = styled(Section)`
  ${contStyles.start}
  ${props => props.dep
    ? useAnimation(contStyles.start,
      contStyles.end,
      '.5s',
      'ease')
    : useAnimation(contStyles.end,
      contStyles.start,
      '.5s',
       'ease')}
 
`

// Education
const edStyles = {
  start: css`
    background-color: #8b09096a;
    box-shadow:0px 20px 50px 0px  #f5d7a196;
    transform: rotateY(-10deg) rotateZ(5deg) scale(0.1);
    top:100px;
    left: 150px;
    z-index:1;
  `,
  end: css`
    background-color: #1b0606c8;
    box-shadow:0px 20px 50px 0px  #fff17396;
    transform: rotateY(0deg) rotateZ(0deg) scale(.8);
    top:50;
    left:0;
    z-index:10;
  `
}
export const SectionEd = styled(Section)`
  ${edStyles.start}
  ${props => props.dep
    ? useAnimation(edStyles.start,
      edStyles.end,
      '.5s',
      'ease')
    : useAnimation(edStyles.end,
      edStyles.start,
      '.5s',
       'ease')}
`

// Introduction

const intStyles = {
  start: css`
    background-color: #2c387ca6;
    box-shadow:0px 20px 50px 0px  #73eaff97;
    transform: rotateY(40deg) scale(0.2)  ;
    top:-100px;
    left: -260px;
    z-index:1;
    width:70%;
    
  `,
  end: css`
    background-color: #0c0b31dd;
    box-shadow: 0px 20px 50px 0px  #73eaffc3;
    transform:rotateY(0deg)  scale(0.8) ;
    left:0;
    top:50px;
    z-index:10;
    width:100%;
  `
}
export const IntBase = styled(Section)`
  ${intStyles.start}
  background-color:#254652;
  box-shadow:none;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;

`

export const SectionInt = styled(Section)`
  
    ${intStyles.start}
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;

  
  ${props => props.dep
    ? useAnimation(intStyles.start,
      intStyles.end,
      '.5s',
      'ease')
    : useAnimation(intStyles.end,
      intStyles.start,
      '.5s',
       'ease')}
`

// Skills

const skStyles = {
  start: css`
    background-color: #4400c279;
    box-shadow:0px 10px 20px 0px hotpink;
    transform:rotateY(10deg) scale(0.13);
    width:80%;
    top:160px;
    left: -130px;
    z-index:1;
  `,
  end: css`
    background-color: #4400c279;
    box-shadow:0px 0px 20px 5px hotpink;
    transform: rotateY(0deg) scale(.8);
    left:0;
    top:0;
    z-index:10;
    width:100%;
  `
}
export const SectionSk = styled(Section)`
  ${skStyles.start}
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
 

  ${props => props.dep
    ? useAnimation(skStyles.start,
      skStyles.end,
      '.5s',
      'ease')
    : useAnimation(skStyles.end,
      skStyles.start,
      '.5s',
      'ease')}
 
`

// Nav Styles

export const LogoText = styled.h1`
  /* ${PulseAnimation({ time: '2s', type: 'infinite' })}  */
  display: flex;
  align-items: center;
  padding: 0px 20px ;
  height:60px ;
  border-radius: 30px;
  
  a{
  text-decoration: none;
  color: white;
  font-size:30px;
  font-weight:bolder;
  }
`

export const Head = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  /*box-shadow: 0px 0.2px 10px 0px black;*/
  padding: 0px 40px;
  position: absolute;
  
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
      ${PulseTextAnimation({ time: '2s', type: 'infinite' })}
    }
    
  }
`
