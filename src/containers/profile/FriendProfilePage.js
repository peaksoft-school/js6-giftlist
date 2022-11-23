import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { CardMedia, CardContent, Typography } from '@mui/material'
import {
   addFriendRequests,
   deleteFriends,
   getFriendProfile,
} from '../../store/slices/FriendProfileAction'
import Button from '../../components/UI/Button'
import BreadCrumbs from '../../components/UI/BreadCrumbs'
import {
   acceptRequestInnerPage,
   rejectRequestInnerPage,
} from '../../store/slices/FriendsActions'
import facebookIcon from '../../assets/svg/facebookWhite.svg'
import vkIcon from '../../assets/svg/vkIconWhite.svg'
import instagramIcon from '../../assets/svg/instagramwhite.svg'
import telegram from '../../assets/svg/telegram.svg'

const FRIEND = 'FRIEND'
const NOT_FRIEND = 'NOT_FRIEND'
const REQUEST_TO_FRIEND = 'REQUEST_TO_FRIEND'

function FriendProfilePage() {
   const { id } = useParams()
   const dispatch = useDispatch()
   const { friend } = useSelector((state) => state.friend)
   const profileId = useSelector((state) => state.auth.user.id) // register user
   console.log(friend)
   console.log(profileId)

   const friendId = useSelector((state) => state.friend.friend.id)
   console.log(friendId)
   useEffect(() => {
      if (id) {
         dispatch(getFriendProfile(id))
      }
   }, [id, dispatch])

   console.log(id)

   const addToFriendHandler = () => {
      dispatch(addFriendRequests({ id, dispatch }))
   }
   const deleteFriendHandler = () => {
      dispatch(deleteFriends({ id, dispatch }))
   }
   const acceptToFriendHandler = () => {
      dispatch(acceptRequestInnerPage({ id, dispatch }))
   }
   const rejectRequestHandler = () => {
      dispatch(rejectRequestInnerPage({ id, dispatch }))
   }

   const renderButtons = () => {
      if (friend.status === FRIEND) {
         return (
            <BtnDiv>
               <Button variant="contained" onClick={deleteFriendHandler}>
                  Удалить из друзей
               </Button>
            </BtnDiv>
         )
      }
      if (friend.status === NOT_FRIEND) {
         return (
            <BtnDiv>
               <Button variant="outlined" onClick={addToFriendHandler}>
                  Добавить в друзья
               </Button>
            </BtnDiv>
         )
      }
      if (friend.status === REQUEST_TO_FRIEND && id === friendId) {
         return (
            <BtnDiv>
               <Button variant="outlined" onClick={acceptToFriendHandler}>
                  Принять заявку
               </Button>
               <Button variant="contained" onClick={rejectRequestHandler}>
                  Отклонить
               </Button>
            </BtnDiv>
         )
      }
      return (
         <BtnDiv>
            <Button variant="contained">Запрос отправлен</Button>
         </BtnDiv>
      )
   }
   const pathTranslate = {
      friends: friend.status === FRIEND ? 'Друзья' : 'Запросы в друзья',
      [friendId]: `${friend?.firstName} ${friend?.lastName}`,
   }

   return (
      <Container>
         <Title>
            <BreadCrumbs pathTranslate={pathTranslate} />
            <StatusTitle>
               {friend.status === FRIEND ? 'Друзья' : 'Запросы в друзья'}{' '}
            </StatusTitle>
            <p>/</p>
            <p>{friend?.firstName}</p>
            <p>{friend?.lastName}</p>
         </Title>

         <Content>
            <div>
               <StyledCard>
                  <StyledCardMedia
                     component="img"
                     image={friend?.photo}
                     alt={friend?.photo}
                  />
                  <CardContent>
                     <UserName>
                        <StyledTypography>{friend?.firstName}</StyledTypography>
                        <StyledTypography>{friend?.lastName}</StyledTypography>
                     </UserName>
                     {renderButtons()}
                     <Icons>
                        <div className="icon">
                           <a href="/">
                              <img src={facebookIcon} alt="vkicon" />
                           </a>
                        </div>
                        <div className="icon">
                           <img src={vkIcon} alt="vkicon" />
                        </div>
                        <div className="instagram">
                           <img src={instagramIcon} alt="instagramicon" />
                        </div>
                        <div className="icon">
                           <img src={telegram} alt="telegram" />
                        </div>
                     </Icons>
                  </CardContent>
               </StyledCard>
            </div>
            <InfoDiv>
               <MainInfo>
                  <MainTitle>Основная информация</MainTitle>

                  {friend?.country ? (
                     <div>
                        <GrayTitle>Город:</GrayTitle>
                        <StyledTitle>{friend?.country}</StyledTitle>
                     </div>
                  ) : (
                     ''
                  )}
                  {friend?.dateOfBirth ? (
                     <div>
                        <GrayTitle>Дата рождения:</GrayTitle>
                        <StyledTitle>{friend?.dateOfBirth}</StyledTitle>
                     </div>
                  ) : (
                     ''
                  )}
                  {friend?.email ? (
                     <div>
                        <GrayTitle>Email:</GrayTitle>
                        <StyledTitle>{friend?.email}</StyledTitle>
                     </div>
                  ) : (
                     ''
                  )}

                  {friend?.phoneNumber ? (
                     <div>
                        <GrayTitle>Номер телефона:</GrayTitle>
                        <StyledTitle>{friend?.phoneNumber}</StyledTitle>
                     </div>
                  ) : (
                     ''
                  )}
               </MainInfo>
               <HobbyInfo>
                  {friend?.hobby ? (
                     <div>
                        <MainTitle>Интересы, хобби</MainTitle>
                        <GrayTitle>Интересы, хобби:</GrayTitle>
                        <StyledTitle>{friend?.hobby}</StyledTitle>
                     </div>
                  ) : (
                     ''
                  )}
                  {friend?.important ? (
                     <div>
                        <GrayTitle>Важно знать:</GrayTitle>
                        <StyledTitle>{friend?.important}</StyledTitle>
                     </div>
                  ) : (
                     ''
                  )}
               </HobbyInfo>
               <AdditionalInfo>
                  {friend?.clothingSize ||
                  friend?.shoeSize ||
                  friend?.important ? (
                     <MainTitle>Дополнительное информация</MainTitle>
                  ) : (
                     ''
                  )}
                  {friend?.clothingSize ? (
                     <div>
                        <GrayTitle>Размер одежды:</GrayTitle>
                        <StyledTitle>{friend?.clothingSize}</StyledTitle>
                     </div>
                  ) : (
                     ''
                  )}
                  {friend?.shoeSize ? (
                     <div>
                        <GrayTitle>Размер обуви:</GrayTitle>
                        <StyledTitle>{friend?.shoeSize}</StyledTitle>
                     </div>
                  ) : (
                     ''
                  )}
               </AdditionalInfo>
            </InfoDiv>
         </Content>
      </Container>
   )
}
export default FriendProfilePage

const Container = styled.div`
   height: 100vh;
   margin-right: 20px;
   padding: 90px 40px 0 314px;
   background: rgba(247, 248, 250, 1);
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
`

const Content = styled.div`
   background-color: white;
   width: 1086px;
   height: 464px;
   display: grid;
   grid-template-columns: 230px 290px 300px;
   border-radius: 10px;
   position: sticky;
`
const Title = styled.div`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 17px;
   margin: 30px 0px 31px 0px;
   display: flex;
   flex-direction: row;
   p {
      margin-right: 5px;
   }
`
const StatusTitle = styled.div`
   margin-right: 5px;
   color: #b4b4b4;
`
const StyledCard = styled.div`
   display: flex !important;
   align-items: center !important;
   flex-direction: column !important;
   margin-left: 20px !important;
`
const StyledCardMedia = styled(CardMedia)`
   margin-top: 20px !important;
   width: 187px !important;
   height: 190px !important;
   border-radius: 8px !important;
   border: 1px solid gray !important;
`
const UserName = styled.div`
   width: 187px !important;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   letter-spacing: 0.2px !important;
   color: #020202 !important;
`
const BtnDiv = styled.div`
   button {
      width: 197px !important;
      height: 39px;
      text-transform: none;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 16px;
   }
`
const Icons = styled.div`
   width: 187px;
   display: flex;
   justify-content: space-evenly;
   margin-top: 8px;
   .instagram {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      width: 33px;
      height: 33px;
      background: radial-gradient(
               51.8% 49.8% at 36.25% 96.55%,
               #ffd600 0%,
               #ff6930 48.44%,
               #fe3b36 73.44%,
               rgba(254, 59, 54, 0) 100%
            )
            /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
         radial-gradient(
               182.65% 122.8% at 84.5% 113.5%,
               #ff1b90 24.39%,
               #f80261 43.67%,
               #ed00c0 68.85%,
               #c500e9 77.68%,
               #7017ff 89.32%
            )
            /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
   }
   .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      width: 33px;
      height: 33px;
      background: #1877f2;
   }
   img {
      width: 16px;
      height: 16px;
   }
`
const StyledTypography = styled(Typography)`
   font-family: 'Inter' !important;
   font-style: normal !important;
   font-weight: 600 !important;
   font-size: 18px !important;
   line-height: 22px !important;
   margin-bottom: 24px !important;
`

const InfoDiv = styled.div`
   width: 800px;
   margin-left: 60px;
   margin-right: 40px;
   display: flex;
   flex-direction: column;
`
const MainInfo = styled.div`
   width: auto;
   height: 150px;
   display: flex;
   flex-wrap: wrap;
   /* justify-content: space-between; */
   margin-top: 47px;
   div {
      width: 50%;
   }
`
const HobbyInfo = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   margin-top: 47px;
   div {
      width: 50%;
   }
`
const AdditionalInfo = styled.div`
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   margin-top: 47px;

   div {
      width: 50%;
   }
`

const MainTitle = styled.p`
   width: 100%;
   font-family: 'Inter', sans-serif;
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   display: flex;
   letter-spacing: 0.2px;
   color: #8639b5;
`

const GrayTitle = styled.span`
   font-family: 'Inter', sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   margin-top: 6px;
   display: flex;
   align-items: center;
   color: #5c5c5c;
   padding: 5px 0;
   line-height: 130%;
`
const StyledTitle = styled.span`
   font-family: 'Inter', sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   color: #000000;
   line-height: 130%;
`
