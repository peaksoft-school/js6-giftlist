import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Button from '../components/UI/Button'
import HolidayCard from '../components/UI/HolidayCard'
// import MenuItem from '../components/UI/meatballs/MenuItem'
import HolidayModal from '../components/users/HolidayModal'
import { getHoliday } from '../store/slices/HolidayActions'
// import icons from '../assets/svg/Device - Macbook Pro.svg'

function HolidaysPage() {
   const todos = useSelector((state) => state.holiday)

   const [isOpenModal, setIsOpenModal] = useState(false)

   const dispatch = useDispatch()

   const [isModal, setIsModal] = useState(false)

   const onHandlerOpen = () => setIsModal(true)

   const onControllHandler = () => {
      setIsOpenModal(!isOpenModal)
   }

   useEffect(() => {
      dispatch(getHoliday())
   }, [])
   return (
      <div>
         <TopPart>
            <Title>Мои праздники</Title>
            <BtnAdded onClick={onHandlerOpen}>Добавить праздник</BtnAdded>
         </TopPart>
         <CardContainer>
            {todos.holidays?.map((item) => (
               <HolidayCard
                  isControll={isOpenModal}
                  src={item.image}
                  key={item.id}
                  title={item.name}
                  date={item.dateOfHoliday}
                  onClick={onControllHandler}
               />
            ))}
         </CardContainer>
         <HolidayModal isOpen={isModal} onClose={() => setIsModal(false)} />
      </div>
   )
}

export default HolidaysPage

const TopPart = styled('div')`
   display: flex;
   justify-content: center;
   justify-content: space-between;
   margin-top: 30px;
   margin-bottom: 24px;
`

const CardContainer = styled('div')`
   display: flex;
   flex-wrap: wrap;
   gap: 36px;
   justify-content: center;
   align-items: center;
`

const Title = styled('h4')`
   font-family: 'Inter';
   font-size: 20px;
   font-weight: 500;
   line-height: 24px;
   letter-spacing: 0.20000000298023224px;
   padding-left: 90px;
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
