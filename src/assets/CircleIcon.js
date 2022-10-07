import React from 'react'
import styled from 'styled-components'
import circleIcon from './svg/close-circle.svg'

function CircleIcon() {
   return <Img src={circleIcon} />
}

export default CircleIcon

const Img = styled.img`
   height: 24px;
   width: 24px;
   border-radius: 0px;
`
