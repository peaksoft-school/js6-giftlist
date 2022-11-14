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
// import { ReactComponent as Facebook } from '../../assets/svg/facebook.svg'
// import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg'
// // import { ReactComponent as GrayFacebook } from '../assets/icons/facebook.svg'
// // import { ReactComponent as GrayInstagram } from '../assets/icons/instagram.svg'
// // import { ReactComponent as GrayTelegram } from '../assets/icons/telegram.svg'
// // import { ReactComponent as GrayVk } from '../assets/icons/grayVk.svg'
// // import { ReactComponent as Telegram } from '../assets/icons/telegram.svg'
// import { ReactComponent as Vk } from '../assets/icons/wk.svg'
const FRIEND = 'FRIEND'
const NOT_FRIEND = 'NOT_FRIEND'

function FriendProfilePage() {
   const dispatch = useDispatch()
   const userId = useParams()
   const { friend, userInfo } = useSelector((state) => state.friend)
   const friendId = useSelector((state) => state.friend.friend.id)
   useEffect(() => {
      if (userId) {
         dispatch(getFriendProfile(userId))
      }
   }, [userId, dispatch])

   const addToFriendHandler = () => {
      dispatch(addFriendRequests({ friendId, userId, dispatch }))
   }
   const deleteFriendHandler = () => {
      dispatch(deleteFriends({ friendId, userId, dispatch }))
   }
   const renderBtn = () => {
      if (friend.friendStatus === FRIEND) {
         return (
            <ButtonDiv>
               <Button variant="contained" onClick={deleteFriendHandler}>
                  Удалить из друзей
               </Button>
            </ButtonDiv>
         )
      }
      if (friend.friendStatus === NOT_FRIEND) {
         return (
            <ButtonDiv>
               <Button variant="contained" onClick={addToFriendHandler}>
                  Добавить в друзья
               </Button>
            </ButtonDiv>
         )
      }
      return (
         <ButtonDiv>
            <Button variant="contained">Запрос отправлен</Button>
         </ButtonDiv>
      )
   }

   return (
      <Container>
         <div>
            <Card>
               <CardPhoto image={friend?.photo} alt="green iguana" />
               <CardContent>
                  <StyledProfile>
                     <StyledName>{friend?.firstName}</StyledName>
                     <StyledName>{friend?.lastName}</StyledName>
                  </StyledProfile>
                  {renderBtn()}
               </CardContent>
               {/* <StyledCard>
                  <a href={userInfo?.facebookLink}>
                     {userInfo?.facebookLink ? <Facebook /> : <GrayFacebook />}
                  </a>{' '}
                  <a href={userInfo?.instagramLink}>
                     {userInfo?.instagramLink ? (
                        <Instagram />
                     ) : (
                        <GrayInstagram />
                     )}
                  </a>
                  <a href={userInfo?.telegramLink}>
                     {userInfo?.telegramLink ? <Telegram /> : <GrayTelegram />}
                  </a>
                  <a href={userInfo?.vkLink}>
                     {userInfo?.vkLink ? <Vk /> : <GrayVk />}
                  </a>
               </StyledCard> */}
            </Card>
         </div>
         <Div>
            <Title>Основная информация</Title>

            {userInfo?.city ? (
               <div>
                  <GrayTitle>Город:</GrayTitle>
                  <StyledTitle>{userInfo?.city}</StyledTitle>
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
            {userInfo?.dateOfBirth ? (
               <div>
                  <GrayTitle>Дата рождения:</GrayTitle>
                  <StyledTitle>{userInfo?.dateOfBirth}</StyledTitle>
               </div>
            ) : (
               ''
            )}
            {userInfo?.phoneNumber ? (
               <div>
                  <GrayTitle>Номер телефона:</GrayTitle>
                  <StyledTitle>{userInfo?.phoneNumber}</StyledTitle>
               </div>
            ) : (
               ''
            )}
         </Div>
         <Div>
            {userInfo?.hobby ? (
               <div>
                  <Title>Интересы, хобби</Title>
                  <GrayTitle>Интересы, хобби:</GrayTitle>
                  <StyledTitle>{userInfo?.hobby}</StyledTitle>
               </div>
            ) : (
               ''
            )}
            {userInfo?.clothingSize ||
            userInfo?.shoeSize ||
            userInfo?.importantNote ? (
               <Title>Дополнительное информация</Title>
            ) : (
               ''
            )}
            {userInfo?.clothingSize ? (
               <div>
                  <GrayTitle>Размер одежды:</GrayTitle>
                  <StyledTitle>{userInfo?.clothingSize}</StyledTitle>
               </div>
            ) : (
               ''
            )}
            {userInfo?.shoeSize ? (
               <div>
                  <GrayTitle>Размер обуви:</GrayTitle>
                  <StyledTitle>{userInfo?.shoeSize}</StyledTitle>
               </div>
            ) : (
               ''
            )}
            {userInfo?.importantNote ? (
               <div>
                  <GrayTitle>Важно знать:</GrayTitle>
                  <StyledTitle>{userInfo?.importantNote}</StyledTitle>
               </div>
            ) : (
               ''
            )}
         </Div>
      </Container>
   )
}

export default FriendProfilePage

const Container = styled('div')`
   width: 1086px;
   margin-top: 118px;
   /* margin: 0 auto; */
   padding: 0 auto;
   display: flex;
   flex-direction: column;
   height: 100%;
   margin-left: 60px;
`

const Div = styled('div')`
   width: 284px;
   margin-top: 47px;
   margin-left: 40px;
`

const StyledProfile = styled('div')`
   display: flex;
   justify-content: space-around;
`
// const MainCardTitle = styled('div')`
//    font-family: 'Inter', sans-serif;
//    font-style: normal;
//    font-weight: bolder;
//    font-size: 18px;
//    line-height: 22px;
//    letter-spacing: 0.2px;
//    margin-top: 54px;
//    color: #020202;
// `
const Title = styled('p')`
   font-family: 'Inter', sans-serif;
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   display: flex;
   letter-spacing: 0.2px;
   color: #8639b5;
`

const GrayTitle = styled('span')`
   font-family: 'Inter', sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   margin-top: 6px;
   display: flex;
   align-items: center;
   color: #5c5c5c;
   padding: 5px 0;
`
const StyledTitle = styled('span')`
   font-family: 'Inter', sans-serif;
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   color: #000000;
`

// const StyledShowMoreDiv = styled('div')`
//    display: flex;
//    justify-content: flex-end;
//    margin-top: -34px;
//    & p {
//       display: inline;
//       color: blue;
//       cursor: pointer;
//       border-bottom: 1px solid blue;
//    }
// `

// const StyledCardDiv = styled('div')`
//    display: grid;
//    grid-template-columns: repeat(3, 1fr);
//    grid-template-rows: repeat(1, 1fr);
//    grid-column-gap: 36px;
//    grid-row-gap: 36px;
//    padding-top: 20px;
//    padding-bottom: 20px;
// `
const Card = styled('div')`
   display: flex;
   align-items: center;
   flex-direction: column;
`
const CardPhoto = styled(CardMedia)`
   width: 187px;
   height: 190px;
   border-radius: 8px;
   border: 1px solid gray;
`
const StyledName = styled(Typography)`
   font-family: 'Inter', sans-serif;
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   display: flex;
   align-items: center;
   justify-content: center;
   letter-spacing: 0.2px;
   color: #020202;
   margin-bottom: 24px;
`

// const StyledCard = styled(CardActions)`
//    width: 197px;
//    display: flex;
//    justify-content: space-evenly;
// `
const ButtonDiv = styled('div')`
   button {
      width: 197px;
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
