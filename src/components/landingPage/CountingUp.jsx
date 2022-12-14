import React, { useState } from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import { useSearchParams } from 'react-router-dom'
import heart from '../../assets/icons/countingUp/heart.svg'
import like from '../../assets/icons/countingUp/like.svg'
import hand from '../../assets/icons/countingUp/hand.svg'
import Button from '../UI/Button'
import SignUp from '../authorization/SignUp'

function CountingUp({
   userCount = 100,
   giftCount = 10,
   givenGiftCount = 15,
   charityCount = 9,
}) {
   const [counterOn, setCounterOn] = useState(false)

   const [searchParams, setSearchParams] = useSearchParams()

   const { OPEN } = Object.fromEntries(searchParams)

   const onCloseModal = () => setSearchParams({})

   const openRegisterModal = () => setSearchParams({ OPEN: 'OPEN-REGISTER' })

   return (
      <Container>
         <Header>
            <HeaderTitle>
               <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
               >
                  <HeaderNumberStyle>
                     {counterOn && (
                        <CountUp
                           start={0}
                           end={userCount}
                           duration={2}
                           delay={0}
                        />
                     )}
                     k+
                  </HeaderNumberStyle>
               </ScrollTrigger>
               <HeaderTitleStyle>Пользователей</HeaderTitleStyle>
            </HeaderTitle>
            <HeaderTitle>
               <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
               >
                  <HeaderNumberStyle>
                     {counterOn && (
                        <CountUp
                           start={0}
                           end={giftCount}
                           duration={2}
                           delay={0}
                        />
                     )}
                     k+
                  </HeaderNumberStyle>
               </ScrollTrigger>
               <HeaderTitleStyle>Размещенных подарков</HeaderTitleStyle>
            </HeaderTitle>
            <HeaderTitle>
               <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
               >
                  <HeaderNumberStyle>
                     {counterOn && (
                        <CountUp
                           start={0}
                           end={givenGiftCount}
                           duration={2}
                           delay={0}
                        />
                     )}
                     k+
                  </HeaderNumberStyle>
               </ScrollTrigger>
               <HeaderTitleStyle>Подаренных подарков</HeaderTitleStyle>
            </HeaderTitle>
            <HeaderTitle>
               <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
               >
                  <HeaderNumberStyle>
                     {counterOn && (
                        <CountUp
                           start={0}
                           end={charityCount}
                           duration={2}
                           delay={0}
                        />
                     )}
                     k+
                  </HeaderNumberStyle>
               </ScrollTrigger>
               <HeaderTitleStyle>
                  Реализованной <br /> благотворительной помощи
               </HeaderTitleStyle>
            </HeaderTitle>
         </Header>
         <Middle>
            <MiddleCard>
               <MiddleIcons src={heart} alt="" />
               <MiddleRight>
                  <MiddleLi>
                     <MiddleTitleStyle>
                        Дари то, что необходимо
                     </MiddleTitleStyle>
                     <MiddleUlStyle>
                        <MiddleLiStyle>Находи своих близких</MiddleLiStyle>
                        <MiddleLiStyle>
                           Просматривай их списки желаний
                        </MiddleLiStyle>
                        <MiddleLiStyle>
                           Узнавай о ближайших mероприятих
                        </MiddleLiStyle>
                     </MiddleUlStyle>
                  </MiddleLi>
               </MiddleRight>
            </MiddleCard>
            <MiddleCard>
               <MiddleIcons src={like} alt="" />
               <MiddleRight>
                  <MiddleLi>
                     <MiddleTitleStyle>
                        Удобство в использовании
                     </MiddleTitleStyle>
                     <MiddleUlStyle>
                        <MiddleLiStyle>
                           Создавай неограниченное количество желаний
                        </MiddleLiStyle>
                        <MiddleLiStyle>
                           Добавляй подарки которые ты действительно хочешь
                        </MiddleLiStyle>
                        <MiddleLiStyle>
                           Делись своими желаниями другими
                        </MiddleLiStyle>
                     </MiddleUlStyle>
                  </MiddleLi>
               </MiddleRight>
            </MiddleCard>
            <MiddleCard>
               <MiddleIcons src={hand} alt="" />
               <MiddleRight>
                  <MiddleLi>
                     <MiddleTitleStyle>Твори добро</MiddleTitleStyle>
                     <MiddleUlStyle>
                        <MiddleLiStyle>
                           Дари благотворительные подарки
                        </MiddleLiStyle>
                        <MiddleLiStyle>Делись своими вещами</MiddleLiStyle>
                        <MiddleLiStyle>
                           Помогай другим приобрести <br /> необходимое
                        </MiddleLiStyle>
                     </MiddleUlStyle>
                  </MiddleLi>
               </MiddleRight>
            </MiddleCard>
         </Middle>
         <Footer>
            <ButtonRegister onClick={openRegisterModal}>
               Зарегистрироваться
            </ButtonRegister>
         </Footer>
         <SignUp open={OPEN === 'OPEN-REGISTER'} onClose={onCloseModal} />
      </Container>
   )
}

export default CountingUp

const Container = styled.div`
   padding: 120px 135px;
   width: 100%;
`
const Header = styled.div`
   display: flex;
   justify-content: space-around;
`

const HeaderTitle = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`
const HeaderNumberStyle = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 54px;
   line-height: 100%;
   text-align: center;
   color: #8639b5;
`

const HeaderTitleStyle = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 120%;
   text-align: center;
   color: #353a5a;
   margin-top: 19px;
`

const Middle = styled.div`
   display: flex;
   justify-content: space-between;
   padding-top: 140px;
`

const MiddleCard = styled.div`
   display: flex;
   align-items: start;
`

const MiddleIcons = styled.img``

const MiddleRight = styled.div`
   display: flex;
   justify-content: start;
   flex-direction: column;
   margin-left: 16px;
`
const MiddleLi = styled.div`
   width: 288px;
`

const MiddleUlStyle = styled.ul`
   padding-left: 15px;
`

const MiddleLiStyle = styled.li`
   padding: 0;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 170%;
   color: #020202;
`

const MiddleTitleStyle = styled.h1`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 600;
   font-size: 20px;
   line-height: 150%;
   color: #020202;
   margin-top: 20px;
   margin-bottom: 23px;
`

const Footer = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 105px;
`
const ButtonRegister = styled(Button)`
   &.cOnipN.MuiButton-root.MuiButton-contained {
      background-color: #612386;
      color: white;
      width: 291px;
      :hover {
         background-color: none;
         color: white;
      }
   }
`
