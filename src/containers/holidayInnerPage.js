import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import WishCard from '../components/UI/card/WishCard'
import { getHolidayById } from '../store/slices/HolidayActions'
import { deleteWishGift } from '../store/slices/WishlistActions'

function HolidayInnerPage() {
   const holiday = useSelector((state) => state.holiday)

   const { id } = useParams()

   const navigate = useNavigate()

   const dispatch = useDispatch()

   const deleteWishHandle = (id) => {
      dispatch(deleteWishGift(id))
   }

   useEffect(() => {
      dispatch(getHolidayById(id))
   }, [])

   const navigateToInnerEdditPage = (id) => {
      navigate(`/user/holidays/${id}/eddit-page`)
   }

   return (
      <Container>
         <ToastContainer />
         <TopPart>
            <Title>{holiday?.singleHoliday?.name}</Title>
         </TopPart>
         <CardContainer>
            {holiday.singleHoliday?.wishResponse.length ? (
               holiday.singleHoliday?.wishResponse?.map((item) => (
                  <WishCard
                     src={item.image}
                     key={item.id}
                     title={item.wishName}
                     date={item.dateOfHoliday}
                     id={item.id}
                     titleName={holiday?.singleHoliday?.name}
                     status={item.wishStatus}
                     openModalDelete={deleteWishHandle}
                     openEdditModal={navigateToInnerEdditPage}
                  />
               ))
            ) : (
               <NotFoundHolidays>У вас нету праздников</NotFoundHolidays>
            )}
         </CardContainer>
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
