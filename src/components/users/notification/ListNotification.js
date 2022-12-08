import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'

function ListNotification(props) {
   return (
      <MenuStyled>
         <Avatar src={props.image} />
         <WrapperMessage>
            <UserName />
            <Message>{} </Message>
            <Date>{props.createdAt}</Date>
         </WrapperMessage>
      </MenuStyled>
   )
}

export default ListNotification
const UserName = styled('div')`
   color: #3772ff;
`
const WrapperMessage = styled('div')`
   width: 100%;
   margin-left: 15px;
`
const Message = styled('div')`
   width: 100%;
`
const Date = styled('div')`
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 15px;
   color: #949494;
`
const MenuStyled = styled('div')`
   cursor: pointer;
   background: ${(props) => (props.read ? 'white' : 'rgba(134, 57, 181, 0.1)')};
   display: flex;
   align-items: center;
   height: 75px;
   padding: 0 40px 0 20px;
`
