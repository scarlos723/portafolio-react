import styled from 'styled-components'

export const Section = styled.section`
  position:absolute;
  display: flex;
  height: 100vh;
  width: 100%;
  z-index:10;
`
export const Container = styled.div`
   margin: auto;
   perspective: 700px;
  .cubo{
    width: 200px;
    height: 200px;
    position:relative;
    transform-style: preserve-3d; // Para poder apreciar las transformaciones hijas
    transform: rotateY(40deg) rotateX(40deg) rotateZ(40deg);
    
    .cara{
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .cara:nth-child(1){
      background-color: red;
      transform: translateZ(100px);
    }
    .cara:nth-child(2){
      background-color: darkorange;
      transform: translateX(100px) rotateY(90deg);
    }
    .cara:nth-child(3){
      background-color: blue;
      transform: translateX(-100px) rotateY(90deg);
    }
    .cara:nth-child(4){
      background-color: violet;
      transform: translateY(100px) rotateX(90deg);
    }
    .cara:nth-child(5){
      background-color: black;
      transform: translateY(-100px) rotateX(90deg);
    }
    .cara:nth-child(6){
      background-color: white;
      transform: translateZ(-100px);
    }
  }
`
