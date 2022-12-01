import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { getLentaById } from '../../../store/slices/lentaActions'
import BreadCrumbs from '../../UI/BreadCrumbs'
import Button from '../../UI/Button'
import ImagePicker from '../../UI/ImagePicker'

const InnerLenta = () => {
   const [image, setImage] = useState(null)

   const { id } = useParams()

   const dispatch = useDispatch()

   const [data, setData] = useState({
      despcription: '',
      name: '',
      fullName: '',
      status: '',
      wishId: '',
      wishName: '',
      date: '',
   })

   useEffect(() => {
      dispatch(getLentaById(id))
         .unwrap()
         .then((result) => {
            setData({
               name: result.holidayResponse.name,
               date: result.holidayResponse.localDate,
               fullName: result.searchUserResponse.fullName,
               despcription: result.despcription,
               status: result.status,
               wishName: result.wishName,
               wishId: result.wishId,
            })
            setImage(result.searchUserResponse.image)
         })
   }, [])
   return (
      <Container>
         <ToastContainer />
         <BreadCrumbsDiv>
            <BreadCrumbs translate={['fdsadf']} />
         </BreadCrumbsDiv>
         <Div>
            <ImagePicker
               alt="image"
               width="343px"
               heigth="343px"
               image={image}
               setImage={setImage}
            />
            <WrapperDiv>
               <User>
                  <StyledAvatar alt="avatar" />
                  <UserName>{data.fullName}</UserName>

                  <Status>
                     {true === 'WAIT' ? 'В ожидании' : 'Забронирован'}
                  </Status>
                  <DivTopPart>
                     <DateGift>
                        <span>Название праздника:</span>
                        <NameGift>{data.name}</NameGift>
                     </DateGift>

                     <DateGift>
                        <span>Дата добавления:</span>
                        <DateCondition>{data.date}</DateCondition>
                     </DateGift>
                  </DivTopPart>
               </User>
               <Name>{data.wishName}</Name>
               <Description>{data.despcription || 'Нет описание'}</Description>
               <WrapperNameGiftAndDate />
               <ButtonWrapper>
                  <WrapperButton>
                     <Button variant="transparent">Удалить</Button>
                     <Button variant="outlined">Редактировать</Button>
                  </WrapperButton>
               </ButtonWrapper>
            </WrapperDiv>
         </Div>
      </Container>
   )
}
export default InnerLenta

const Name = styled('h4')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 24px;
   line-height: 29px;
   text-decoration-line: underline;
   color: #3774d0;
   padding-bottom: 16px;
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
`
const User = styled('div')`
   align-items: center;
   display: grid;
   grid-template-columns: 48px 450px 140px;
   margin-bottom: 14px;
   width: 93%;
   padding-top: 35px;
`
const StyledAvatar = styled(Avatar)`
   width: 36px;
   height: 36px;
`
const UserName = styled('h2')`
   box-sizing: border-box;
   margin: 0;

   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 0.02em;

   /* black */

   color: #020202;
`
const Status = styled('p')`
   display: flex;
   justify-content: flex-end;
   color: #3774d0;
   font-family: 'Inter';
   font-weight: 400;
   font-size: 14px;
`
const WrapperNameGiftAndDate = styled('div')`
   display: grid;
   grid-template-columns: 211px 472px;
   margin-bottom: 6px;
   width: 95%;
`
const NameGift = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #0ba360;
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

const DateCondition = styled('p')`
   font-family: 'Inter';
   font-weight: 400;
   font-size: 16px;
   color: #000000;
   line-height: 130%;
`
const DivTopPart = styled('div')`
   display: flex;
   gap: 65px;
   padding-top: 22px;
`

const ButtonWrapper = styled('div')`
   display: flex;
   justify-content: flex-end;
   padding-top: 40px;
   padding-right: 0px;
   margin-right: 40px;
`

const WrapperButton = styled('div')`
   display: flex;
   gap: 42px;
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
