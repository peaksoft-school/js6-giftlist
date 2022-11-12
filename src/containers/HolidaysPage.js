import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import Button from '../components/UI/Button'
import HolidayCard from '../components/UI/HolidayCard'
import HolidayModal from '../components/users/HolidayModal'
import { deleteHoliday, getHoliday } from '../store/slices/HolidayActions'

function HolidaysPage() {
   const holiday = useSelector((state) => state.holiday)

   const dispatch = useDispatch()

   const [isModal, setIsModal] = useState(false)

   const onHandlerOpen = () => setIsModal(true)

   useEffect(() => {
      dispatch(getHoliday())
   }, [])
   const onHandlerDelete = (id) => {
      dispatch(deleteHoliday(id))
   }
   return (
      <>
         <ToastContainer />
         <TopPart>
            <Title>Мои праздники</Title>
            <BtnAdded onClick={onHandlerOpen}>+ Добавить праздник</BtnAdded>
         </TopPart>
         <CardContainer>
            {holiday.holidays?.map((item) => (
               <HolidayCard
                  src={item.image}
                  key={item.id}
                  title={item.name}
                  date={item.dateOfHoliday}
                  getId={item.id}
                  onDelete={onHandlerDelete}
               />
            ))}
         </CardContainer>
         <HolidayModal isOpen={isModal} onClose={() => setIsModal(false)} />
      </>
   )
}

export default HolidaysPage

const TopPart = styled('div')`
   display: flex;
   justify-content: space-between;
   margin-top: 30px;
   margin-bottom: 24px;
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
