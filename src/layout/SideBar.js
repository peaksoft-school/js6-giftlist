import * as React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { sidebarRoles } from '../utils/constants/constants'
import { useCurrentPath } from '../api/userCurrentPath'

export default function Sidebar() {
   const { role } = useSelector((state) => state.auth.user)

   const path = useCurrentPath()

   const prefix = role === 'USER' ? 'user' : 'admin'
   return (
      <Container>
         <Title>Gift list</Title>
         {sidebarRoles[role]?.map((item) => (
            <LinkWrapper key={item.pathName}>
               <span>{item.icon}</span>
               <StyledLink
                  to={item.path}
                  active={path === `/${prefix}/${item.path}`}
               >
                  <ListItemsText>{item.pathName}</ListItemsText>
               </StyledLink>
            </LinkWrapper>
         ))}
      </Container>
   )
}

const LinkWrapper = styled.div`
   display: flex;
   align-items: center;
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
   z-index: 4;
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
   width: 150px;
   color: #ffffff;
   padding-top: 3px;
   font-family: 'Inter', sans-serif;
   cursor: pointer;
   padding-top: 14px;
   font-size: 16px;
   font-weight: 500;
   line-height: 24px;
   letter-spacing: 0.01em;
`
const StyledLink = styled(Link)`
   border-radius: 8px;
   text-decoration: none;
   height: 50px;
   width: 254px;
   border-radius: 8px;
   padding: 0px 60px;
   background-color: ${({ active }) => {
      return active ? '#7f48af' : 'none'
   }};
`
