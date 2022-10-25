import * as React from 'react'
import { Menu as MUIMenu } from '@mui/material'
import MenuItem from './MenuItem'
import ControllsMenu from './ControllsMenu'

function Menu(options = []) {
   const [anchorEl, setAnchorEl] = React.useState(null)

   const open = Boolean(anchorEl)

   const handleClick = (event) => setAnchorEl(event.currentTarget)

   const handleClose = () => setAnchorEl(null)

   return (
      <div>
         <ControllsMenu isOpen={handleClick} />
         <MUIMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
            {options.map((option) => (
               <MenuItem>{option}</MenuItem>
            ))}
         </MUIMenu>
      </div>
   )
}
export default Menu
