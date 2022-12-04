import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import Button from '../UI/Button'
import {
   acceptFriendRequests,
   rejectFriendRequests,
} from '../../store/slices/FriendsActions'

const FRIENDREQUESTS = 'FRIENDREQUESTS'

const FriendsCard = ({
   id,
   photo,
   fullName,
   countOfWishes,
   countOfHolidays,
   variant,
   onClick,
}) => {
   const dispatch = useDispatch()

   const acceptToFriendHandler = () => {
      dispatch(acceptFriendRequests(id))
   }
   const rejectRequestHandler = () => {
      dispatch(rejectFriendRequests(id))
   }

   return (
      <ContainerCard id={id} onClick={onClick}>
         <AvatarCard src={photo} alt="Image" />
         <FriendsName>
            <p>{fullName}</p>
         </FriendsName>
         <CardDiv>
            <div>
               <NumberSpan>{countOfWishes}</NumberSpan>
               <Title>Желаний</Title>
            </div>
            <div>
               <NumberSpan>{countOfHolidays}</NumberSpan>
               <Title>Праздников</Title>
            </div>
         </CardDiv>
         {variant === FRIENDREQUESTS && (
            <StyledDiv1>
               <Button
                  variant="outlined"
                  onClick={(e) => {
                     e.stopPropagation()
                     acceptToFriendHandler()
                  }}
               >
                  Принять заявку
               </Button>
               <Button
                  variant="contained"
                  onClick={(e) => {
                     e.stopPropagation()
                     rejectRequestHandler()
                  }}
               >
                  Отклонить
               </Button>
            </StyledDiv1>
         )}
      </ContainerCard>
   )
}

export default FriendsCard

const ContainerCard = styled.div`
   width: 260px;
   height: 256px;
   margin-left: 5px;
   background: #ffffff;
   border: 1px solid #ffffff;
   border-radius: 8px;
   display: flex;
   flex-direction: column;
   align-items: center;
   cursor: pointer;
   background: linear-gradient(
      to bottom,
      rgba(134, 57, 181, 0.2) 40%,
      white 30% 100%
   );
`
const AvatarCard = styled.img`
   width: 130px;
   height: 130px;
   margin-top: 16px;
`
const FriendsName = styled.div`
   width: 180px;
   margin-top: 18px;
   margin-bottom: 20px;
   display: flex;
   flex-direction: row;
   justify-content: center;

   p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.02em;
      color: #020202;
   }
`
const CardDiv = styled.div`
   width: 150px;
   display: flex;
   justify-content: space-between;
   text-align: center;
`
const NumberSpan = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 0.02em;
   color: #020202;
`
const Title = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 15px;
   letter-spacing: 0.02em;
   text-transform: capitalize;
   color: #606060;
`
const StyledDiv1 = styled('div')`
   display: grid;
   grid-template-columns: repeat(1, 1fr);
   grid-template-rows: repeat(1, 1fr);
   grid-column-gap: 1px;
   grid-row-gap: 12px;
   margin-top: 24px;
   button {
      width: 225px !important;
      height: 35px !important;
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      text-align: center;
      letter-spacing: 0.02em;
      text-transform: uppercase;
   }
`
