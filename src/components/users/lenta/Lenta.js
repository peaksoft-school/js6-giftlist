/* eslint-disable import/extensions */
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import { Alert, AlertTitle, Snackbar } from '@mui/material'
import listIcon from '../../../assets/svg/listIcons.svg'
import board from '../../../assets/svg/viewIcon.svg'
import notwishImage from '../../../assets/svg/notwish.svg'
import {
   getLentaActions,
   wishReserved,
   wishUnReservation,
} from '../../../store/slices/lentaActions'
import GiftCard from '../../UI/GiftCard'
import IconButton from '../../UI/IconButton'
import AddHoliday from './AddHoliday'
import ComplainModal from './ComplainModal'
import HolidayModal from '../HolidayModal'

function Lenta() {
   const lenta = useSelector((state) => state.lenta.lenta)

   const [params, setParams] = useSearchParams()

   const { open, page } = Object.fromEntries(params)

   const navigate = useNavigate()

   const dispatch = useDispatch()

   const onListCartTranlete = () => setParams({ page: 'COLUMN-VIEW' })
   const onColumCartTranlete = () => setParams({ page: 'VIEW' })

   const openHolidayAddedModal = (_, wishId) => {
      setParams({ open: 'CREATE-HOLIDAY', wishId })
   }

   useEffect(() => {
      dispatch(getLentaActions())
   }, [])

   const navigateHandle = (id) => navigate(`/user/lenta/${id}/inner-page`)

   const onCloseModal = () => setParams({})

   const openAddModalHoliday = () => {
      setParams({
         open: 'ADD-HOLIDAY',
      })
   }

   const onReservedWish = (id) => {
      dispatch(wishReserved({ id, isAnonymous: false }))
   }
   const reservedAnonim = (id) => {
      dispatch(wishReserved({ id, isAnonymous: true }))
   }
   const unReservedHandle = (id) => {
      dispatch(wishUnReservation(id))
   }
   console.log(lenta, 'lenta')
   const onCloseHanlder = () => setIsOpen(false)
   const openModalComplains = (id) => setParams({ open: 'OPEN-COMPLAIN', id })

   const [isOpen, setIsOpen] = useState(false)

   const renderLenta = useCallback(() => {
      if (lenta.feeds?.length) {
         return lenta?.feeds.map((item) => (
            <React.Fragment key={item.wishId}>
               <GiftCard
                  holidayId={item.holiday.holidayId}
                  giftName={item.holiday.name}
                  ribbonDate={item.holiday.localDate}
                  ribbonUsersName={item.userSearchResponse.fullName}
                  ribbonUsersImage={item.userSearchResponse.image}
                  userId={item.userSearchResponse.userId}
                  ribbonBirthday={item.wishName}
                  leftImg={item.image}
                  ribbonBooked={item.status}
                  changeCards={page}
                  postDate={item.holiday.localDate}
                  newGift={item.holiday.name}
                  booked={item.status}
                  fullName={item.userSearchResponse.fullName}
                  postName={item.wishName}
                  userPost={item.image}
                  openModal={openHolidayAddedModal}
                  navigateInnerPage={navigateHandle}
                  id={item.wishId}
                  isMy={item.isMy}
                  openModalComplains={openModalComplains}
                  onReservedWish={onReservedWish}
                  reservedAnonim={reservedAnonim}
                  unReservedHandle={unReservedHandle}
                  reservedImage={item.userFeedResponse.image}
                  avatarImages={item.userSearchResponse.image}
                  ribbonAvatarimages={item.userFeedResponse.image}
                  reservId={item.userFeedResponse.userReservoirId}
                  ribbonImage={item.image}
               />
            </React.Fragment>
         ))
      }
      return (
         <div style={{ width: '100%', height: '100vh' }}>
            <NotWishFrends>
               <NotWishImage src={notwishImage} alt="notImage" />
               <h4>Ничего нет</h4>
               <p>
                  Здесь будет отображен список желаемых
                  <br /> подарков ваших друзей.
               </p>
            </NotWishFrends>
         </div>
      )
   }, [lenta, page])

   return (
      <Container>
         <Snackbar
            open={isOpen}
            onClose={isOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            style={{ width: '500px' }}
         >
            <Alert severity="success" onClose={onCloseHanlder}>
               <AlertTitle>Спасибо что сообщили нам об этом</AlertTitle>
               Ваши отзывы помогают нам сделать сообщество GIFT LIST безопасной
               средой для всех.
            </Alert>
         </Snackbar>
         <ToastContainer />
         <TopPart>
            <Title>Лента</Title>
            <TopPartBtnContainer>
               <IconWrapper>
                  <BtnBorder>
                     <IconButton image={board} onClick={onColumCartTranlete} />
                  </BtnBorder>
                  <BtnBorder>
                     <IconButton
                        image={listIcon}
                        onClick={onListCartTranlete}
                     />
                  </BtnBorder>
               </IconWrapper>
            </TopPartBtnContainer>
         </TopPart>

         <CardContainer>{renderLenta()}</CardContainer>
         <HolidayModal isOpen={open === 'ADD-HOLIDAY'} onClose={onCloseModal} />
         <AddHoliday
            isOpen={open === 'CREATE-HOLIDAY'}
            onClose={onCloseModal}
            openAddModalHoliday={openAddModalHoliday}
         />
         <ComplainModal
            setIsOpen={setIsOpen}
            isOpen={open === 'OPEN-COMPLAIN'}
            onClose={onCloseModal}
         />
      </Container>
   )
}

export default Lenta

const Container = styled('div')`
   padding: 90px 40px 0 314px;
   background: #f7f8fa;
   width: 100%;
   height: 100vh;
`

const NotWishFrends = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   display: flex;
   align-items: center;
   text-align: center;
   letter-spacing: 0.2px;
   color: #020202;

   h4 {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: #020202;
      padding-bottom: 19px;
   }
`
const NotWishImage = styled('img')`
   object-fit: cover;
`
const BtnBorder = styled('div')`
   border: 1px solid #ebeaed;
   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
   border-radius: 4px 0px 0px 4px;
   height: 39px;
   width: 41px;
   display: flex;
   justify-content: center;
`
const TopPart = styled('div')`
   display: flex;
   justify-content: space-between;
   padding-top: 30px;
`

const CardContainer = styled('div')`
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
`
const TopPartBtnContainer = styled('div')`
   background-color: #fbfafc;
   display: flex;
   padding-right: 44px;
`
const IconWrapper = styled('div')`
   display: flex;
`
const Title = styled('h4')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 24px;
   display: flex;
   align-items: center;
   letter-spacing: 0.2px;
   /* padding-top: 27px; */
`
