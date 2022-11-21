import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import cursorPhoto from '../../../assets/svg/iconBook.svg'
import MeatBalls from '../meatballs/Menu'

export default function CharityCard(props = []) {
   return (
      <Div style={cursor}>
         <StyledCardMedia
            style={cursor}
            component="img"
            image={cursorPhoto}
            alt="photo"
         />
         <StyledFirsContent>
            <StyledAvatar alt="avatar" src={props.avatar} />
            <UserName>{props.userName}</UserName>
         </StyledFirsContent>
         <NameGift>
            {props.data}
            <Status status={props.data} />
         </NameGift>
         <StyledSecondContent>
            <StyledDate>{props.data}</StyledDate>
            <Wrapper>
               <StyledAvatarOnBook />
               <StyledText>{props.data}</StyledText>
               <MeadballsDiv>
                  <MeatBalls id={props.id} options={[]} />
               </MeadballsDiv>
            </Wrapper>
         </StyledSecondContent>
      </Div>
   )
}
const MeadballsDiv = styled('div')``
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
   width: 'auto',
   height: '149px',
   margin: '0 16px 0 16px',
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
   ...(status === 'NEW' && {
      color: ' #0BA360',
   }),
   ...(status === 'BOO' && {
      color: ' #FD5200',
   }),
}))
