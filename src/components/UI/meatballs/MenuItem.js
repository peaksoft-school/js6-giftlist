import React from 'react'
import styled from 'styled-components'

function MenuItem({ onclick, children }) {
   return <Item onClick={onclick}>{children}</Item>
}

export default MenuItem

const Item = styled.div`
   border-radius: 4px;
   background: #ffffff;
   box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
`
