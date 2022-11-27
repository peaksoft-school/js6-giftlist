import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import Button from '../components/UI/Button'
import WishCard from '../components/UI/card/WishCard'
import HolidayModal from '../components/users/HolidayModal'
import { getHolidayById } from '../store/slices/HolidayActions'
import { deleteWishGift } from '../store/slices/WishlistActions'

function HolidayInnerPage() {
   const holiday = useSelector((state) => state.holiday)

   const [params, setParams] = useSearchParams()

   const { id } = useParams()

   const navigate = useNavigate()

   const { modal } = Object.fromEntries(params)

   const dispatch = useDispatch()

   const openDeleteModal = (id) => dispatch(deleteWishGift(id))

   useEffect(() => {
      dispatch(getHolidayById(id))
   }, [])

   const openModalForAddition = () => setParams({ modal: 'CREATE-HOLIDAY' })

   const openEdditModal = (id) => navigate(`/user/holidays/${id}/eddit-page`)

   const onCloseModalForAddition = () => setParams({})

   return (
      <Container>
         <ToastContainer />
         <TopPart>
            <Title>{holiday?.singleHoliday?.name}</Title>
            <BtnAdded onClick={openModalForAddition}>
               + Добавить праздник
            </BtnAdded>
         </TopPart>
         <CardContainer>
            {holiday.singleHoliday?.wishResponse.length !== 0 ? (
               holiday.singleHoliday?.wishResponse?.map((item) => (
                  <WishCard
                     src={item.image}
                     key={item.id}
                     title={item.wishName}
                     date={item.dateOfHoliday}
                     id={item.id}
                     titleName={holiday?.singleHoliday?.name}
                     status={item.wishStatus}
                     openModalDelete={openDeleteModal}
                     openEdditModal={openEdditModal}
                  />
               ))
            ) : (
               <NotFoundHolidays>У вас нету праздников</NotFoundHolidays>
            )}
         </CardContainer>
         <HolidayModal
            isOpen={modal === 'CREATE-HOLIDAY'}
            onClose={onCloseModalForAddition}
         />
      </Container>
   )
}

export default HolidayInnerPage

const Container = styled('div')`
   height: 100vh;
   padding: 90px 40px 0 314px;
   background: rgba(247, 248, 250, 1);
   width: 100%;
`

const TopPart = styled('div')`
   display: flex;
   justify-content: space-between;
   margin-top: 30px;
   margin-bottom: 24px;
   width: 100%;
`
const NotFoundHolidays = styled('div')`
   position: absolute;
   left: 750px;
   top: 400px;
   font-weight: bold;
   font-size: 30px;
`
const CardContainer = styled('div')`
   display: flex;
   flex-wrap: wrap;
   gap: 36px;
   justify-content: start;
`

const Title = styled('h4')`
   font-family: 'Inter';
   font-size: 20px;
   font-weight: 500;
   line-height: 24px;
   letter-spacing: 0.20000000298023224px;
   padding-left: 10px;
   color: black;
`

const BtnAdded = styled(Button)`
   &.MuiButtonBase-root {
      border: 1px solid rgba(141, 148, 158, 1);
   }
   &.cOnipN.MuiButton-root.MuiButton-contained {
      background: rgba(134, 57, 181, 1);
      width: 232px;
      color: #ffffff;
      margin-right: 40px;
   }
`
