import React from 'react'
import styled from 'styled-components'
import controlsIcon from '../../../assets/svg/Controls Icon (1).svg'

function ControllsMenu({ reverseIcon }) {
   return <ImgControlls src={controlsIcon} reverse={reverseIcon} />
}

export default ControllsMenu

const ImgControlls = styled.img`
   src: ${(p) => p.src};
   transform: ${(p) => p.reverse};
`
