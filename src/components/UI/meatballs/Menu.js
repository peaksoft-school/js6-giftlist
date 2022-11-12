import * as React from 'react'
import { Menu as MUIMenu } from '@mui/material'
import styled from 'styled-components'
import MenuItem from './MenuItem'
import ControllsMenu from './ControllsMenu'

function Menu({ options, onGetIdHandler }) {
   const [anchorEl, setAnchorEl] = React.useState(null)

   const open = Boolean(anchorEl)

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => setAnchorEl(null)

   return (
      <div>
         <ControllsMenu isOpen={handleClick} />
         <MUIMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuWrapper>
               {options.map((option) => (
                  <MenuItem
                     icons={option.icon}
                     iconName={option.name}
                     onclick={onGetIdHandler}
                  >
                     {option.name}
                  </MenuItem>
               ))}
            </MenuWrapper>
         </MUIMenu>
      </div>
   )
}
export default Menu

const MenuWrapper = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   row-gap: 16px;
   padding: 10px 0;
`
