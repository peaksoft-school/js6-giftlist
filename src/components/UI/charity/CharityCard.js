/* eslint-disable react/jsx-no-useless-fragment */
import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { useNavigate } from 'react-router-dom'
import MeatBalls from '../meatballs/Menu'
import anonimIcon from '../../../assets/svg/reserveAnonim.svg'
import reservedIcon from '../../../assets/svg/reservedIcon.svg'
import iconClosed from '../../../assets/svg/isClosed.svg'
import { formatDate } from '../../../utils/helpers/helpers'

const WAIT = 'WAIT'
const RESERVED = 'RESERVED'
const RESERVED_ANONYMOUSLY = 'RESERVED_ANONYMOUSLY'

export default function CharityCard(props) {
   const navigationToFriend = () => navigate(`/user/friends/${props.userId}`)

   const olderByCondition = (status) => {
      return (
         (status === WAIT && 'ожидании') ||
         (status === RESERVED_ANONYMOUSLY && 'Забронирован анонимно') ||
         (status === RESERVED && (
            <ReservedDiv>
               <StyledAvatarOnBook
                  src={props.imageReservoir}
                  onClick={() => navigate(`/user/friends/${props.reservedId}`)}
               />
               Забронирован
            </ReservedDiv>
         ))
      )
   }
   const array = [
      {
         id: 1,
         icon: reservedIcon,
         name: 'Забронировать',
         getClick: () => {
            props.reservedCharity(props.id)
         },
      },
      {
         id: 2,
         icon: anonimIcon,
         name: 'Забронировать анонимно',
         getClick: () => {
            props.reservedAnonim(props.id)
         },
      },
   ]
   const unReserved = [
      {
         icon: iconClosed,
         id: 1,
         name: 'Снять бронь',
         getClick: () => {
            props.onReservHandler(props.id)
         },
      },
   ]

   const navigate = useNavigate()

   return (
      <Div style={cursor}>
         <StyledCardMedia
            onClick={props.onClick}
            style={cursor}
            component="img"
            image={props.image}
            alt="photo"
         />
         <StyledFirsContent>
            <StyledAvatar
               alt="avatar"
               src={props.userPhoto}
               onClick={navigationToFriend}
            />
            <UserName>
               {props.lastName} {props.firstName}
            </UserName>
         </StyledFirsContent>
         <NameGift>
            {props.name}
            <Status status={props.condition}>{props.condition}</Status>
         </NameGift>
         <StyledSecondContent>
            <StyledDate>
               {formatDate.DD_MM_YY(new Date(props.addedDate))}
            </StyledDate>
            <Wrapper>
               <StyledText>{olderByCondition(props.status)}</StyledText>
               <>
                  {props.status === RESERVED ||
                  props.status === RESERVED_ANONYMOUSLY ? (
                     <MeatBalls id={props.id} options={unReserved} />
                  ) : (
                     <MeatBalls id={props.id} options={array} />
                  )}
               </>
            </Wrapper>
         </StyledSecondContent>
      </Div>
   )
}

const ReservedDiv = styled('div')`
   display: flex;
   align-items: center;
`
const Div = styled(MuiCard)(() => ({
   height: '300px',
   display: 'flex',
   flexDirection: 'column',
   boxSizing: 'border-box',
   background: '#FFFFFF',
   border: '1px solid #FFFFFF',
   borderRadius: '8px',
}))
const cursor = {
   cursor: 'pointer',
}
const StyledAvatar = styled(Avatar)`
   width: 36px;
   height: 36px;
`
const StyledAvatarOnBook = styled(Avatar)`
   width: 20px;
   height: 20px;
   margin-right: 10px;
`
const UserName = styled('h1')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 0.02em;
   padding-left: 12px;
   color: #020202;
`
const Wrapper = styled('div')`
   display: flex;
   align-items: center;
`
const StyledFirsContent = styled(CardContent)(() => ({
   display: 'flex',
   justifyContent: 'left',
   alignItems: 'center',
   height: '36px',
   width: '317px',
   padding: '0',
   margin: '16px',
   order: '-1',
   gridTemplateColumns: '48px 168px 101px',
}))

const StyledSecondContent = styled('div')`
   width: auto;
   margin: 0px 15px;
   display: flex;
   align-items: center;
   align-content: flex-end;
   justify-content: space-between;
   padding-top: 13px;
`
const StyledCardMedia = styled(CardMedia)(() => ({
   borderRadius: '6px',
   width: '317px',
   height: '149px',
   margin: '0 16px 0 16px',
   objectFit: 'cover',
}))
const NameGift = styled('span')(() => ({
   fontFamily: 'sans-serif',
   fontWeight: '500',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   fontSize: '14px',
   lineHeight: '18px',
   fontStyle: 'normal',
   padding: '0px',
   color: '#000000',
   margin: '0 16px 10px 16px',
   order: '-1',
}))
const StyledDate = styled('span')(() => ({
   fontFamily: 'sans-serif',
   fontWeight: '400',
   fontSize: '14px',
   lineHeight: '16.94px',
   color: '#636C84',
}))
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
