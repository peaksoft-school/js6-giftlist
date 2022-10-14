import React from 'react'
import styled from 'styled-components'

function IconButton({ onClick, image, name }) {
   return (
      <IconsButton onClick={onClick}>
         <img src={image} alt={name} />
      </IconsButton>
   )
}

export default IconButton

const IconsButton = styled.button`
   background-color: transparent;
   border: none;
   outline: none;
   cursor: pointer;
   transition: all 0.2s linear;
   &:hover {
      opacity: 0.8;
   }
`
