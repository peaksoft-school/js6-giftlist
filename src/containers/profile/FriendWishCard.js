/* eslint-disable react/jsx-no-useless-fragment */
import { useNavigate, useSearchParams } from 'react-router-dom'

import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import anonimIcon from '../../assets/svg/reserveAnonim.svg'
import reservedIcon from '../../assets/svg/reservedIcon.svg'
import complainIcon from '../../assets/svg/complain.svg'
import addInMyGifts from '../../assets/icons/giftCard/add.svg'
import iconClosed from '../../assets/svg/isClosed.svg'
import { formatDate } from '../../utils/helpers/helpers'
import BookingModal from '../../components/users/BookingModal'
import Menu from '../../components/UI/meatballs/Menu'

const WAIT = 'WAIT'
const RESERVED = 'RESERVED'
const RESERVED_ANONYMOUSLY = 'RESERVED_ANONYMOUSLY'

export default function FriendWishCard({
   id,
   src,
   titleImg,
   title,
   titleName,
   onClick,
   date,
   condition,
   reservoir,
   reservedWish,
   reservedWishAnonim,
   unReservedWish,
   openModalComplains,
   isMy,
   userId,
}) {
   const navigate = useNavigate()
   const olderByCondition = (condition, image) => {
      return (
         (isMy === false && condition === WAIT && 'В ожидании') ||
         (isMy === false &&
            condition === RESERVED_ANONYMOUSLY &&
            'Забронирован ананимно') ||
         (isMy === true &&
            condition === RESERVED_ANONYMOUSLY &&
            'Ваше бронирование ') ||
         (isMy === true && condition === RESERVED && 'Ваше бронирование ') ||
         (isMy === false && condition === RESERVED && (
            <ReservedDiv>
               <StyledAvatarOnBook
                  src={image}
                  onClick={() => navigate(`/user/friends/${userId}`)}
               />
               Забронирован
            </ReservedDiv>
         ))
      )
   }

   const [params, setParams] = useSearchParams()
   const { modal } = Object.fromEntries(params)

   const openModalAddedGift = () => setParams({ modal: 'HOLIDAY', id })
   const onCloseModal = () => setParams({})

   const array = [
      {
         id: '1',
         icon: reservedIcon,
         name: 'Забронировать',
         getClick: (wishId) => {
            reservedWish(wishId)
         },
      },
      {
         id: '2',
         icon: anonimIcon,
         name: 'Забронировать анонимно',
         getClick: (wishId) => {
            reservedWishAnonim(wishId)
         },
      },
      {
         id: '3',
         icon: addInMyGifts,
         name: 'Добавить в мои подарки',
         getClick: () => {
            openModalAddedGift()
         },
      },
      {
         id: '4',
         icon: complainIcon,
         name: 'Пожаловаться',
         getClick: () => {
            openModalComplains(id)
         },
      },
   ]
   const myWishes = [
      {
         icon: iconClosed,
         id: '1',
         name: 'Снять бронь',
         getClick: (wishId) => {
            unReservedWish(wishId)
         },
      },
      {
         id: '2',
         icon: addInMyGifts,
         name: 'Добавить в мои подарки',
         getClick: () => {
            openModalAddedGift()
         },
      },
      {
         id: '3',
         icon: complainIcon,
         name: 'Пожаловаться',
         getClick: () => {
            openModalComplains(id)
         },
      },
   ]
   const myNotDesire = [
      {
         id: '1',
         icon: addInMyGifts,
         name: 'Добавить в мои подарки',
         getClick: () => {
            openModalAddedGift()
         },
      },
      {
         id: '2',
         icon: complainIcon,
         name: 'Пожаловаться',
         getClick: () => {
            openModalComplains(id)
         },
      },
   ]

   const reservedAnonymously = () => {
      return (
         (isMy === true && condition === RESERVED_ANONYMOUSLY && (
            <Menu id={id} options={myWishes} />
         )) ||
         (isMy === false && condition === RESERVED_ANONYMOUSLY && (
            <Menu id={id} options={myNotDesire} />
         ))
      )
   }
   const reserved = () => {
      return (
         (isMy === true && condition === RESERVED && (
            <Menu id={id} options={myWishes} />
         )) ||
         (isMy === false && condition === RESERVED && (
            <Menu id={id} options={myNotDesire} />
         ))
      )
   }
   return (
      <ContainerCard id={id}>
         <TopPart>
            <Image src={src} alt={titleImg} onClick={onClick} />
         </TopPart>
         <TitleContent>
            <Title>{title}</Title>
            <EventTitle>{titleName}</EventTitle>
         </TitleContent>
         <BottomPart>
            <StyledDate>{formatDate.DD_MM_YY(new Date(date))}</StyledDate>
            <ContainerBottom>
               <StyledText>{olderByCondition(condition, reservoir)}</StyledText>
               <>
                  {reservedAnonymously()}
                  {reserved()}
                  {condition === WAIT && <Menu id={id} options={array} />}
               </>
            </ContainerBottom>
         </BottomPart>
         <BookingModal
            isOpen={modal === 'CREATE-HOLIDAY'}
            onClose={onCloseModal}
         />
      </ContainerCard>
   )
}

const ContainerCard = styled.div`
   height: 250px;
   width: 349px;
   border-radius: 8px;
   background-color: rgba(255, 255, 255, 1);
   border: 1px solid #ffffff;
   border-radius: 8px;
   padding: 16px;
`

const TopPart = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`

const TitleContent = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 16px;
`

const Title = styled.div`
   font-family: 'Inter';
   font-size: 14px;
   font-weight: 600;
   line-height: 18px;
   letter-spacing: 0em;
   text-align: left;
`

const EventTitle = styled.span`
   font-family: 'Inter';
   font-size: 13px;
   font-weight: 400;
   line-height: 16px;
   letter-spacing: 0em;
   color: #0ba360;
`

const BottomPart = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 14px;
`

const StyledDate = styled.span`
   font-family: 'Inter';
   font-size: 14px;
   font-weight: 400;
   line-height: 17px;
   letter-spacing: 0em;
   text-align: left;
`

const ContainerBottom = styled.div`
   display: flex;
   align-items: center;
`

const Image = styled.img`
   src: ${(p) => p.src};
   height: 149px;
   width: 317px;
   width: 317px;
   height: 149px;
   object-fit: cover;
   border-radius: 6px;
`

const ReservedDiv = styled('div')`
   display: flex;
   align-items: center;
`
const StyledAvatarOnBook = styled(Avatar)`
   width: 20px;
   height: 20px;
   margin-right: 10px;
   cursor: pointer;
`
const StyledText = styled('span')`
   font-family: sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #636c84;
   padding-right: 16px;
`
