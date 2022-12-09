import * as React from 'react'

import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import MuiCard from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Menu from '../UI/meatballs/Menu'
import cancelBooking from '../../assets/icons/giftCard/cancel.svg'
import addInMyGifts from '../../assets/icons/giftCard/add.svg'
import BookingModal from './BookingModal'

// const GIFT = 'GIFT'
const CHARITY = 'CHARITY'

export default function BookingGiftCard({
   id,
   avatar,
   fullName,
   status,
   giftName,
   giftStatus,
   date,
   img,
   toInnerPage,
   getId,
   // addBookingWish,
   unReservedBookedWishHandler,
   unReservedBookedGiftHandler,
}) {
   const [params, setParams] = useSearchParams()
   const { modal } = Object.fromEntries(params)

   const openModalAddedGift = () => setParams({ modal: 'HOLIDAY', id })
   const onCloseModal = () => setParams({})

   const navigation = [
      {
         icon: addInMyGifts,
         name: 'Добавить в мои подарки',
         id: '1',
         getClick: () => {
            openModalAddedGift()
         },
      },
      {
         icon: cancelBooking,
         name: 'Снять бронь',
         id: '2',
         getClick: () => {
            unReservedBookedWishHandler(id)
         },
      },
   ]
   const cancel = [
      {
         icon: cancelBooking,
         name: 'Снять бронь',
         id: '2',
         getClick: () => {
            unReservedBookedGiftHandler(id)
         },
      },
   ]
   const { bookedGifts } = useSelector((state) => state.booking)
   console.log(bookedGifts)

   return (
      <BookedCard onClick={toInnerPage}>
         <CardContentFirst>
            <UserAvatar alt="img" src={avatar} />
            <UserName>{fullName}</UserName>
         </CardContentFirst>
         <Div>
            <GiftName>{giftName}</GiftName>
            <Status>{status === 'USED' ? 'Б/У' : 'новый'}</Status>
         </Div>
         <StyledCardMedia component="img" image={img} alt="Image" />

         <CardContentSecond>
            <Date>{date}</Date>
            <Wrapper>
               {giftStatus === CHARITY ? (
                  <Menu options={cancel} id={id} getId={getId} />
               ) : (
                  <Menu options={navigation} id={id} />
               )}
            </Wrapper>
         </CardContentSecond>
         <BookingModal
            isOpen={modal === 'CREATE-HOLIDAY'}
            onClose={onCloseModal}
         />
      </BookedCard>
   )
}

const BookedCard = styled(MuiCard)`
   /* width: 349px; */
   height: 301px;
   border: 1px solid #ffffff;
   display: flex;
   flex-direction: column;
   box-sizing: border-box;
   background: #ffffff;
   border-radius: 8px;
   /* opacity: ${(props) => (props.status === true ? '0.5' : '1')}; */
`
const CardContentFirst = styled.div`
   display: flex;
   justify-content: left;
   align-items: center;
   height: 36px;
   width: 317px;
   padding: 0;
   margin: 16px;
   order: -1;
   grid-template-columns: 48px 168px 101px;
`
const UserAvatar = styled(Avatar)`
   width: 36px;
   height: 36px;
   margin-right: 10px;
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

const Div = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;

   /* order: -1; */
`
const GiftName = styled.span`
   font-family: 'sans-serif' !important;
   font-style: normal !important;
   font-weight: 500 !important;
   font-size: 16px !important;
   line-height: 130% !important;
   color: #020202 !important;
   margin: 0 16px 10px 16px !important;
   order: -1 !important;
`
const Status = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 13px;
   line-height: 16px;
   margin: 0 16px 10px 0 !important;
   color: ${(props) => (props.status ? ' #FD5200' : '#0BA360')};
`
const CardContentSecond = styled.div`
   width: auto;
   margin: 0px 15px;
   display: flex;
   align-items: center;
   align-content: flex-end;
   justify-content: space-between;
   padding-top: 5px;
   padding-bottom: 13px;
`

const StyledCardMedia = styled(CardMedia)`
   border-radius: 6px;
   margin: 0 16px 10px 16px !important;
   width: auto;
   height: 149px;
`

const Date = styled.span`
   font-family: 'Inter' !important;
   font-style: normal !important;
   font-weight: 400 !important;
   font-size: 14px !important;
   line-height: 17px !important;
   color: #636c84 !important;
`

const Wrapper = styled('div')`
   display: flex;
   align-items: center;
`
