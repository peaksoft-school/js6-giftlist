import * as React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import CustomLink from './CustomLink'

export default function Sidebar({ listData }) {
   //    const setActive = ({ isActive }) => (isActive ? 'active-link' : '')

   const list = () => (
      <Box>
         <Title>Gift list</Title>
         <List>
            {listData.map((item) => (
               <LinkWrapper key={item.id}>
                  <img src={item.icon} alt={item.iconName} />
                  <CustomLink to={item.path}>
                     <ListItemsText primary={item.text} />
                  </CustomLink>
               </LinkWrapper>
            ))}
         </List>
      </Box>
   )

   return (
      <div>
         <Container>{list()}</Container>
         <Routes>
            <Route path="/posts" element={<Layout />} />
            <Route path="/posts/:id" element={<div>Hello</div>} />
            <Route path="/main" element={<div>Hello main</div>} />
            <Route path="/main/id" element={<div>Hello id</div>} />
         </Routes>
      </div>
   )
}

const LinkWrapper = styled.div`
   display: flex;
   & img {
      position: relative;
      left: 15px;
   }
`

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

// const Link = styled(NavLink).attrs({
//     activeClassName,

//   &.${activeClassName} {
//     background: red;
//     height: 50px;
//     width: 254px;
//     border-radius: 8px;
//     display: flex;
//     align-items: center;
//     gap: 15px;
//     padding-left: 25px;

//   }
// `;
