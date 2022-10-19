import * as React from 'react'
import styled from 'styled-components'
import CustomLink from './CustomLink'

export default function Sidebar({ listData = [] }) {
   const list = () => (
      <div>
         {listData.map((item) => (
            <LinkWrapper key={item.id}>
               <img src={item.icon} alt={item.iconName} />
               <CustomLink to={item.path}>
                  <ListItemsText>{item.text}</ListItemsText>
               </CustomLink>
            </LinkWrapper>
         ))}
      </div>
   )

   return (
      <Container>
         <Title>Gift list</Title>
         {list()}
      </Container>
   )
}

const LinkWrapper = styled.div`
   display: flex;
   & img {
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
`

const ListItemsText = styled('div')`
   font-size: 16px;
   font-weight: 500;
   color: #ffffff;
   font-family: 'Poppins';
   letter-spacing: 1px;
   padding-top: 3px;
`
