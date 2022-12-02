import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import listIcon from '../../../assets/svg/listIcons.svg'
import board from '../../../assets/svg/viewIcon.svg'
import notwishImage from '../../../assets/svg/notwish.svg'

import {
   bookedReserved,
   getLentaActions,
   wishReserved,
} from '../../../store/slices/lentaActions'
import GiftCard from '../../UI/GiftCard'
import IconButton from '../../UI/IconButton'
import AddedHoliday from './AddedHoliday'
import AddHoliday from './AddHoliday'
import ComplainModal from './ComplainModal'

function Lenta() {
   const lenta = useSelector((state) => state.lenta.lenta)
   const [translete, setTranslete] = useState(true)
   console.log(lenta, 'lenta')
   const [params, setParams] = useSearchParams()

   const { open } = Object.fromEntries(params)

   const [holidayId, setHolidayId] = useState()

   const navigate = useNavigate()

   const dispatch = useDispatch()

   const onColumCartTranlete = () => setTranslete(true)

   const onListCartTranlete = () => setTranslete(false)

   const openHolidayAddedModal = (id) => {
      setParams({ open: 'CREATE-HOLIDAY', id })
      setHolidayId(id)
   }

   useEffect(() => {
      dispatch(getLentaActions())
   }, [])

   const navigateHandle = (id) => navigate(`/user/lenta/${id}/inner-page`)

   const onCloseModal = () => setParams({})

   const openAddModalHoliday = () => {
      setParams({ open: 'ADD-HOLIDAY', id: holidayId })
   }

   const onReservedWish = (id) => {
      dispatch(bookedReserved({ id, isAnonymous: false }))
   }
   const reservedAnonim = (id) => {
      dispatch(bookedReserved({ id, isAnonymous: true }))
   }
   const unReservedHandle = (id) => {
      dispatch(wishReserved(id))
   }

   const openModalComplains = (id) => setParams({ open: 'OPEN-COMPLAIN', id })

   return (
      <Container>
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

         <CardContainer>
            {lenta.length ? (
               lenta?.map((item) => (
                  <GiftCard
                     giftName={item.holiday.name}
                     ribbonDate={item.holiday.localDate}
                     ribbonUsersName={item.userSearchResponse.fullName}
                     ribbonUsersImage={item.userSearchResponse.image}
                     ribbonBirthday={item.wishName}
                     leftImg={item.image}
                     ribbonBooked={item.status}
                     changeCards={translete}
                     postDate={item.holiday.localDate}
                     newGift={item.holiday.name}
                     booked={item.status}
                     usersName={item.userSearchResponse.fullName}
                     postName={item.wishName}
                     userImage={item.userSearchResponse.image}
                     userPost={item.image}
                     openModal={openHolidayAddedModal}
                     navigateInnerPage={navigateHandle}
                     id={item.wishId}
                     isMy={item.isMy}
                     openModalComplains={openModalComplains}
                     onReservedWish={onReservedWish}
                     reservedAnonim={reservedAnonim}
                     unReservedHandle={unReservedHandle}
                  />
               ))
            ) : (
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
            )}
         </CardContainer>
         <AddedHoliday isOpen={open === 'ADD-HOLIDAY'} onClose={onCloseModal} />
         <AddHoliday
            isOpen={open === 'CREATE-HOLIDAY'}
            onClose={onCloseModal}
            openAddModalHoliday={openAddModalHoliday}
         />
         <ComplainModal
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
   height: 100%;
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
   justify-content: start;
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
