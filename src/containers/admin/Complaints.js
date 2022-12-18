import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import HolidayModal from '../../components/users/HolidayModal'
import { getComplaintsUser } from '../../store/slices/complaints/complaints'
import { deleteHoliday } from '../../store/slices/HolidayActions'
import ComplaintsCard from './ComplaintsCard'

function Complaints() {
   const { complaints } = useSelector((state) => state.complaints)

   const [params, setParams] = useSearchParams()

   const { modal } = Object.fromEntries(params)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getComplaintsUser())
   }, [])

   const openDeleteModal = (id) => dispatch(deleteHoliday(id))

   const openEdditModal = (id) => setParams({ modal: 'EDDIT-HOLIDAY', id })

   const onCloseModalForAddition = () => setParams({})
   console.log(complaints, 'hello')
   return (
      <Container>
         <ToastContainer />
         <TopPart>
            <Title>Жалобы</Title>
         </TopPart>
         <CardContainer>
            {complaints?.length !== 0 ? (
               complaints?.map((item) => (
                  <ComplaintsCard
                     reason={item?.reason || 'Причина жалобы'}
                     src={item.image}
                     fullName={`${item.firstName} ${item.lastName}`}
                     key={item.id}
                     title={item.wishName}
                     date={item.createdAt}
                     id={item.id}
                     holidayName={item.holidayName}
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
