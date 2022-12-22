/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-useless-fragment */
import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { useNavigate } from 'react-router'
import blockedIcon from '../../assets/svg/blocked.svg'
import deleteIcon from '../../assets/svg/deleteIcons.svg'
import iconClosed from '../../assets/svg/icons8-разблокировать.svg'
import { formatDate } from '../../utils/helpers/helpers'
import Menu from '../../components/UI/meatballs/Menu'

export default function CharityCard(props) {
   const array = [
      {
         icon: blockedIcon,
         id: '1',
         name: 'Заблокировать',
         getClick: () => {
            props.blockedCharityHandler(props.id)
         },
      },
      {
         icon: deleteIcon,
         id: '2',
         name: 'Удалить',
         getClick: () => {
            props.deleteHandler(props.id)
         },
      },
   ]
   const unBlocked = [
      {
         icon: iconClosed,
         id: '1',
         name: 'Разблокировать',
         getClick: () => {
            props.unBlockedHandler(props.id)
         },
      },
   ]

   const navigate = useNavigate()

   return (
      <Div background={props.isBlock} style={cursor}>
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
               src={props.photo}
               onClick={() => navigate(`/admin/users/${props.userId}`)}
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
               <>
                  {props.isBlock === false && (
                     <Menu id={props.id} options={array} />
                  )}
                  {props.isBlock === true && (
                     <Menu id={props.id} options={unBlocked} />
                  )}
               </>
            </Wrapper>
         </StyledSecondContent>
      </Div>
   )
}
const Div = styled(MuiCard)`
   height: 300px;
   background-color: ${(props) => (props.background ? '#D6D9DC' : 'white')};
   display: flex;
   flex-direction: column;
   box-sizing: border-box;
   border: 1px solid #ffffff;
   border-radius: 8px;
`
const cursor = {
   cursor: 'pointer',
}
const StyledAvatar = styled(Avatar)`
   width: 36px;
   height: 36px;
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
