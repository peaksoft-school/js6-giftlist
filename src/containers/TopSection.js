/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'
import { ReactComponent as Facebook } from '../assets/svg/facebookWhite.svg'
import { ReactComponent as Vk } from '../assets/svg/vkIconWhite.svg'
import { ReactComponent as Instagram } from '../assets/svg/instagramwhite.svg'
import OneImage from '../assets/Images/mainImage/1.png'
import TwoImage from '../assets/Images/mainImage/2.png'
import Button from '../components/UI/Button'
import SignUp from '../components/authorization/SignUp'
import SignIn from '../components/authorization/SignIn'
import ChangePassword from '../components/authorization/ChangePassword'

function HomePage() {
   const [params, useParams] = useSearchParams()

   const signInHandler = () => useParams({ open: 'SIGN-IN' })
   const signUpHandler = () => useParams({ open: 'SIGN-UP' })

   const onCloseModal = () => useParams({})

   const { open, test } = Object.fromEntries(params)

   const id = test?.split('').splice(16, 4).join('')
   return (
      <Container>
         <TopPart>
            <Title>О проекте</Title>
            <TitleGift>Gift list</TitleGift>
            <Title>Благотворительность</Title>
         </TopPart>
         <Div>
            <Icons>
               <Link href="https://www.facebook.com/">
                  <Facebook />
               </Link>
               <Link href="https://vk.com/">
                  <Vk />
               </Link>
               <Link href="https://www.instagram.com/">
                  <Instagram />
               </Link>
               <Image>
                  <img src={OneImage} alt="oneimg" />
               </Image>
            </Icons>

            <Main>
               <TitleText>
                  Социальная сеть
                  <br /> нового поколения
               </TitleText>
               <HeaderText>
                  Всегда подскажет, что подарить близким и осуществит твои
                  желания
               </HeaderText>
               <MyButton
                  variant="outlined"
                  width="291px"
                  onClick={signInHandler}
               >
                  Войти
               </MyButton>

               <SignIn
                  open={open === 'SIGN-IN'}
                  onClose={onCloseModal}
                  isOpen={useParams}
               />

               <RegisBtn variant="contained" onClick={signUpHandler}>
                  Регистрация
               </RegisBtn>
               <SignUp
                  open={open === 'SIGN-UP'}
                  onClose={onCloseModal}
                  isOpen={useParams}
               />
            </Main>

            <BottomPart>
               <img src={TwoImage} alt="twoimg" />
               <ArrowScroll>&#8592; Листайте вниз</ArrowScroll>
            </BottomPart>
         </Div>
         <ChangePassword open={test} onClose={onCloseModal} id={+id} />
      </Container>
   )
}
export default HomePage

const Container = styled.div`
   width: 100%;
   padding: 25px 135px 120px 135px;
   font-family: 'Inter';
   background-color: #8639b5;
`
const TopPart = styled.div`
   display: flex;
   justify-content: space-between;
`
const TitleGift = styled.h4`
   text-align: center;
   font-size: 29.05px;
   text-transform: uppercase;
   color: #ffffff;
   padding-left: 60px;
`

const Div = styled.div`
   margin-top: 73px;
   display: flex;
   justify-content: space-between;
`
const ArrowScroll = styled.div`
   transform: rotate(-90deg);
   padding-top: 90px;
   font-size: 14px;
   line-height: 14px;
   color: rgba(255, 255, 255, 1);
   text-align: center;
`
const Icons = styled.div`
   display: flex;
   flex-direction: column;
   gap: 28px;
`
const Image = styled.div`
   padding-top: 68px;
`

const Link = styled.a``
const BottomPart = styled.div`
   display: flex;
   flex-direction: column;
   align-items: end;
   gap: 100px;
`
const Title = styled.h1`
   font-size: 16px;
   font-weight: 500;
   line-height: 16px;
   letter-spacing: 0em;
   color: white;
`
const Main = styled.div`
   margin-top: 105px;
   justify-content: center;
   display: flex;
   flex-direction: column;
   align-items: center;
`
const HeaderText = styled.p`
   width: 338px;
   margin-top: 30px;
   font-weight: 400;
   font-size: 16px;
   line-height: 150%;
   text-align: center;
   color: #ffffff;
`
const TitleText = styled.h4`
   font-style: normal;
   font-weight: 500;
   font-size: 54px;
   line-height: 120%;
   text-align: center;
   color: #ffffff;
`
const MyButton = styled(Button)`
   width: 291px !important;
   height: 39px;
   margin-top: 50px !important;
   background: linear-gradient(225deg, #fa2b56 0%, #f91c3d 100%);
   border-radius: 6px;
   border: none;
   color: #ffffff;
`
const RegisBtn = styled(Button)`
   width: 291px !important;
   height: 39px;
   background: rgba(255, 255, 255, 0.1) !important;
   margin-top: 30px !important;
   border: 1px solid #ffffff !important;
   border-radius: 6px;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 0.03em;
   text-transform: uppercase;
   color: #ffffff !important;
`
