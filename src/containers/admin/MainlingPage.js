import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'
import Button from '../../components/UI/Button'
import { getMailing } from '../../store/slices/admin/mailingActions'
import { ReactComponent as Mailing } from '../../assets/svg/mailing.svg'
import MailingModal from './MailingModal'
import MailingCard from './MailingCard'

function MainlingPage() {
   const { mailing } = useSelector((state) => state.mailing)

   const navigate = useNavigate()

   const [params, setParams] = useSearchParams()

   const { modal } = Object.fromEntries(params)

   const dispatch = useDispatch()

   const openModalForAddition = () => setParams({ modal: 'CREATE-MAILING' })

   useEffect(() => {
      dispatch(getMailing())
   }, [])

   const onCloseModalForAddition = () => setParams({})
   const navigateInnerPage = (id) => {
      navigate(`/admin/mailing/${id}/inner-page`)
   }
   console.log(mailing)
   return (
      <Container>
         <ToastContainer />
         <TopPart>
            <Title>Рассылка</Title>
            <BtnAdded onClick={openModalForAddition}>
               <Mailing style={{ width: '18px', height: '18px' }} />
               <span>Отправить рассылку</span>
            </BtnAdded>
         </TopPart>
         <CardContainer>
            {mailing?.length !== 0 ? (
               mailing?.map((item) => (
                  <MailingCard
                     src={item.image}
                     key={item.id}
                     title={item.name}
                     date={item.createdAt}
                     id={item.id}
                     navigateInnerPage={navigateInnerPage}
                  />
               ))
            ) : (
               <NotFoundMailing>Нет рассылок</NotFoundMailing>
            )}
         </CardContainer>
         <MailingModal
            isOpen={modal === 'CREATE-MAILING'}
            onClose={onCloseModalForAddition}
         />
      </Container>
   )
}

export default MainlingPage

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
const NotFoundMailing = styled('div')`
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
      display: flex;
      gap: 6px;
   }
   &.cOnipN.MuiButton-root.MuiButton-contained {
      background: rgba(134, 57, 181, 1);
      width: 232px;
      color: #ffffff;
      margin-right: 40px;
   }
`
