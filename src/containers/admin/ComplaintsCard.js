import { Avatar } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import MeatBalls from '../../components/UI/meatballs/Menu'

function ComplaintsCard({
   fullName,
   avatarImages,
   reservedImage,
   holidayName,
   reason,
   userPost,
   title,
   date,
   id,
}) {
   //    const style = {
   //       width: '30px',
   //       heigth: '14px',
   //    }

   const navigate = useNavigate()
   return (
      <MainContainer>
         <MainCard>
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
                  <UserPostImg
                     src={userPost}
                     alt="userPost"
                     onClick={() =>
                        navigate(`/admin/complaints/${id}/inner-page`)
                     }
                  />
               </Post>
               <FooterContainer>
                  <p>{date}</p>
                  <ButtonBlock>
                     <Avatar
                        src={reservedImage}
                        alt=""
                        style={{ width: '20px', height: '20px' }}
                     />
                     <StyledDiv>
                        <TitleComplain>{reason}</TitleComplain>
                        <MeatBalls options={['fdasdfas']} />
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
   background: #ffffff;
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
