import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import Button from '../../components/UI/Button'
import HolidayCard from '../../components/UI/HolidayCard'
import HolidayModal from '../../components/users/HolidayModal'
import HolidaysEddit from '../../components/users/HolidaysEddit'
import { deleteHoliday, getHoliday } from '../../store/slices/HolidayActions'

function Complaints() {
   const holiday = useSelector((state) => state.holiday)

   const [params, setParams] = useSearchParams()

   const { modal } = Object.fromEntries(params)

   const dispatch = useDispatch()

   const openModalForAddition = () => setParams({ modal: 'CREATE-HOLIDAY' })

   useEffect(() => {
      dispatch(getHoliday())
   }, [dispatch])

   const openDeleteModal = (id) => dispatch(deleteHoliday(id))

   const openEdditModal = (id) => setParams({ modal: 'EDDIT-HOLIDAY', id })

   const onCloseModalForAddition = () => setParams({})

   return (
      <Container>
         <ToastContainer />
         <TopPart>
            <Title>Мои праздники</Title>
            <BtnAdded onClick={openModalForAddition}>
               + Добавить праздник
            </BtnAdded>
         </TopPart>
         <CardContainer>
            {holiday.holidays.length !== 0 ? (
               holiday.holidays?.map((item) => (
                  <HolidayCard
                     src={item.image}
                     key={item.id}
                     title={item.name}
                     date={item.dateOfHoliday}
                     id={item.id}
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
         {modal === 'EDDIT-HOLIDAY' && (
            <HolidaysEddit
               isOpen={modal === 'EDDIT-HOLIDAY'}
               onClose={onCloseModalForAddition}
               props={holiday.singleHoliday}
            />
         )}
      </Container>
   )
}

export default Complaints

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
