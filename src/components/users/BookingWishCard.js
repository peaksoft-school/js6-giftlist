import * as React from 'react'

import styled from '@emotion/styled'
import { ToastContainer } from 'react-toastify'
import Avatar from '@mui/material/Avatar'
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

export default function BookingWishCard({
   // id,
   avatar,
   fullName,
   holidayName,
   wishName,
   img,
   date,
   status,
   onClick,
}) {
   return (
      <StatusDiv
         // width={width}
         // margin={margin}
         onClick={onClick}
         status={status}
      >
         <BookedCard>
            <ToastContainer />
            <CardContentFirst>
               <Div>
                  <UserAvatar alt="Image" src={avatar} />
                  <UserName>{fullName}</UserName>
               </Div>
               <Holiday>{holidayName}</Holiday>
            </CardContentFirst>
            <WishName>{wishName}</WishName>
            <StyledCardMedia component="img" image={img} alt="Image" />
            <ContentSecond>
               <Date>{date}</Date>
            </ContentSecond>
         </BookedCard>
      </StatusDiv>
   )
}

const StatusDiv = styled.div`
   opacity: ${(props) => (props.status === true ? '0.6' : '1')};
   cursor: pointer;
   /* width: ${(props) => (props.width ? '30%' : '')}; */
   /* margin: ${(props) => (props.margin ? '10px' : '')}; */
`
const BookedCard = styled(MuiCard)`
   /* width: 349px; */
   height: 301px !important;
   display: flex !important;
   flex-direction: column !important;
   box-sizing: border-box !important;
   background: #ffffff !important;
   border: 1px solid #ffffff !important;
   border-radius: 8px !important;
`
const CardContentFirst = styled(CardContent)`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 36px;
   width: 317px;
   padding: 0;
   margin: 16px;
   order: -1;
   grid-template-columns: 48px 168px 101px;
`
const Div = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const UserAvatar = styled(Avatar)`
   width: 36px;
   height: 36px;
   /* margin-right: 10px; */
`
const UserName = styled.h1`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 0.02em;
   padding-left: 12px;
   color: #020202;
`
const Holiday = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 13px;
   line-height: 16px;
   color: #0ba360;
   margin-right: 16px;
`
const WishName = styled.span`
   font-family: 'Inter sans-serif' !important;
   font-style: normal !important;
   font-weight: 500 !important;
   font-size: 16px !important;
   line-height: 130% !important;
   color: #020202 !important;
   padding: 0;
   margin: 0 16px 10px 16px;
   order: -1;
`
const StyledCardMedia = styled(CardMedia)`
   width: auto;
   border-radius: 6px;
   margin: 0 16px 0 16px !important;
   height: 149px;
`
const ContentSecond = styled.div`
   width: auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   align-content: flex-end;
   margin: 0px 15px;
   padding-top: 13px;
`

const Date = styled.span`
   font-family: 'Inter' !important;
   font-style: normal !important;
   font-weight: 400 !important;
   font-size: 14px !important;
   line-height: 17px !important;
   color: #636c84 !important;
`
