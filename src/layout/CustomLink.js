import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useCurrentPath } from '../hooks/useCurrentPath'

function CustomLink({ children, to, ...props }) {
   const match = useCurrentPath()

   return (
      <Navlink to={to} {...props} active={{ propsMatch: match, propsTo: to }}>
         {children}
      </Navlink>
   )
}

export default CustomLink

const Navlink = styled(Link)`
   background-color: ${(p) =>
      p.active.propsMatch === p.active.propsTo ? '#8249b0' : ''};
   border-radius: 8px;
   text-decoration: none;
   height: 50px;
   width: 254px;
   border-radius: 8px;
   padding: 10px 60px;
`
