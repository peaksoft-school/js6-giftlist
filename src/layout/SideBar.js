import * as React from 'react'
import styled from 'styled-components'

export default function Sidebar({ listData = [] }) {
   return (
      <Container>
         <Title>Gift list</Title>
         {listData.map((item) => (
            <LinkWrapper key={item.id}>
               <img src={item.icon} alt={item.iconName} />
               <Links>
                  <ListItemsText>{item.text}</ListItemsText>
               </Links>
            </LinkWrapper>
         ))}
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
   color: #ffffff;
   letter-spacing: 0.5px;
   padding-top: 3px;
   font-family: 'Montserrat', sans-serif;
   font-style: normal;
   font-weight: 400;
`
const Links = styled('div')`
   border-radius: 8px;
   text-decoration: none;
   height: 50px;
   width: 254px;
   border-radius: 8px;
   padding: 10px 60px;
`
