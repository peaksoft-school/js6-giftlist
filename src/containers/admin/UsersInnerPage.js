import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useParams, useSearchParams } from 'react-router-dom'
import {
   CardMedia,
   CardContent,
   Typography,
   Snackbar,
   Alert,
   AlertTitle,
} from '@mui/material'
import { ToastContainer } from 'react-toastify'
import {
   addFriendRequests,
   deleteFriends,
   getFriendProfile,
   addBookingsWish,
   postReserveWish,
   unReservation,
   unReservedCharity,
   reservedCharity,
} from '../../store/slices/FriendProfileAction'
import Button from '../../components/UI/Button'
import BreadCrumbs from '../../components/UI/BreadCrumbs'
import {
   acceptRequestInnerPage,
   getFriendRequest,
   getFriends,
   rejectRequestInnerPage,
} from '../../store/slices/FriendsActions'
import facebookIcon from '../../assets/svg/facebookWhite.svg'
import vkIcon from '../../assets/svg/vkIconWhite.svg'
import instagramIcon from '../../assets/svg/instagramwhite.svg'
import telegram from '../../assets/svg/telegram.svg'
import ComplainModal from '../../components/users/lenta/ComplainModal'
import FriendWishCard from '../profile/FriendWishCard'
import FriendCharityCard from '../profile/FriendCharityCard'
import FriendHolidayCard from '../profile/FriendHolidayCard'

const FRIEND = 'FRIEND'
const NOT_FRIEND = 'NOT_FRIEND'
const REQUEST_TO_FRIEND = 'REQUEST_TO_FRIEND'

function UsersInnerPage() {
   const { id } = useParams()
   const dispatch = useDispatch()
   const [showMoreWishCard, setShowMoreWishCard] = useState(false)
   const [showMoreHolidayCard, setShowMoreHolidayCard] = useState(false)
   const [showMoreCharityCard, setShowMoreCharityCard] = useState(false)
   const { friend } = useSelector((state) => state.friend)
   const { friends } = useSelector((state) => state.friends)
   const { friendRequests } = useSelector((state) => state.friendRequests)
   const [isMyFriend, setIsMyFriend] = useState(false)
   const {
      shoeSize,
      clothingSize,
      phoneNumber,
      hobby,
      status,
      email,
      dateOfBirth,
      country,
      firstName,
      lastName,
      photo,
      important,
   } = friend || {}

   useEffect(() => {
      if (id) {
         dispatch(getFriendProfile(id))
      }
   }, [])
   useEffect(() => {
      dispatch(getFriends())
   }, [])

   useEffect(() => {
      dispatch(getFriendRequest())
   }, [])

   useEffect(() => {
      const friendsMix = [...friends, ...friendRequests]
      const test = friendsMix.some((friend) => friend.id === +id)
      setIsMyFriend(test)
   }, [friends, friendRequests, friend, isMyFriend])

   const [params, setParams] = useSearchParams()
   const { open } = Object.fromEntries(params)
   const onCloseModal = () => setParams({})
   const openModalComplains = (id) => setParams({ open: 'OPEN-COMPLAIN', id })

   const onCloseHanlder = () => setIsOpen(false)
   const [isOpen, setIsOpen] = useState(false)

   const addToFriendHandler = () => {
      dispatch(addFriendRequests({ id }))
   }
   const deleteFriendHandler = () => {
      dispatch(deleteFriends({ id }))
   }
   const acceptToFriendHandler = () => {
      dispatch(acceptRequestInnerPage({ id }))
   }
   const rejectRequestHandler = () => {
      dispatch(rejectRequestInnerPage({ id }))
   }
   const isShowMoreHandler = () => {
      setShowMoreHolidayCard(!showMoreHolidayCard)
   }
   const isShowMoreWishHandler = () => {
      setShowMoreWishCard(!showMoreWishCard)
   }
   const isShowMoreGiftHandler = () => {
      setShowMoreCharityCard(!showMoreCharityCard)
   }
   // charity
   const reserved = (charityId) => {
      dispatch(reservedCharity({ charityId, id, isAnonymously: false }))
   }
   const onReservHandler = (charityId) => {
      dispatch(unReservedCharity({ charityId, id }))
   }
   const reservedAnonim = (charityId) => {
      dispatch(reservedCharity({ charityId, id, isAnonymously: true }))
   }
   // wish -> wait isMy=false
   const reservedWishAnonim = (wishId) => {
      dispatch(postReserveWish({ wishId, id, isAnonymous: true }))
   }
   const reservedWish = (wishId) => {
      dispatch(postReserveWish({ wishId, id, isAnonymous: false }))
   }
   const addBookingWish = (id) => {
      dispatch(addBookingsWish({ id }))
   }
   const unReservedWish = (wishId) => {
      dispatch(unReservation({ wishId, id }))
   }

   const holidayLength = friend.holidayResponses?.length
   const wichIsShowHoliday = showMoreHolidayCard ? holidayLength : 3
   const whichTextHoliday = wichIsShowHoliday < 4 ? 'Смотреть все' : 'Скрыть'
   const wishesLength = friend.wishResponses?.length
   const wichIsShowWish = showMoreWishCard ? wishesLength : 3
   const whichTextWish = wichIsShowWish < 4 ? 'Смотреть все' : 'Скрыть'
   const giftLength = friend.charityResponses?.length
   const wichIsShowGift = showMoreCharityCard ? giftLength : 3
   const whichIsTextGift = wichIsShowGift < 4 ? 'Смотреть все' : 'Скрыть'
   const renderButtons = () => {
      if (status === FRIEND) {
         return (
            <BtnDiv>
               <Button variant="contained" onClick={deleteFriendHandler}>
                  Удалить из друзей
               </Button>
            </BtnDiv>
         )
      }
      if (status === NOT_FRIEND) {
         return (
            <BtnDiv>
               <Button variant="outlined" onClick={addToFriendHandler}>
                  Добавить в друзья
               </Button>
            </BtnDiv>
         )
      }

      if (status === REQUEST_TO_FRIEND && isMyFriend) {
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

   const path = [
      {
         name: status === FRIEND ? 'Друзья' : 'Запросы в друзья',
         to: '/user/friends',
      },
      {
         name: `${firstName} ${lastName}`,
      },
   ]

   return (
      <Container>
         <Snackbar
            open={isOpen}
            onClose={isOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            style={{ width: '500px' }}
         >
            <Alert severity="success" onClose={onCloseHanlder}>
               <AlertTitle>Спасибо что сообщили нам об этом</AlertTitle>
               Ваши отзывы помогают нам сделать сообщество GIFT LIST безопасной
               средой для всех.
            </Alert>
         </Snackbar>
         <ToastContainer />
         <Title>
            <BreadCrumbs paths={path} />
         </Title>

         <Content>
            <div>
               <StyledCard>
                  <StyledCardMedia component="img" image={photo} alt={photo} />
                  <CardContent>
                     <UserName>
                        <StyledTypography>{firstName}</StyledTypography>
                        <StyledTypography>{lastName}</StyledTypography>
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

                  {country ? (
                     <div>
                        <GrayTitle>Город:</GrayTitle>
                        <StyledTitle>{country}</StyledTitle>
                     </div>
                  ) : (
                     ''
                  )}
                  {dateOfBirth ? (
                     <div>
                        <GrayTitle>Дата рождения:</GrayTitle>
                        <StyledTitle>{dateOfBirth}</StyledTitle>
                     </div>
                  ) : (
                     ''
                  )}
                  {email ? (
                     <div>
                        <GrayTitle>Email:</GrayTitle>
                        <StyledTitle>{email}</StyledTitle>
                     </div>
                  ) : (
                     ''
                  )}

                  {phoneNumber ? (
                     <div>
                        <GrayTitle>Номер телефона:</GrayTitle>
                        <StyledTitle>{phoneNumber}</StyledTitle>
                     </div>
                  ) : (
                     ''
                  )}
               </MainInfo>
               <HobbyInfo>
                  {hobby ? (
                     <div>
                        <MainTitle>Интересы, хобби</MainTitle>
                        <GrayTitle>Интересы, хобби:</GrayTitle>
                        <StyledTitle>{hobby}</StyledTitle>
                     </div>
                  ) : (
                     ''
                  )}
                  {important ? (
                     <div>
                        <GrayTitle>Важно знать:</GrayTitle>
                        <StyledTitle>{important}</StyledTitle>
                     </div>
                  ) : (
                     ''
                  )}
               </HobbyInfo>
               <AdditionalInfo>
                  {clothingSize || shoeSize || important ? (
                     <MainTitle>Дополнительное информация</MainTitle>
                  ) : (
                     ''
                  )}
                  {clothingSize ? (
                     <div>
                        <GrayTitle>Размер одежды:</GrayTitle>
                        <StyledTitle>{clothingSize}</StyledTitle>
                     </div>
                  ) : (
                     ''
                  )}
                  {shoeSize ? (
                     <div>
                        <GrayTitle>Размер обуви:</GrayTitle>
                        <StyledTitle>{shoeSize}</StyledTitle>
                     </div>
                  ) : (
                     ''
                  )}
               </AdditionalInfo>
            </InfoDiv>
         </Content>

         {friend.wishResponses?.length > 0 ? (
            <MainCardTitle>Желаемые подарки</MainCardTitle>
         ) : (
            ''
         )}
         {wishesLength <= 3 ? (
            ''
         ) : (
            <StyledShowMoreDiv onClick={isShowMoreWishHandler}>
               <p>{whichTextWish}</p>
            </StyledShowMoreDiv>
         )}

         <StyledCardDiv>
            {friend.wishResponses?.slice(0, wichIsShowWish)?.map((wishes) => {
               return (
                  <FriendWishCard
                     key={wishes.id}
                     id={wishes.id}
                     src={wishes.image}
                     title={wishes.wishName}
                     date={wishes.dateOfHoliday}
                     titleName={wishes?.holidayName}
                     titleImg={wishes?.name}
                     condition={wishes.wishStatus}
                     isMy={wishes.isMy}
                     reservedWish={reservedWish}
                     unReservedWish={unReservedWish}
                     reservedWishAnonim={reservedWishAnonim}
                     addBookingWish={addBookingWish}
                     openModalComplains={openModalComplains}
                  />
               )
            })}
         </StyledCardDiv>
         {friend.holidayResponses?.length > 0 ? (
            <MainCardTitle>Праздники</MainCardTitle>
         ) : (
            ''
         )}
         {holidayLength <= 3 ? (
            ''
         ) : (
            <StyledShowMoreDiv onClick={isShowMoreHandler}>
               <p>{whichTextHoliday}</p>
            </StyledShowMoreDiv>
         )}

         <StyledCardDiv>
            {friend.holidayResponses?.slice(0, wichIsShowHoliday)?.map((el) => {
               return (
                  <FriendHolidayCard
                     key={el.id}
                     id={el.id}
                     date={el.dateOfHoliday}
                     title={el.name}
                     img={el.image}
                  />
               )
            })}
         </StyledCardDiv>
         {friend.charityResponses?.length > 0 ? (
            <MainCardTitle>Благотворительность</MainCardTitle>
         ) : (
            ''
         )}
         {giftLength <= 3 ? (
            ''
         ) : (
            <StyledShowMoreDiv onClick={isShowMoreGiftHandler}>
               <p>{whichIsTextGift}</p>
            </StyledShowMoreDiv>
         )}

         <div>
            <StyledCardDiv>
               {friend.charityResponses
                  ?.slice(0, wichIsShowGift)
                  ?.map((gifts) => {
                     return (
                        <FriendCharityCard
                           key={gifts.id}
                           id={gifts.id}
                           title={gifts?.name}
                           src={gifts.image}
                           // titleName={gifts?.condition}
                           titleImg={gifts?.name}
                           status={gifts.charityStatus}
                           date={gifts.createdDate}
                           reserved={reserved}
                           onReservHandler={onReservHandler}
                           reservedAnonim={reservedAnonim}
                           condition={gifts.condition}
                        />
                     )
                  })}
            </StyledCardDiv>
         </div>
         <ComplainModal
            setIsOpen={setIsOpen}
            isOpen={open === 'OPEN-COMPLAIN'}
            onClose={onCloseModal}
         />
      </Container>
   )
}
export default UsersInnerPage

const Container = styled.div`
   height: 100%;
   margin-right: 20px;
   padding: 90px 40px 0 314px;
   background: rgba(247, 248, 250, 1);
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
`

const Content = styled.div`
   background-color: white;
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
//
const MainCardTitle = styled('div')`
   font-family: 'Inter', sans-serif;
   font-style: normal;
   font-weight: bolder;
   font-size: 18px;
   line-height: 22px;
   letter-spacing: 0.2px;
   margin-top: 54px;
   color: #020202;
`
const StyledShowMoreDiv = styled('div')`
   display: flex;
   justify-content: flex-end;
   margin-top: -34px;
   & p {
      display: inline;
      color: blue;
      cursor: pointer;
      border-bottom: 1px solid blue;
   }
`

const StyledCardDiv = styled('div')`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: repeat(1, 1fr);
   grid-column-gap: 36px;
   grid-row-gap: 36px;
   padding-top: 20px;
   padding-bottom: 20px;
`
