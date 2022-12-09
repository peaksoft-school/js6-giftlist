import * as React from 'react'
import { Menu as MUIMenu } from '@mui/material'
import styled from 'styled-components'
import { useState } from 'react'
import MenuItem from './MenuItem'
import ControllsMenu from './ControllsMenu'

function Menu({ options, id }) {
   const [anchorEl, setAnchorEl] = useState(null)

   const open = Boolean(anchorEl)

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
   }

   const handleClose = () => setAnchorEl(null)

   return (
      <>
         <ControllsMenu isOpen={handleClick} />
         <MUIMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuWrapper>
               {options.map((option) => (
                  <MenuItem
                     key={Math.random()}
                     icons={option.icon}
                     iconName={option.name}
                     onclick={() => {
                        option.getClick(id)
                     }}
                  >
                     {option.name}
                  </MenuItem>
               ))}
            </MenuWrapper>
         </MUIMenu>
      </>
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
