import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Checkbox } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import BreadCrumbs from '../UI/BreadCrumbs'
import Button from '../UI/Button'
import ImagePicker from '../UI/ImagePicker'
import {
   getCharityById,
   reservedCard,
   unReservedCard,
} from '../../store/slices/charityActions'

const CharityEdditPage = () => {
   const { id } = useParams()
   const dispatch = useDispatch()
   const [image, setImage] = useState(null)

   const [data, setData] = useState({
      name: '',
      firstName: '',
      description: '',
      addedTime: '',
      condition: '',
      category: '',
      subCategory: '',
      status: '',
      reservoir: '',
   })
   const isCheckedHandlerAnonim = () => {
      dispatch(reservedCard({ id, isAnonymously: true }))
   }
   const onReservedHandler = () => {
      dispatch(reservedCard({ id, isAnonymously: false }))
   }
   const unReservationHanlder = () => {
      dispatch(unReservedCard({ id }))
   }
   useEffect(() => {
      dispatch(getCharityById(id))
         .unwrap()
         .then((result) => {
            console.log(result, 'rererer')
            setData({
               ...data,
               firstName: result.userCharityResponse.fistName,
               name: result.name,
               category: result.category,
               subCategory: result.subCategory,
               condition: result.condition,
               addedTime: result.addedTime,
               status: result.status,
               description: result.description,
               reservoir: result.reservoirResponse,
            })
            setImage(result.image)
         })
   }, [])

   const path = {
      user: 'user',
      charity: 'Благотворительность',
      eddit: [data.name],
   }
   return (
      <Container>
         <ToastContainer />
         <BreadCrumbsDiv>
            <BreadCrumbs translate={path} />
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
                  <UserName>{data.firstName}</UserName>

                  <Status>
                     {data.status === 'WAIT' ? (
                        'В ожидании'
                     ) : (
                        <ReserveContainer>
                           <ReserveAvatar src={data.reservoir.image} />
                           Забронирован
                        </ReserveContainer>
                     )}
                  </Status>
               </User>
               <Title>{data.name}</Title>
               <Description>{data.description}</Description>
               <WrapperNameGiftAndDate>
                  <NameGift>Категория:</NameGift>
                  <DateGift>Состояние:</DateGift>
               </WrapperNameGiftAndDate>
               <WrapperPropsGiftAndDate>
                  <NameCategories>{data.category}</NameCategories>
                  <DateCondition>{data.condition}</DateCondition>
               </WrapperPropsGiftAndDate>
               <WrapperNameGiftAndDate>
                  <NameGift>Подкатегория:</NameGift>
                  <DateGift>Дата добавления:</DateGift>
               </WrapperNameGiftAndDate>
               <WrapperPropsGiftAndDate>
                  <NameCategories>{data.subCategory}</NameCategories>
                  <DateCondition>{data.addedTime}</DateCondition>
               </WrapperPropsGiftAndDate>
               <ButtonWrapper>
                  {data.status === 'RESERVED' ? (
                     <WrapperButton>
                        <Button
                           variant="outlined"
                           onClick={unReservationHanlder}
                        >
                           Снять бронь
                        </Button>
                     </WrapperButton>
                  ) : (
                     <WrapperButton>
                        <div>
                           <Checkbox onChange={isCheckedHandlerAnonim} />
                           Заброниовать анонимно
                        </div>
                        <Button variant="outlined" onClick={onReservedHandler}>
                           Забронировать
                        </Button>
                     </WrapperButton>
                  )}
               </ButtonWrapper>
            </WrapperDiv>
         </Div>
      </Container>
   )
}
export default CharityEdditPage

const ReserveContainer = styled('div')`
   display: flex;
   align-items: center;
   gap: 10px;
`
const Description = styled('div')`
   max-width: 670px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   display: flex;
   align-items: center;
   padding-bottom: 20px;
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
const NameGift = styled('div')`
   color: #5c5c5c;
   font-family: 'Inter';
   font-weight: 400;
   font-size: 14px;
   width: 95%;
`
const DateGift = styled('div')`
   color: #5c5c5c;
   font-family: 'Inter';
   font-weight: 400;
   font-size: 14px;
   width: 95%;
`
const WrapperPropsGiftAndDate = styled('div')`
   display: grid;
   grid-template-columns: 211px 472px;
   margin-bottom: 20px;
   width: 95%;
`
const NameCategories = styled('div')`
   color: #0ba360;
   width: 95%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   display: flex;
   align-items: center;

   color: #000000;
`
const ReserveAvatar = styled(Avatar)``
const DateCondition = styled('div')`
   font-family: 'Inter';
   font-weight: 400;
   font-size: 16px;
   color: #000000;
   line-height: 130%;
`
const Title = styled('h1')`
   color: #3774d0;
   font-size: 24px;
   font-weight: 500;
   width: 95%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 130%;
   padding-top: 12px;
   padding-bottom: 20px;
   color: #020202;
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
   gap: 38px;
   div {
      font-family: 'Inter';
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
   }
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
