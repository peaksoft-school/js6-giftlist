import React from 'react'
import { Link } from 'react-router-dom'
import { useCurrentPath } from '../hooks/useCurrentPath'

function CustomLink({ children, to, ...props }) {
   const match = useCurrentPath()

   return (
      <Link to={to} {...props} style={{ color: match === to ? 'red' : 'blue' }}>
         {children}
      </Link>
   )
}

export default CustomLink
