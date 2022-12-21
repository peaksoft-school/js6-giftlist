import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import defaultImage from '../../assets/svg/default-image.png'
import BreadCrumbs from '../../components/UI/BreadCrumbs'
import { getMailingById } from '../../store/slices/admin/mailingActions'
import { formatDate } from '../../utils/helpers/helpers'

const MailingInnerPage = () => {
   const dispatch = useDispatch()
   const { id } = useParams()

   const [data, setData] = useState({
      name: '',
      text: '',
      image: null,
      date: '',
   })
   useEffect(() => {
      dispatch(getMailingById(id))
         .unwrap()
         .then((result) => {
            setData({
               ...data,
               name: result.name,
               text: result.text,
               image: result.image,
               date: result.createdAt,
            })
         })
   }, [])
   const path = [
      {
         name: 'Рассылка',
         to: '/admin/mailing',
      },
      {
         name: data.name,
      },
   ]

   return (
      <Container>
         <ToastContainer />
         <BreadCrumbsDiv>
            <BreadCrumbs paths={path} />
         </BreadCrumbsDiv>
         <Div>
            <ImageInnerPage src={data?.image || defaultImage} />
            <WrapperDiv>
               <DivTopPart>
                  <DateGift>
                     <NameGift>{data.name}</NameGift>
                  </DateGift>
               </DivTopPart>
               <Description>{data.text || 'Нет описание'}</Description>
               <Name>
                  Дата добавления:
                  <p>{formatDate.DD_MM_YY(new Date(data.date))}</p>
               </Name>
               <WrapperNameGiftAndDate />
            </WrapperDiv>
         </Div>
      </Container>
   )
}
export default MailingInnerPage

const ImageInnerPage = styled('img')`
   width: 343px;
   height: 343px;
   object-fit: cover;
   border-radius: 8px;
`

const Name = styled('h4')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   display: flex;
   flex-direction: column;
   gap: 6px;
   color: #5c5c5c;
   p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: #000000;
   }
`

const Description = styled('div')`
   max-width: 670px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;

   color: #000000;
`
const BreadCrumbsDiv = styled.div`
   margin-top: 40px;
   margin-bottom: 30px;
   margin-left: 20px;
`
const Container = styled('div')`
   height: 100vh;
   padding: 90px 40px 0 314px;
   background: #f7f8fa;
   width: 100%;
   display: flex;
   flex-direction: column;
`
const WrapperDiv = styled('div')`
   padding-left: 20px;
   display: flex;
   gap: 20px;
   flex-direction: column;
`

const WrapperNameGiftAndDate = styled('div')`
   display: grid;
   grid-template-columns: 211px 472px;
   margin-bottom: 6px;
   width: 95%;
`
const NameGift = styled('h4')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 130%;
   color: #020202;
`
const DateGift = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 6px;
   span {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      /* or 18px */
      width: 150px;
      color: #5c5c5c;
   }
`

const DivTopPart = styled('div')`
   display: flex;
   gap: 65px;
   padding-top: 22px;
`

const Div = styled('div')`
   display: flex;
   margin-left: 0px;
   width: 100%;
   padding: 20px;
   background-color: #ffffff;
   height: 100vh;
   border-radius: 10px;
`
