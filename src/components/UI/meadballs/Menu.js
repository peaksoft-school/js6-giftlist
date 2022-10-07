import React, { useState } from 'react'
import { Menu as MUIMenu } from '@mui/material'
import ControllsMenu from './ControllsMenu'

function Menu({ children, onClose }) {
   const [openMenu, setOpenMenu] = useState(false)

   return (
      <>
         <MUIMenu open={openMenu} onClose={onClose}>
            {children}
         </MUIMenu>
         <ControllsMenu isOpen={() => setOpenMenu(true)} />
      </>
   )
}

export default Menu
