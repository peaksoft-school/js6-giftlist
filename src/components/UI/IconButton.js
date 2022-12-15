import React from 'react'
import styled from 'styled-components'

function IconButton({ onClick, image, name, children }) {
   return (
      <IconsButton onClick={onClick} type="button">
         <img src={image} alt={name} />
         {children}
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
   display: grid;
   place-items: center;
`
