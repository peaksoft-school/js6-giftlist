import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'

function ListNotification(props) {
   const { firsName, lastName } = props
   const fullName = firsName.concat(` ${lastName}`)

   const status = () => {
      if (props.status === 'ADD_WISH') {
         return (
            <>
               <span>{fullName}</span>
               <Title>{props.message}</Title>
            </>
         )
      }
      if (props.status === 'BOOKED_WISH') {
         return (
            <>
               <span>{props.wishName}</span>
               <Title>
                  {props.message} {fullName}
               </Title>
            </>
         )
      }
      if (props.status === 'BOOKED_WISH_ANONYMOUSLY') {
         return (
            <>
               <span>{props.wishName}</span>
               <Title>
                  {props.message}
                  {fullName}
               </Title>
            </>
         )
      }
      if (props.status === 'REQUEST_TO_FRIEND') {
         return (
            <>
               <span>{fullName}</span>
               <Title> {props.message}</Title>
            </>
         )
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

const Title = styled('p')`
   display: inline;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 19px;
   letter-spacing: 0.02em;
   color: #020202;
`

const WrapperMessage = styled('div')`
   width: 100%;
   margin-left: 15px;
`
const Message = styled('div')`
   width: 100%;
   span {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 19px;
      letter-spacing: 0.02em;
      color: #3772ff;
   }
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
   display: flex;
   align-items: center;
   height: 75px;
   padding: 0 40px 0 20px;
`
