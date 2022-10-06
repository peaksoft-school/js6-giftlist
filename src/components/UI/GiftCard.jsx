import React from 'react'
import styled from 'styled-components'
import footerImage from '../../assets/images/bookedCards/footerImage.png'

function GiftCard({
   usersName,
   newGift,
   postName,
   userImage,
   userPost,
   postDate,
   booked,
   vector,
   ribbonFooterImg,
   ribbonBooked,
   ribbonBookingImg,
   ribbonDate,
   ribbonBirthday,
   ribbonUserName,
   headerImg,
   leftImg,
}) {
   return (
      <>
         <MainCard>
            <Container>
               <Header>
                  <HeaderLeft>
                     <img src={userImage} alt="user" />
                     <UserName>{usersName}</UserName>
                  </HeaderLeft>
               </Header>
               <PostHeader>
                  <PostsName>{postName}</PostsName>
                  <PostHeaderRight>{newGift}</PostHeaderRight>
               </PostHeader>
               <Post>
                  <UserPostDate src={userPost} alt="userPost" />
               </Post>
               <PostDateFoter>
                  <PostsDate>{postDate}</PostsDate>
                  <FooterLeft>
                     <img src={footerImage} alt="" />
                     <FooterText>{booked}</FooterText>
                     <img src={vector} alt="" />
                  </FooterLeft>
               </PostDateFoter>
            </Container>
         </MainCard>
         <RibbonMain>
            <RibbonContainer>
               <div>
                  <img src={leftImg} alt="" />
               </div>
               <RibbonHeader>
                  <img src={headerImg} alt="" />
                  <p>{ribbonUserName}</p>
                  <p>{ribbonBirthday}</p>
               </RibbonHeader>
               <RibbonMidle>название подарка</RibbonMidle>
               <RibbonFooter>
                  <p>{ribbonDate}</p>
                  <img src={ribbonBookingImg} alt="" />
                  <p>{ribbonBooked}</p>
                  <img src={ribbonFooterImg} alt="" />
               </RibbonFooter>
            </RibbonContainer>
         </RibbonMain>
      </>
   )
}

export default GiftCard

const MainCard = styled.div`
   background: #ffffff;
   border: 1px solid #ffffff;
   border-radius: 8px;
   padding: 16px;
`

const Header = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;
`
const UserName = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   margin-left: 12px;
`

const UserPostDate = styled.img`
   border-radius: 6px;
`
const PostsName = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 130%;
`
const PostsDate = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #636c84;
`
const Post = styled.div`
   display: flex;
   flex-direction: column;
   align-items: start;
`
const PostHeader = styled.p`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const PostHeaderRight = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   color: #0ba360;
`
const PostDateFoter = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const Container = styled.div`
   width: 317px;
`
const HeaderLeft = styled.div`
   display: flex;
   align-items: center;
`
const FooterLeft = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`
const FooterText = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   color: #636c84;
   margin-left: 10px;
   margin-right: 16px;
`

const RibbonMain = styled.div`
   display: flex;
   padding: 16px;
`
const RibbonContainer = styled.div`
   height: 106px;
`
const RibbonHeader = styled.div`
   display: flex;
`
const RibbonMidle = styled.div``

const RibbonFooter = styled.div`
   display: flex;
`
