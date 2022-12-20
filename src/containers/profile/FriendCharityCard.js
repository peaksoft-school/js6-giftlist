/* eslint-disable react/jsx-no-useless-fragment */

import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import { useNavigate } from 'react-router-dom'
import MeatBalls from '../../components/UI/meatballs/Menu'
import anonimIcon from '../../assets/svg/reserveAnonim.svg'
import reservedIcon from '../../assets/svg/reservedIcon.svg'
import iconClosed from '../../assets/svg/isClosed.svg'
import { formatDate } from '../../utils/helpers/helpers'
import blockIcon from '../../assets/svg/blockIcon.svg'
import deleteIcon from '../../assets/svg/delete.svg'
import unBlockIcon from '../../assets/svg/unBlock.svg'

const WAIT = 'WAIT'
const RESERVED = 'RESERVED'
const RESERVED_ANONYMOUSLY = 'RESERVED_ANONYMOUSLY'

export default function FriendCharityCard({
   id,
   status,
   isMy,
   title,
   src,
   titleImg,
   onClick,
   condition,
   date,
   reserved,
   reservedAnonim,
   onReservHandler,
   unBlockCharity,
   charityBlock,
   deleteCharity,
   role,
   images,
   reservId,
}) {
   const navigate = useNavigate()

   const olderByCondition = (status, images) => {
      return (
         (status === WAIT && 'В ожидании') ||
         (status === RESERVED_ANONYMOUSLY && 'Забронирован') ||
         (status === RESERVED && (
            <ReservedDiv>
               <StyledAvatarOnBook
                  src={images}
                  onClick={(e) => {
                     e.stopPropagation()
                     navigate(`/user/friends/${reservId}`)
                  }}
               />
               Забронирован
            </ReservedDiv>
         ))
      )
   }

   const array = [
      {
         id: '1',
         icon: reservedIcon,
         name: 'Забронировать',
         getClick: (charityId) => {
            reserved(charityId)
         },
      },
      {
         id: '2',
         icon: anonimIcon,
         name: 'Забронировать анонимно',
         getClick: (charityId) => {
            reservedAnonim(charityId)
         },
      },
   ]
   const unReserved = [
      {
         icon: iconClosed,
         id: '1',
         name: 'Снять бронь',
         getClick: (charityId) => {
            onReservHandler(charityId)
         },
      },
   ]

   const adminCharity = [
      {
         icon: blockIcon,
         id: '1',
         name: 'Заблокировать',
         getClick: () => {
            charityBlock(id)
         },
      },
      {
         icon: deleteIcon,
         id: '1',
         name: 'Удалить',
         getClick: () => {
            deleteCharity(id)
         },
      },
   ]

   const unBlock = [
      {
         icon: unBlockIcon,
         id: '1',
         name: 'Разблокировать',
         getClick: () => {
            unBlockCharity(id)
         },
      },
   ]
   return (
      <ContainerCard status={status}>
         <TopPart>
            <Image src={src} alt={titleImg} onClick={onClick} />
         </TopPart>
         <TitleContent>
            <Title>{title}</Title>
            <Status status={condition}>{condition}</Status>
         </TitleContent>
         <BottomPart>
            <StyledDate>{formatDate.DD_MM_YY(new Date(date))}</StyledDate>
            <ContainerBottom>
               <StyledText>{olderByCondition(status, images)}</StyledText>
               <>
                  {role === 'ADMIN' ? (
                     <StatusDiv>
                        <MeatBalls
                           id={id}
                           options={status === true ? unBlock : adminCharity}
                        />
                     </StatusDiv>
                  ) : (
                     <div>
                        {' '}
                        {status === RESERVED ||
                        status === RESERVED_ANONYMOUSLY ||
                        isMy === false ? (
                           <MeatBalls id={id} options={unReserved} />
                        ) : (
                           <MeatBalls id={id} options={array} />
                        )}
                     </div>
                  )}
               </>
            </ContainerBottom>
         </BottomPart>
      </ContainerCard>
   )
}

const ContainerCard = styled.div`
   height: 250px;
   width: 349px;
   border-radius: 8px;
   background-color: ${(p) => (p.status === true ? '#DCDCDC' : '#FFFFFF')};
   opacity: ${(p) => (p.status === true ? 0.5 : '')};
   border: 1px solid #ffffff;
   border-radius: 8px;
   padding: 16px;
`

const StatusDiv = styled('div')`
   display: flex;
   gap: 4px;
   span {
      padding-top: 3px;
      font-family: 'Inter';
      font-size: 15px;
   }
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
const Status = styled('span')(({ status }) => ({
   fontFamily: 'sans-serif',
   fontWeight: 400,
   fontSize: '13px',
   lineHeight: '15px',
   ...(status === 'Новый' && {
      color: ' #0BA360',
   }),
   ...(status === 'Б/У' && {
      color: ' #FD5200',
   }),
}))
