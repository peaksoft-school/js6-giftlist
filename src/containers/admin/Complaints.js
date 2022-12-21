import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import { getComplaintsUser } from '../../store/slices/complaints/complaints'
import ComplaintsCard from './ComplaintsCard'

function Complaints() {
   const { complaints } = useSelector((state) => state.complaints)
   console.log(complaints, 'hello')

   const dispatch = useDispatch()
   const navigate = useNavigate()

   useEffect(() => {
      dispatch(getComplaintsUser())
   }, [])

   const navigateEdditPage = (id) => {
      navigate(`/admin/complaints/${id}`)
   }

   return (
      <Container>
         <ToastContainer />
         <TopPart>
            <Title>Жалобы</Title>
         </TopPart>
         <CardContainer>
            {Object.values(complaints)?.length !== 0 ? (
               Object.values(complaints)?.map((item) => (
                  <div key={item?.id}>
                     <ComplaintsCard
                        reason={item?.reason || 'Причина жалобы'}
                        wishPhoto={item?.wishPhoto}
                        fullName={`${item?.firstName} ${item?.lastName}`}
                        title={item?.wishName}
                        date={item?.createdAt}
                        id={item?.id || item?.complainerId}
                        wishId={item?.wishId}
                        isBLock={item?.isBLock}
                        holidayName={item?.holidayName}
                        onClick={() =>
                           navigateEdditPage(item?.id || item?.complainerId)
                        }
                     />
                  </div>
               ))
            ) : (
               <NotFoundHolidays>Нет жалоб</NotFoundHolidays>
            )}
         </CardContainer>
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
