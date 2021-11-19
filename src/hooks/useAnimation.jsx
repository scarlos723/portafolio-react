import { css, keyframes } from 'styled-components'

export default (startPos, finalPos, time = '1s', type = 'ease') => {
  const animationKeyFrame = keyframes`
    from{
      ${startPos}
      
    }
    to{
      ${finalPos}
    }
  `
  const animation = css`
    animation: ${time} ${animationKeyFrame} ${type};
    animation-fill-mode: forwards;
    
  `

  return animation
}
