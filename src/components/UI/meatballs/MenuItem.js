import React from 'react'
import styled from 'styled-components'

function MenuItem({ onclick, children, icons, iconName }) {
   return (
      <Item onClick={onclick}>
         <img src={icons} alt={iconName} />
         {children}
      </Item>
   )
}

export default MenuItem

const Item = styled.div`
   border-radius: 4px;
   background: #ffffff;
   box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
   display: flex;
   gap: 9px;
`
