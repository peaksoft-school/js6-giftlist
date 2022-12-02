import React, { useEffect } from 'react'

import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/UI/Button'
import { getProfile } from '../../store/slices/ProfileActions'

const MyProfile = () => {
   const profile = useSelector((state) => state.profile)
   console.log(profile)
   const navigate = useNavigate()

   const { email, firstName, lastName } = useSelector((state) => {
      return state.auth.user
   })
   const navigateAboutMe = () => {
      navigate('/user/profile/about-me')
   }

   const dispatch = useDispatch()
   const myProfile = () => {
      //   navigate()
   }
   useEffect(() => {
      dispatch(getProfile())
   }, [])

   return (
      <EditContainer>
         <Title>Профиль</Title>

         <EditWrapper>
            <WrapperImage>
               <Img src="" alt="" />
               <FirstNameLastName>
                  {firstName} {lastName}
               </FirstNameLastName>
               <ButtonWrapper>
                  <AboutMeButton variant="outlined" onClick={navigateAboutMe}>
                     Расскажите о себе
                  </AboutMeButton>
                  <ButtonChangePassword onClick={myProfile} variant="contained">
                     Сменить пароль
                  </ButtonChangePassword>
               </ButtonWrapper>
            </WrapperImage>

            <Info>
               <>
                  <Text>Основная информация</Text>
                  <UniverDiv>
                     {email && (
                        <div>
                           <KeyText>Email:</KeyText>
                           <ContentText>{email}</ContentText>
                        </div>
                     )}
                  </UniverDiv>
               </>
            </Info>
         </EditWrapper>
      </EditContainer>
   )
}

export default MyProfile

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
const EditContainer = styled('div')`
   height: 100vh;
   padding: 90px 40px 0 314px;
   background: #f7f8fa;
   width: 100%;
`

const EditWrapper = styled('div')`
   height: 100%;
   padding: 13px;
   background: #ffffff;
   border-radius: 10px;
   display: flex;
`
const FirstNameLastName = styled('h4')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   letter-spacing: 0.2px;
   color: #020202;
   text-align: center;
   padding: 16px 0px 16px 0;
`
const WrapperImage = styled('div')`
   button {
      width: 206px;
      height: 37px;
      margin: 6px;
      margin-top: 10px;
   }
`

const Info = styled('div')`
   display: flex;
   flex-direction: column;
   padding-left: 50px;
   padding-top: 40px;
`
const UniverDiv = styled('div')`
   display: flex;
`

const KeyText = styled('h5')`
   font-family: 'Inter';
   color: #5c5c5c;
   padding-top: 6px;
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
   font-size: 18px;
   line-height: 22px;
   display: flex;
   align-items: center;
   letter-spacing: 0.2px;
   color: #8639b5;
   padding-bottom: 20px;
`

const Img = styled('img')`
   width: 217px;
   height: 217px;
   border-radius: 8px;
   margin-left: 17px;
   object-fit: cover;
`

const ContentText = styled('p')`
   width: 470px;
   font-family: 'Inter';
   font-style: normal;
   font-size: 16px;
   color: #000000;
`
const ButtonChangePassword = styled(Button)`
   &.cOnipN.MuiButton-root.MuiButton-contained {
      width: 206px;
      background-color: transparent;
      border: 1px solid #8d949e;
      border-radius: 6px;
      color: rgba(141, 148, 158, 1);
   }
`
const AboutMeButton = styled(Button)`
   &.cOnipN.MuiButton-root.MuiButton-outlined {
      width: 206px;
      border: 1px solid #8d949e;
      border-radius: 6px;
      color: #ffffff;
   }
`
const ButtonWrapper = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-left: 10px;
`
