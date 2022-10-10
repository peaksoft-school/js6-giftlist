import * as React from 'react'
import { Menu as MUIMenu } from '@mui/material'
import styled from 'styled-components'
import ControllsMenu from './ControllsMenu'

function Menu({ children }) {
   const [anchorEl, setAnchorEl] = React.useState(null)
   const open = Boolean(anchorEl)

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }
   const handleClose = () => {
      setAnchorEl(null)
   }

   return (
      <div>
         <ControllsMenu isOpen={handleClick} />
         <MUIMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem>{children}</MenuItem>
         </MUIMenu>
      </div>
   )
}
export default Menu

const MenuItem = styled.div``
