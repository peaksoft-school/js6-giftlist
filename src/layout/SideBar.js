import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import styled from 'styled-components'

export default function Sidebar({ listData }) {
   const list = () => (
      <Box>
         <Title>Gift list</Title>
         <List>
            {listData.map((item) => (
               <ListItem key={item.id}>
                  <ListItemButton>
                     <img src={item.icon} alt={item.iconName} />
                     <ListItemsText primary={item.text} />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Box>
   )

   return (
      <div>
         <Container>{list()}</Container>
      </div>
   )
}

const Container = styled('div')`
   background: linear-gradient(180deg, #8639b5 0%, #092056 100%);
   width: 294px;
   height: 100%;
   position: fixed;
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   padding-top: 23px;
`

const ListItemButton = styled('div')`
   height: 50px;
   width: 254px;
   border-radius: 8px;
   display: flex;
   align-items: center;
   gap: 15px;
   padding-left: 25px;
   :active {
      ${(p) => p.active}
   }
   &:hover {
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.3);
      opacity: 0.2;
      border-radius: 8px;
      color: white;
   }
`

const Title = styled.h1`
   font-family: 'Inter';
   font-size: 24px;
   font-weight: 700;
   color: #ffff;
   text-align: center;
   padding-bottom: 30px;
   text-transform: uppercase;
`

const ListItemsText = styled(ListItemText)`
   & .MuiTypography-root {
      font-size: 16px;
      padding-left: 20px;
      font-weight: 500;
      font-style: normal;
      color: #ffffff;
      font-family: 'Poppins';
   }
`
