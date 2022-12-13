import { styled, Avatar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import MeatBalls from '../UI/meatballs/Menu'
import blockIcon from '../../assets/svg/blockIcon.svg'
import unBlockIcon from '../../assets/svg/unBlock.svg'

const UserCard = ({
   amount,
   img,
   lastName,
   firstName,
   onClick,
   id,
   onUnBlockUsers,
   onUsersBlock,
   status,
}) => {
   const navigate = useNavigate()

   const options = [
      {
         name: 'Заблокировать',
         icon: blockIcon,
         getClick: () => {
            onUsersBlock(id)
         },
      },
   ]
   const arrayUnblockUser = [
      {
         name: 'Разблокировать',
         icon: unBlockIcon,
         getClick: () => {
            onUnBlockUsers(id)
         },
      },
   ]
   return (
      <StyledContainer onClick={onClick}>
         <StyledAvatar
            src={img}
            alt="image"
            onClick={() => navigate('/admin/users')}
         />
         <FirstNameandLastName>
            {firstName} {lastName}
         </FirstNameandLastName>
         <StyledDiv>
            <MiddleDiv>
               <DesiredGiftsAmount>{amount}</DesiredGiftsAmount>
               <StyledTitle>желаемых</StyledTitle>
               <StyledTitle>подарков</StyledTitle>
            </MiddleDiv>
         </StyledDiv>
         <Wrapper onClick={(e) => e.stopPropagation()}>
            {status === true ? (
               <MeatBalls options={arrayUnblockUser} />
            ) : (
               <MeatBalls options={options} />
            )}
         </Wrapper>
      </StyledContainer>
   )
}
export default UserCard

const MiddleDiv = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 10px;
`
const StyledContainer = styled('div')(() => ({
   borderRadius: '8px',
   boxSizing: 'border-box',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   width: '22%',
   height: '270px',
   background:
      'linear-gradient(to bottom, rgba(134, 57, 181, 0.2) 30%, white 30% 100%)',
   margin: '1% 2% 1% 0%',
}))
const StyledAvatar = styled(Avatar)`
   width: 130px;
   height: 130px;
   margin-top: 16px;
`
const FirstNameandLastName = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 0.02em;
   color: #020202;
   margin: 10px 0 10px 0;
`
const DesiredGiftsAmount = styled('span')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 0.02em;
   color: #020202;
`
const StyledTitle = styled('p')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 12px;
   line-height: 5px;
   letter-spacing: 0.02em;
   text-transform: capitalize;
   color: #606060;
`
const StyledDiv = styled('div')`
   display: flex;
   justify-content: space-between;
   text-align: center;
   margin-bottom: 20px;
`
const Wrapper = styled('div')`
   position: relative;
   bottom: 6%;
   left: 35%;
`
