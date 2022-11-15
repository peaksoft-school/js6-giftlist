// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { useSearchParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import Button from '../UI/Button'
import WishCard from '../UI/card/WishCard'
import WishModal from './WishModal'
// import HolidayModal from '../components/users/HolidayModal'
// import HolidaysEddit from '../components/users/HolidaysEddit'
// import { deleteHoliday, getHoliday } from '../store/slices/HolidayActions'

function WishListPage() {
   const wish = useSelector((state) => state.wishGift.wish)
   console.log(wish)
   const navigate = useNavigate()
   // const [params, setParams] = useSearchParams()

   // const { modal } = Object.fromEntries(params)
   // console.log(modal)

   //    const dispatch = useDispatch()

   const openModalForAddition = () => {
      navigate(`add`)
   }

   //    useEffect(() => {
   //       dispatch(getHoliday())
   //    }, [dispatch])

   //    const openDeleteModal = (id) => dispatch(deleteHoliday(id))

   //    const openEdditModal = (id) => setParams({ modal: 'EDDIT-HOLIDAY', id })

   //    const onCloseModalForAddition = () => setParams({})

   return (
      <Container>
         <ToastContainer />
         <TopPart>
            <Title>Список желаний</Title>
            <BtnAdded onClick={openModalForAddition}>
               + Добавить праздник
            </BtnAdded>
         </TopPart>
         <CardContainer>
            {wish.length !== 0 ? (
               wish?.map((item) => (
                  <WishCard
                     src={item.image}
                     key={item.id}
                     title={item.name}
                     date={item.dateOfHoliday}
                     id={item.id}
                     //  openModalDelete={openDeleteModal}
                     //  openEdditModal={openEdditModal}
                  />
               ))
            ) : (
               <NotFoundHolidays>У вас нету праздников</NotFoundHolidays>
            )}
            <WishModal />
         </CardContainer>
      </Container>
   )
}

export default WishListPage

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
