import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import { useEffect } from 'react'
import Button from '../UI/Button'
import WishCard from '../UI/card/WishCard'
import notIcon from '../../assets/svg/notFoundIcon.svg'
import { deleteWishGift, getWishGift } from '../../store/slices/WishlistActions'

function WishListPage() {
   const wish = useSelector((state) => state.wishGift)

   const navigate = useNavigate()

   const dispatch = useDispatch()

   const openModalForAddition = () => navigate(`new`)

   const openDeleteModal = (id) => dispatch(deleteWishGift(id))

   const openEdditModal = (id) => navigate(`${id}/edit`)

   useEffect(() => {
      dispatch(getWishGift())
   }, [])

   return (
      <Container>
         <ToastContainer />
         {wish.wish.length ? (
            <TopPart>
               <Title>Список желаний</Title>
               <TopPartBtnContainer>
                  <BtnAdded onClick={openModalForAddition}>
                     <Plus>+</Plus> Добавить желание
                  </BtnAdded>
               </TopPartBtnContainer>
            </TopPart>
         ) : (
            ''
         )}

         <CardContainer>
            {wish.wish.length ? (
               wish?.wish.map((item) => (
                  <WishCard
                     isBlock={item.isBlock}
                     wish={wish}
                     datareponse={item.wishStatus}
                     src={item.image}
                     key={item.id}
                     title={item.wishName}
                     date={item.holiday.localDate}
                     id={item.id}
                     titleName={item.holiday.name}
                     titleImg={item.holiday.name}
                     openEdditModal={openEdditModal}
                     openModalDelete={openDeleteModal}
                  />
               ))
            ) : (
               <WrapperNotGift>
                  <NotFoundHolidays>
                     <img src={notIcon} alt="notImage" />
                     <h4>Вы пока не добавили желание!</h4>
                  </NotFoundHolidays>
                  <BtnWrapper>
                     <BtnAdded onClick={openModalForAddition}>
                        <Plus>+</Plus> Добавить желание
                     </BtnAdded>
                  </BtnWrapper>
               </WrapperNotGift>
            )}
         </CardContainer>
      </Container>
   )
}

export default WishListPage

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
`
const BtnWrapper = styled('div')`
   padding-left: 48px;
`
const Plus = styled('span')`
   font-size: 25px;
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
const TopPartBtnContainer = styled('div')`
   background-color: #fbfafc;
   display: flex;
   gap: 16px;
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

const BtnAdded = styled(Button)`
   &.MuiButtonBase-root {
      border: 1px solid rgba(141, 148, 158, 1);
   }
   &.cOnipN.MuiButton-root.MuiButton-contained {
      gap: 8px;
      background: rgba(134, 57, 181, 1);
      width: 232px;
      color: #ffffff;
      margin-right: 40px;
      height: 39px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 19px;
   }
`
