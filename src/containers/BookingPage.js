import React, { useEffect, useState } from 'react'

import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
// import notFoundImg from '../assets/icons/giftCard/cancel.svg'
import BookedGiftsCard from '../components/users/BookingGiftCard'
import BookedWishesCard from '../components/users/BookingWishCard'
import {
   addBookingsWish,
   getBookedGifts,
   getBookedWishes,
   postUnReservation,
   unReservation,
} from '../store/slices/BookingActions'

const BookingPage = () => {
   const [isShowWishes, setIsShowWishes] = useState(false)
   const [isShowGifts, setIsShowGifts] = useState(false)
   const dispatch = useDispatch()
   const {
      bookedWishes,
      bookedGifts: { getAllGifts, getReservedCharity },
   } = useSelector((state) => state.booking)

   useEffect(() => {
      dispatch(getBookedWishes())
      dispatch(getBookedGifts())
   }, [])

   const addBookingWish = (id) => {
      dispatch(addBookingsWish({ id }))
   }
   const unReservedBookedWishHandler = (id) => {
      dispatch(postUnReservation({ id }))
   }
   const unReservedBookedGiftHandler = (id) => {
      dispatch(unReservation({ id }))
   }
   const isShowMoreWishes = () => {
      setIsShowWishes(!isShowWishes)
   }
   const lengthWishesCard = bookedWishes.length

   const whichIsShowWishes = isShowWishes ? lengthWishesCard : 3
   const whichTextWishes = whichIsShowWishes < 4 ? 'Смотреть все' : 'Скрыть'
   const textWishes = lengthWishesCard ? true : ''

   const isShowMoreGifts = () => {
      setIsShowGifts(!isShowGifts)
   }

   const bookedGift = getAllGifts?.concat(getReservedCharity)
   const lengthGiftsCard = bookedGift?.length
   console.log(lengthGiftsCard, 'len')
   const whichIsShowGifts = isShowGifts ? lengthGiftsCard : 3
   const whichTextGifts = whichIsShowGifts < 4 ? 'Смотреть все' : 'Скрыть'
   const textGifts = lengthGiftsCard ? true : ''

   const [bookingId, setBookingId] = useState(null)
   console.log(bookingId)
   const getId = (id) => {
      setBookingId(id)
   }
   console.log(bookedWishes, 'fdasd')
   console.log(bookedGift, 'aa')

   return (
      <WrapperPage>
         <Title>Забронированные</Title>
         {textWishes && (
            <WrapperWishes>
               <H2>Желания</H2>
               {lengthWishesCard <= 3 ? (
                  ''
               ) : (
                  <DivIsShow onClick={isShowMoreWishes}>
                     {whichTextWishes}
                  </DivIsShow>
               )}
            </WrapperWishes>
         )}
         <WrapperCard>
            {bookedWishes?.slice(0, whichIsShowWishes)?.map((el) => (
               <BookedWishesCard
                  key={el.id}
                  id={el.id}
                  wishName={el.wishName}
                  holidayName={el.holidayName}
                  date={el.dateOfHoliday}
                  img={el.image}
                  status={el.wishStatus}
                  fullName={el.reservedUserResponse.fullName}
                  avatar={el.reservedUserResponse.image}
                  width
                  margin
               />
            ))}
         </WrapperCard>

         {textGifts && (
            <WrapperWishes>
               <H2>Подарки</H2>
               {lengthGiftsCard <= 3 ? (
                  ''
               ) : (
                  <DivIsShow onClick={isShowMoreGifts}>
                     {whichTextGifts}
                  </DivIsShow>
               )}
            </WrapperWishes>
         )}
         <WrapperCard>
            {bookedGift?.slice(0, whichIsShowGifts)?.map((el) => (
               <BookedGiftsCard
                  key={el.id}
                  userId={el.reservedUserResponse.id}
                  id={el.id}
                  giftName={el.giftName}
                  img={el.image}
                  date={el.date}
                  giftStatus={el.giftStatus}
                  fullName={el.reservedUserResponse.fullName}
                  avatar={el.reservedUserResponse.image}
                  addBookingWish={addBookingWish}
                  unReservedBookedWishHandler={unReservedBookedWishHandler}
                  unReservedBookedGiftHandler={unReservedBookedGiftHandler}
                  status={el.status}
                  getId={getId}
               />
            ))}
         </WrapperCard>
         {bookedWishes?.length || bookedGift?.length ? (
            ''
         ) : (
            <WrapperNotFoundImg>
               {/* <NotFoundImg src={notFoundImg} /> */}
               <h3>Вы пока не добавили !</h3>
            </WrapperNotFoundImg>
         )}
      </WrapperPage>
   )
}

export default BookingPage

const WrapperNotFoundImg = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   gap: 44px;
`

const WrapperPage = styled.div`
   width: 100%;
   height: 100%;
   padding: 90px 40px 0 314px;
   background: #f7f8fa;
`
const Title = styled.h4`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 24px;
   display: flex;
   align-items: center;
   letter-spacing: 0.2px;
`
const WrapperWishes = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   margin: 25px 0 10px 15px;
`
const H2 = styled('div')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
`
const DivIsShow = styled.div`
   margin-right: 39px;
   color: #3772ff;
   border-bottom: 1px solid #3772ff;
   cursor: pointer;
`
const WrapperCard = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 36px;
   justify-content: start;
`
