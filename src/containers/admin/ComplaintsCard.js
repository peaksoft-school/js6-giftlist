import { Avatar } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import blockedIcon from '../../assets/svg/blocked.svg'
import deleteIcon from '../../assets/svg/deleteIcons.svg'
import iconClosed from '../../assets/svg/icons8-разблокировать.svg'
import Menu from '../../components/UI/meatballs/Menu'
import {
   blocked,
   deleteCharity,
   unBlockedCharity,
} from '../../store/slices/complaints/complaints'

function ComplaintsCard({
   fullName,
   avatarImages,
   holidayName,
   reason,
   wishPhoto,
   title,
   date,
   // id,
   isBLock,
   onClick,
   wishId,
   complainerPhoto,
}) {
   const array = [
      {
         icon: blockedIcon,
         id: '1',
         name: 'Заблокировать',
         getClick: (wishId) => {
            blockedCharityHandler(wishId)
         },
      },
      {
         icon: deleteIcon,
         id: '2',
         name: 'Удалить',
         getClick: (wishId) => {
            deleteHandler(wishId)
         },
      },
   ]

   const dispatch = useDispatch()
   const blockedCharityHandler = (wishId) => {
      dispatch(blocked({ wishId })).unwrap()
   }
   const unBlockedHandler = (wishId) => {
      dispatch(unBlockedCharity({ wishId })).unwrap()
   }
   const deleteHandler = (wishId) => {
      dispatch(deleteCharity({ wishId })).unwrap()
   }

   const unBlocked = [
      {
         icon: iconClosed,
         id: '1',
         name: 'Разблокировать',
         getClick: (wishId) => {
            unBlockedHandler(wishId)
         },
      },
   ]

   return (
      <MainContainer>
         <MainCard background={isBLock}>
            <Container>
               <Header>
                  <HeaderLeft>
                     <NameAndImage>
                        <Avatar src={avatarImages} />
                        <UserName>{fullName}</UserName>
                     </NameAndImage>
                     <div>
                        <PostHeaderRight>{holidayName}</PostHeaderRight>
                     </div>
                  </HeaderLeft>
               </Header>
               <PostHeader>
                  <PostsName>{title}</PostsName>
               </PostHeader>
               <Post>
                  <UserPostImg src={wishPhoto} alt="" />
               </Post>
               <FooterContainer>
                  <p>{date}</p>
                  <ButtonBlock>
                     <Avatar
                        src={complainerPhoto}
                        alt=""
                        style={{ width: '20px', height: '20px' }}
                     />
                     <StyledDiv>
                        <TitleComplain onClick={onClick} style={cursor}>
                           {reason}
                        </TitleComplain>

                        {isBLock === false && (
                           <Menu id={wishId} wishId={wishId} options={array} />
                        )}
                        {isBLock === true && (
                           <Menu
                              id={wishId}
                              wishId={wishId}
                              options={unBlocked}
                           />
                        )}
                     </StyledDiv>
                  </ButtonBlock>
               </FooterContainer>
            </Container>
         </MainCard>
      </MainContainer>
   )
}

export default ComplaintsCard

const TitleComplain = styled('div')``
const cursor = {
   cursor: 'pointer',
}
const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 31px;
   border: 1px solid #fd5200;
   border-radius: 5px;
`
const ButtonBlock = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   gap: 10px;
`

const StyledDiv = styled('div')`
   display: flex;
   align-items: center;
   gap: 16px;
   p {
      padding-bottom: 1px;
   }
`
const FooterContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   p {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #636c84;
   }
`
const MainCard = styled.div`
   background-color: ${(props) => (props.background ? '#D6D9DC' : 'white')};
   display: flex;
   border: 1px solid #ffffff;
   border-radius: 8px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 349px;
   height: 301px;
   border-radius: 8px;
`

const Header = styled.header`
   align-items: center;
   justify-content: space-between;
   margin-top: 10px;
`
const NameAndImage = styled('image')`
   display: flex;
   gap: 10px;
   align-items: center;
`
const UserName = styled.p`
   font-family: 'Inter';
   font-size: 16px;
   font-weight: 500;
   line-height: 19px;
   letter-spacing: 0.02em;
   text-align: left;
`
const UserPostImg = styled.img`
   border-radius: 6px;
   width: 317px;
   height: 153px;
   object-fit: cover;
`
const PostsName = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 130%;
   margin: 20px 0 10px 0;
`

const Post = styled.div`
   display: flex;
   flex-direction: column;
   align-items: start;
`
const PostHeader = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const PostHeaderRight = styled.span`
   font-family: 'Inter';
   font-size: 13px;
   font-weight: 400;
   line-height: 16px;
   letter-spacing: 0em;
   text-align: left;
   color: #0ba360;
`
const Container = styled.div`
   width: 317px;
`
const HeaderLeft = styled.div`
   display: flex;
   gap: 34px;
   align-items: center;
`
