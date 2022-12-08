import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Instagram } from '../../assets/svg/greyInstagram.svg'
import { ReactComponent as Facebook } from '../../assets/svg/facebookBlue.svg'
import { ReactComponent as Telegram } from '../../assets/svg/telegram.svg'
import { ReactComponent as Vk } from '../../assets/svg/vk1.svg'
import Button from '../../components/UI/Button'
import { getProfileInfo } from '../../store/slices/ProfileActions'
import { formatDate } from '../../utils/helpers/helpers'

const UsersInnerPage = () => {
   const navigate = useNavigate()

   const dispatch = useDispatch()

   const { email, firstName, lastName, userData, image } = useSelector(
      (state) => {
         return state.auth.user
      }
   )
   const navigateToEdditPage = () => navigate('/user/profile/eddit-profile')

   const myProfile = () => navigate('/user/profile/about-me')

   useEffect(() => {
      dispatch(getProfileInfo())
   }, [])
   return (
      <EditContainer>
         <Title>Профиль</Title>

         <EditWrapper>
            <ImageDiv>
               <Img src={image} alt="" />
               <FirstAndLastName>
                  {firstName} {lastName}
               </FirstAndLastName>
               {Object.values(userData).every((v) => !v) ? (
                  <ButtonDiv>
                     <AboutMeButton onClick={myProfile} variant="contained">
                        Расскажите о себе
                     </AboutMeButton>
                     <ButtonChangePassword variant="outlined">
                        Сменить пароль
                     </ButtonChangePassword>
                  </ButtonDiv>
               ) : (
                  <ButtonDiv>
                     <EdditButton
                        onClick={navigateToEdditPage}
                        variant="contained"
                     >
                        Редактировать
                     </EdditButton>
                     <ButtonChangePassword variant="outlined">
                        Сменить пароль
                     </ButtonChangePassword>
                  </ButtonDiv>
               )}

               <LinkA href={userData?.facebookLink || ''}>
                  {userData?.facebookLink ? <Facebook /> : ''}
               </LinkA>
               <LinkA href={userData?.instagramLink || ''}>
                  {userData?.instagramLink ? <Instagram /> : ''}
               </LinkA>
               <LinkA href={userData?.telegramLink || ''}>
                  {userData?.telegramLink ? <Telegram /> : ''}
               </LinkA>
               <LinkA href={userData?.VkLink || ''}>
                  {userData?.VkLink ? <Vk /> : ''}
               </LinkA>
            </ImageDiv>

            <InformationDiv>
               {userData?.country ||
               userData?.dateOfBirth ||
               email ||
               userData?.phoneNumber ? (
                  <>
                     <Text>Основная информация</Text>
                     <UniverDiv>
                        {userData?.country && (
                           <div>
                              <KeyText>Город:</KeyText>
                              <BodyText>{userData?.country}</BodyText>
                           </div>
                        )}
                        {userData?.dateOfBirth && (
                           <div>
                              <KeyText>Дата рождения:</KeyText>
                              <BodyText>
                                 {formatDate.DD_MM_YY(
                                    new Date(userData?.dateOfBirth)
                                 )}
                              </BodyText>
                           </div>
                        )}
                     </UniverDiv>
                     <UniverDiv>
                        {email && (
                           <div>
                              <KeyText>Email:</KeyText>
                              <BodyText>{email}</BodyText>
                           </div>
                        )}
                        {userData?.phoneNumber && (
                           <div>
                              <KeyText>Номер телефона:</KeyText>
                              <BodyText>{userData?.phoneNumber}</BodyText>
                           </div>
                        )}
                     </UniverDiv>
                  </>
               ) : (
                  ''
               )}
               {userData?.hobby || userData?.important ? (
                  <>
                     <Text>Интересы, хобби</Text>
                     <UniverDiv>
                        {userData?.hobby && (
                           <div>
                              <KeyText>Интересы, хобби:</KeyText>
                              <BodyText>{userData?.hobby}</BodyText>
                           </div>
                        )}
                        {userData?.important && (
                           <div>
                              <KeyText>Важно знать:</KeyText>
                              <BodyText>{userData?.important}</BodyText>
                           </div>
                        )}
                     </UniverDiv>
                  </>
               ) : (
                  ''
               )}
               {userData?.clothingSize || userData?.shoeSize ? (
                  <>
                     <Text>Доп. инфа</Text>
                     <UniverDiv>
                        {userData?.clothingSize && (
                           <div>
                              <KeyText>Размер одежды:</KeyText>
                              <BodyText>{userData?.clothingSize}</BodyText>
                           </div>
                        )}
                        {userData?.shoeSize && (
                           <div>
                              <KeyText>Размер обуви:</KeyText>
                              <BodyText>{userData?.shoeSize}</BodyText>
                           </div>
                        )}
                     </UniverDiv>
                  </>
               ) : (
                  ''
               )}
            </InformationDiv>
         </EditWrapper>
      </EditContainer>
   )
}

export default UsersInnerPage
const EditContainer = styled('div')`
   height: 100vh;
   padding: 90px 40px 0 314px;
   background: #f7f8fa;
   width: 100%;
   display: flex;
   flex-direction: column;
`

const ButtonDiv = styled('div')`
   display: flex;
   flex-direction: column;
`

const AboutMeButton = styled(Button)`
   &.cOnipN.MuiButton-root.MuiButton-contained {
      width: 206px;
      border: 1px solid #8d949e;
      background-color: rgba(134, 57, 181, 1);
      border-radius: 6px;
      color: #ffffff;
   }
`

const Title = styled('h4')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 24px;
   display: flex;
   align-items: center;
   letter-spacing: 0.2px;
   padding-bottom: 26px;
   color: #020202;
`
const EdditButton = styled(Button)`
   &.cOnipN.MuiButton-root.MuiButton-contained {
      width: 206px;
      border: 1px solid #8d949e;
      background-color: rgba(134, 57, 181, 1);
      border-radius: 6px;
      color: #ffffff;
   }
`
const ButtonChangePassword = styled(Button)`
   &.cOnipN.MuiButton-root.MuiButton-outlined {
      width: 206px;
      background-color: transparent;
      border: 1px solid #8d949e;
      border-radius: 6px;
      color: rgba(141, 148, 158, 1);
      margin-bottom: 35px;
   }
`
const EditWrapper = styled('div')`
   width: 1086px;
   height: 855px;
   padding: 13px;
   background: #ffffff;
   border-radius: 10px;
   display: flex;
`
const FirstAndLastName = styled('h4')`
   margin-left: 45px;
   font-family: 'Inter';
   font-size: 15px;
   font-weight: 500;
   line-height: 22px;
   letter-spacing: 0.20000000298023224px;
`
const ImageDiv = styled('div')`
   button {
      width: 206px;
      height: 37px;
      margin: 6px;
      margin-top: 10px;
   }
`

const InformationDiv = styled('div')`
   margin-left: 34px;
   margin-top: 30px;
   display: flex;
   flex-direction: column;
   gap: 20px;
`
const UniverDiv = styled('div')`
   display: flex;
`

const KeyText = styled('h5')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 130%;
   color: #5c5c5c;
`
const Text = styled('h3')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   letter-spacing: 0.2px;
   color: #8639b5;
`

const Img = styled('img')`
   width: 187px;
   height: 190px;
   border-radius: 5px;
   margin-left: 17px;
`
const LinkA = styled('a')`
   margin-left: 15px;
`
const BodyText = styled('p')`
   width: 470px;
   display: flex;
   align-items: center;
   margin-top: 6px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   display: flex;
   align-items: center;
   color: #000000;
`
