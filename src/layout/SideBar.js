import * as React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { sidebarRoles } from '../utils/constants/constants'

export default function Sidebar() {
   const { role } = useSelector((state) => state.auth.user)

   return (
      <Container>
         <Title>Gift list</Title>
         {sidebarRoles[role]?.map((item) => (
            <LinkWrapper key={item.id}>
               <span>{item.icon}</span>
               <Links>
                  <ListItemsText>{item.pathName}</ListItemsText>
               </Links>
            </LinkWrapper>
         ))}
      </Container>
   )
}

const LinkWrapper = styled.div`
   display: flex;
   & span {
      position: relative;
      left: 40px;
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
   letter-spacing: 1px;
   margin-bottom: 10px;
`

const ListItemsText = styled('div')`
   font-size: 16px;
   color: #ffffff;
   letter-spacing: 0.5px;
   padding-top: 3px;
   font-family: 'Montserrat', sans-serif;
   font-style: normal;
   font-weight: 400;
   cursor: pointer;
`
const Links = styled('div')`
   border-radius: 8px;
   text-decoration: none;
   height: 50px;
   width: 254px;
   border-radius: 8px;
   padding: 0px 60px;
`
