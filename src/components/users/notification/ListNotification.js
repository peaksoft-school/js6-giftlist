import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'

function ListNotification(props) {
   const userName = props.userFirstName.concat(` ${props.lastName}`)
   const statusNotif = () => {
      if (props.status === 'ADD_WISH') {
         return `добавил желаемый подарок "${props.firstName}${props.lastName}"`
      }
      if (props.status === 'ADD_HOLIDAY') {
         return `добавил новый праздник "${props.firstName}${props.lastName}"`
      }
      if (props.status === 'ADD_WISH_BOOKING') {
         return `было забронировано ${userName}`
      }
      if (props.status === 'ADD_GIFT') {
         return `добавил подарок "${props.firstName}"`
      }

      return statusNotif
   }
   const isAddWish = props.status === 'ADD_WISH' ? userName : ''
   const isAddHoliday = props.status === 'ADD_HOLIDAY' ? userName : ''
   const isAddGift = props.status === 'ADD_GIFT' ? userName : ''
   const isComplainGift = props.status === 'COMPLAINT_TO_GIFT' ? userName : ''
   const isReguest = props.status === 'REQUEST_TO_FRIEND' ? userName : ''

   return (
      <StyledMenuItem>
         <Avatar src={props.image} />
         <WrapperMessage>
            <UserName>
               {isAddHoliday}
               {isAddGift}
               {isAddWish}
               {isComplainGift}
               {isReguest}
            </UserName>
            <Message>{statusNotif()} </Message>
            <NotifDate>{props.createdAt} </NotifDate>
         </WrapperMessage>
      </StyledMenuItem>
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
