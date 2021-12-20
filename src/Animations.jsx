import { css, keyframes } from 'styled-components'

const PulseKeyframes = keyframes`
  0% { box-shadow: 0px 0px 0px #A6048B  }
  25% { box-shadow: 0px 0px 2px #A6048B  }
  50% { box-shadow: 0px 0px 20px #A6048B  }
  75% { box-shadow: 0px 0px 2px #A6048B  }
  100% { box-shadow: 0px 0px 0px #A6048B  }

`
const PulseTextKeyframes = keyframes`
  0% {text-shadow: 0px 2px 5px rgb(255, 0, 212)  }
  25% { text-shadow: 0px 2px 15px rgb(255, 0, 212) }
  50% { text-shadow: 0px 2px 5px rgb(255, 0, 212)  }
  75% { text-shadow: 0px 2px 15px rgb(255, 0, 212) }
  100% {text-shadow: 0px 2px 5px rgb(255, 0, 212)  }

`

const GiroKeyframes = keyframes`
  0%{
    transform:rotate(0deg);
  }
  50%{
    transform:rotate(180deg);
  }
  100%{
    transform: rotate(359deg);
  }
  
`

export const PulseAnimation = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${PulseKeyframes} ${type};
`

export const PulseTextAnimation = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${PulseTextKeyframes} ${type};
`
export const GiroAnimate = ({ time = '1s', type = 'linear' } = {}) => css`
animation: ${time} ${GiroKeyframes} ${type} infinite;
`
