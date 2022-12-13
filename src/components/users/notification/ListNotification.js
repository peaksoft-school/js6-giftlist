import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'

function ListNotification(props) {
   const { firsName, lastName } = props
   const fullName = firsName.concat(` ${lastName}`)

   const status = () => {
      if (props.status === 'ADD_WISH') {
         return `${fullName}${props.message}`
      }
      if (props.status === 'BOOKED_WISH') {
         return (
            <>
               {props.wishName} {props.message} {fullName}
            </>
         )
      }
      if (props.status === 'BOOKED_WISH_ANONYMOUSLY') {
         return `${props.wishName}${props.message}${fullName}`
      }
      if (props.status === 'REQUEST_TO_FRIEND') {
         return `${fullName} ${props.message}`
      }
      return status
   }

   return (
      <StyledMenuItem>
         <Avatar src={props.photo} />
         <WrapperMessage>
            <Message>{status()}</Message>
            <NotifDate>{props.createdAt} </NotifDate>
         </WrapperMessage>
      </StyledMenuItem>
   )
}

export default ListNotification

const WrapperMessage = styled('div')`
   width: 100%;
   margin-left: 15px;
`
const Message = styled('div')`
   width: 100%;
`
const NotifDate = styled('div')`
   width: 100%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 15px;
   color: #949494;
`
const StyledMenuItem = styled('div')`
   cursor: pointer;
   background: ${(props) => (props.read ? 'white' : 'rgba(134, 57, 181, 0.1)')};
   display: flex;
   align-items: center;
   height: 75px;
   padding: 0 40px 0 20px;
`
