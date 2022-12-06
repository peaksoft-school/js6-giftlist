import styled from 'styled-components'
import { Avatar } from '@mui/material'
import { formatDate } from '../../utils/helpers/helpers'
import Menu from './meatballs/Menu'
import book from '../../assets/svg/book.svg'
import lockIcon from '../../assets/svg/lockIcon.svg'
import lockAnonim from '../../assets/svg/lockAnonim.svg'
import giftIcon from '../../assets/svg/giftIcon.svg'
import complainIcon from '../../assets/svg/complain.svg'

function GiftCard({
   usersName,
   id,
   newGift,
   openModalComplains,
   postName,
   userImage,
   postDate,
   footerImage,
   booked,
   ribbonUsersName,
   ribbonBirthday,
   giftName,
   ribbonDate,
   // leftImg,
   ribbonBooked,
   changeCards,
   openModal,
   navigateInnerPage,
   isMy,
   onReservedWish,
   reservedAnonim,
   unReservedHandle,
   holidayId,
}) {
   const options = [
      {
         icon: lockIcon,
         name: 'Забронировать',
         getClick: () => {
            onReservedWish(id)
         },
      },
      {
         icon: lockAnonim,
         name: 'Забронировать анонимно',
         getClick: () => {
            reservedAnonim(id)
         },
      },
      {
         icon: giftIcon,
         name: 'Добавить в мои подарки',
         getClick: () => {
            openModal(holidayId, id)
         },
      },
      {
         icon: complainIcon,
         name: 'Пожаловаться',
         getClick: () => {
            openModalComplains(id)
         },
      },
   ]
   const myCharity = [
      {
         icon: giftIcon,
         name: 'Добавить в мои подарки',
         getClick: () => {
            openModal(holidayId, id)
         },
      },
      {
         icon: lockAnonim,
         name: 'Снять бронь',
         getClick: () => {
            unReservedHandle(id)
         },
      },
      {
         icon: complainIcon,
         name: 'Пожаловаться',
         getClick: () => {
            openModalComplains(id)
         },
      },
   ]

   const desireAnother = [
      {
         icon: giftIcon,
         name: 'Добавить в мои подарки',
         getClick: () => {
            openModal(holidayId, id)
         },
      },
      {
         icon: complainIcon,
         name: 'Пожаловаться',
         getClick: () => {
            openModalComplains(id)
         },
      },
   ]

   const reservedAnonymously = () => {
      return (
         (isMy === true && booked === 'RESERVED_ANONYMOUSLY' && (
            <Menu options={myCharity} />
         )) ||
         (isMy === false && booked === 'RESERVED_ANONYMOUSLY' && (
            <Menu options={desireAnother} />
         ))
      )
   }
   const reserved = () => {
      return (
         (isMy === true && booked === 'RESERVED' && (
            <Menu options={myCharity} />
         )) ||
         (isMy === false && booked === 'RESERVED' && (
            <Menu options={desireAnother} />
         ))
      )
   }

   return (
      <MainContainer>
         {changeCards ? (
            <MainCard>
               <Container>
                  <Header>
                     <HeaderLeft>
                        <NameAndImage>
                           <Avatar src={userImage} />
                           <UserName>{usersName}</UserName>
                        </NameAndImage>
                        <div>
                           <PostHeaderRight>{newGift}</PostHeaderRight>
                        </div>
                     </HeaderLeft>
                  </Header>
                  <PostHeader>
                     <PostsName>{postName}</PostsName>
                  </PostHeader>
                  <Post>
                     <UserPostImg
                        src={book}
                        alt="userPost"
                        onClick={() => navigateInnerPage(id)}
                     />
                  </Post>
                  <FooterContainer>
                     <p>{formatDate.DD_MM_YY(new Date(postDate))}</p>
                     <ButtonBlock>
                        {(booked === 'RESERVED' && isMy === false) ||
                        (booked === 'RESERVED' && isMy === true) ? (
                           <Avatar
                              src={footerImage}
                              alt=""
                              style={{ height: '23px', width: '25px' }}
                           />
                        ) : (
                           ''
                        )}

                        <StyledDiv>
                           {booked === 'RESERVED' ||
                           booked === 'RESERVED_ANONYMOUSLY'
                              ? 'Забронирован'
                              : 'В ожидании'}

                           {reservedAnonymously()}
                           {reserved()}
                           {booked === 'WAIT' && <Menu options={options} />}
                        </StyledDiv>
                     </ButtonBlock>
                  </FooterContainer>
               </Container>
            </MainCard>
         ) : (
            <RibbonMain>
               <RibbonContainer>
                  <div>
                     <RibbonImageWH
                        src={book}
                        alt="image"
                        onClick={() => navigateInnerPage(id)}
                     />
                  </div>
                  <RibbonRight>
                     <RibbonHeaderLeft>
                        <RibbonHeaderLeft>
                           <Avatar alt="avatar" />
                           <RibbonUserName>{ribbonUsersName}</RibbonUserName>
                        </RibbonHeaderLeft>
                        <RibbonBirthday>{ribbonBirthday}</RibbonBirthday>
                     </RibbonHeaderLeft>
                     <RibbonGift>{giftName}</RibbonGift>
                     <RibbonHeaderLeft>
                        <RibbonHeaderLeft>
                           <RibbonDate>
                              {formatDate.DD_MM_YY(new Date(ribbonDate))}
                           </RibbonDate>
                        </RibbonHeaderLeft>
                        <RibbonHeaderLeft>
                           {(booked === 'RESERVED' && isMy === false) ||
                           (booked === 'RESERVED' && isMy === true) ? (
                              <Avatar
                                 src={book}
                                 alt=""
                                 style={{ height: '23px', width: '25px' }}
                              />
                           ) : (
                              ''
                           )}
                           <RibbonFooterText>
                              {ribbonBooked === 'RESERVED' ||
                              ribbonBooked === 'RESERVED_ANONYMOUSLY'
                                 ? 'Забронирован'
                                 : 'В ожидании'}
                           </RibbonFooterText>
                           {reservedAnonymously()}
                           {reserved()}
                           {booked === 'WAIT' && <Menu options={options} />}
                        </RibbonHeaderLeft>
                     </RibbonHeaderLeft>
                  </RibbonRight>
               </RibbonContainer>
            </RibbonMain>
         )}
      </MainContainer>
   )
}
export default GiftCard

const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 31px;
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
   padding-top: 13px;
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

const RibbonMain = styled.div`
   padding: 16px;
   width: 533px;
   display: flex;
   align-items: center;
   justify-content: space-between;
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
   object-fit: cover;
   border-radius: 6px;
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
   margin-top: 10px;
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
