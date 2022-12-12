import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import React, { useEffect } from 'react'
import Avatar from '@mui/material/Avatar'
import notIcon from '../../assets/svg/notFoundIcon.svg'

import {
   getCharity,
   reservedCard,
   unReservedCard,
} from '../../store/slices/admin/charityActions'

import CharityCard from './CharityCard'

function CharityPage() {
   const charity = useSelector((state) => state.charity)

   const navigate = useNavigate()

   const dispatch = useDispatch()

   const onReservHandler = (id) => {
      dispatch(unReservedCard(id))
   }
   useEffect(() => {
      dispatch(getCharity())
   }, [])
   const navigateEdditPage = (id) => {
      navigate(`/admin/charityAdmin/${id}/eddit`)
   }

   const reservedCharity = (id) => {
      dispatch(reservedCard({ id, isAnonymously: false }))
   }
   // const navigateToEdditMy = (id) => {
   //    navigate(`/user/charity/${id}/my-eddit`)
   // }
   const reservedAnonim = (id) => {
      dispatch(reservedCard({ id, isAnonymously: true }))
   }
   return (
      <Container>
         <ToastContainer />
         <TopPart>
            <Div>
               <Title>Благотворительность</Title>
               {charity.charity?.yourCharityResponses?.map((item) => (
                  <React.Fragment key={item.id}>
                     <Avatar
                        src={item.image}
                        style={{ cursor: 'pointer' }}
                        // onClick={() => navigateToEdditMy(item.id)}
                     />
                  </React.Fragment>
               ))}
            </Div>
         </TopPart>

         <CardContainer>
            <StyledDiv>
               {charity.charity?.otherCharityResponses ? (
                  charity.charity?.otherCharityResponses.map((item) => (
                     <div key={item.id}>
                        <CharityCard
                           id={item?.id || item.charityId}
                           image={item.image}
                           condition={item?.condition || item.charityCondition}
                           addedDate={item?.addedDate || item.createdAt}
                           onClick={() =>
                              navigateEdditPage(item?.id || item.charityId)
                           }
                           lastName={item?.lastName}
                           firstName={
                              item?.firstName || item.saveUserResponse.fullName
                           }
                           name={item?.name || item.charityName}
                           reservedCharity={reservedCharity}
                           status={item.status}
                           onReservHandler={onReservHandler}
                           reservedAnonim={reservedAnonim}
                           imageReservoir={
                              item?.reservoir?.image ||
                              item?.reservoirUser?.image
                           }
                        />
                     </div>
                  ))
               ) : (
                  <WrapperNotGift>
                     <NotFoundHolidays>
                        <img src={notIcon} alt="notImage" />
                        <h4>Вы пока не добавили желание!</h4>
                     </NotFoundHolidays>
                  </WrapperNotGift>
               )}
            </StyledDiv>
         </CardContainer>
      </Container>
   )
}

export default CharityPage

const Container = styled('div')`
   height: 100vh;
   padding: 90px 40px 0 314px;
   background: #f7f8fa;
   width: 100%;
`

const WrapperNotGift = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   gap: 44px;
   padding: 0px 40px 0 314px;
`

const TopPart = styled('div')`
   display: flex;
   justify-content: space-between;
   padding-top: 30px;
   padding-bottom: 30px;
`
const NotFoundHolidays = styled('div')`
   font-weight: bold;
   font-size: 30px;
   display: flex;
   flex-direction: column;
   gap: 30px;
   h4 {
      font-family: 'Inter';
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0.20000000298023224px;
      text-align: center;
      color: black;
   }
`
const CardContainer = styled('div')`
   display: flex;
   flex-wrap: wrap;
   gap: 36px;
   justify-content: start;
`
const StyledDiv = styled('div')`
   display: flex;
   flex-wrap: wrap;
   gap: 36px;
   justify-content: start;
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

const Div = styled('div')`
   display: flex;
   gap: 28px;
`
