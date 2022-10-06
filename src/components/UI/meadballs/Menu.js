import React from 'react'
import { Menu as MUIMenu } from '@mui/material'

function Menu({ children, open, onClose }) {
   return (
      <MUIMenu open={open} onClose={onClose}>
         {children}
      </MUIMenu>
   )
}

export default Menu
