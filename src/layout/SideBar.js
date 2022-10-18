import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import styled from 'styled-components'
import { NavLink, Routes, Route } from 'react-router-dom'
import Layout from './Layout'

export default function Sidebar({ listData }) {
   const setActive = ({ isActive }) => (isActive ? 'active-link' : '')
   const list = () => (
      <Box>
         <Title>Gift list</Title>
         <List>
            {listData.map((item) => (
               <div key={item.id}>
                  <Link
                     className={setActive}
                     to="/posts"
                     activeClassName="selected"
                  >
                     <img src={item.icon} alt={item.iconName} />
                     <ListItemsText primary={item.text} />
                  </Link>
               </div>
            ))}
         </List>
      </Box>
   )

   return (
      <div>
         <Container>{list()}</Container>
         <Routes>
            <Route path="/posts" element={<Layout />} />
            <Route path="main" />
         </Routes>
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

const Link = styled(NavLink)`
   /* background: red; */
   height: 50px;
   width: 254px;
   border-radius: 8px;
   display: flex;
   align-items: center;
   gap: 15px;
   padding-left: 25px;
`
