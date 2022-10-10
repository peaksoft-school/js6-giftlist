import React, { useState } from 'react'
import styled from 'styled-components'

function GiftCard({
   usersName,
   newGift,
   postName,
   userImage,
   userPost,
   postDate,
   footerImage,
   booked,
   vector,
   ribbonPostImg,
   ribbonUsersImage,
   ribbonUsersName,
   ribbonBirthday,
   giftName,
   ribbonDate,
   leftImg,
   ribbonBooked,
   rightImg,
}) {
   const [change, setChange] = useState(false)
   const changeHandler = () => {
      setChange((prev) => !prev)
   }
   return (
      <MainContainer>
         {change ? (
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
                     <UserPostImg src={userPost} alt="userPost" />
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
         ) : (
            <RibbonMain>
               <RibbonContainer>
                  <div>
                     <RibbonImageWH src={ribbonPostImg} alt="" />
                  </div>
                  <RibbonRight>
                     <RibbonHeaderLeft>
                        <RibbonHeaderLeft>
                           <img src={ribbonUsersImage} alt="" />
                           <RibbonUserName>{ribbonUsersName}</RibbonUserName>
                        </RibbonHeaderLeft>
                        <RibbonBirthday>{ribbonBirthday}</RibbonBirthday>
                     </RibbonHeaderLeft>
                     <RibbonGift>{giftName}</RibbonGift>
                     <RibbonHeaderLeft>
                        <RibbonHeaderLeft>
                           <RibbonDate>{ribbonDate}</RibbonDate>
                        </RibbonHeaderLeft>
                        <RibbonHeaderLeft>
                           <img src={leftImg} alt="" />
                           <RibbonFooterText>{ribbonBooked}</RibbonFooterText>
                           <img src={rightImg} alt="" />
                        </RibbonHeaderLeft>
                     </RibbonHeaderLeft>
                  </RibbonRight>
               </RibbonContainer>
            </RibbonMain>
         )}
         <div>
            <button onClick={changeHandler}>onclick</button>
         </div>
      </MainContainer>
   )
}

export default GiftCard

const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
`

const MainCard = styled.div`
   background: #ffffff;
   border: 1px solid #ffffff;
   border-radius: 8px;
   padding: 16px;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 349px;
   height: 301px;
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

const UserPostImg = styled.img`
   border-radius: 6px;
   margin-top: 12px;
   margin-bottom: 14px;
`
const PostsName = styled.span`
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
const PostHeader = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const PostHeaderRight = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   margin-top: 16px;
   margin-bottom: 12px;
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
   padding: 16px;
   width: 533px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 100px;
   background: #ffffff;
   border: 1px solid #ffffff;
   border-radius: 8px;
`

const RibbonContainer = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`

const RibbonRight = styled.div`
   height: 106px;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

const RibbonHeaderLeft = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`

const RibbonImageWH = styled.img`
   width: 146px;
   height: 106px;
   margin-right: 14px;
`

const RibbonFooterText = styled.span`
   margin-left: 10px;
   margin-right: 16px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #636c84;
`
const RibbonDate = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #636c84;
`
const RibbonGift = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 130%;
   color: #020202;
`
const RibbonBirthday = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 13px;
   line-height: 16px;
   color: #0ba360;
`
const RibbonUserName = styled.span`
   margin-left: 16px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 0.02em;
   color: #020202;
`
