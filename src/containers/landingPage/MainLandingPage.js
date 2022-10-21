import React from 'react'
import styled from 'styled-components'
import FourSection from './FourSection'
import ThreeSection from './ThreeSection'
import img6 from '../../assets/image/img6.png'
import img5 from '../../assets/image/img5.png'
import img4 from '../../assets/image/img4.png'
import img3 from '../../assets/image/img3.png'
import img2 from '../../assets/image/img2.png'
import img1 from '../../assets/image/img1.png'
import facebookIcon from '../../assets/svg/facebook.svg'
import vkIcon from '../../assets/svg/wk.svg'
import instagramIcon from '../../assets/svg/instagram.svg'

export const MainLending = () => {
   const people = [
      {
         img: img1,
         title: ' Катя, ведущий дизайнер',
         nameGroup: ' TailGroup',
      },
      {
         img: img2,
         title: ' Марина, маркетолог',
         nameGroup: '  Headers Market',
      },
      {
         img: img3,
         title: 'Сава, PR-менеджер',
         nameGroup: 'Central Media',
      },
      {
         img: img4,
         title: '  Паша, основатель',
         nameGroup: 'LeadCompany',
      },
      {
         img: img5,
         title: '  Саша, главный',
         nameGroup: 'редактор Just Journal',
      },
      {
         img: img6,
         title: '  Лёня, ведущий',
         nameGroup: ' разработчик Ymail',
      },
   ]
   return (
      <MainDiv>
         <MainHeader>
            <ThreeSection />
         </MainHeader>
         <MiddleContainer>
            <FourSection />
         </MiddleContainer>
         <People>
            {people.map((item) => (
               <PoepleDiv>
                  <img src={item.img} alt="katyaimage" />
                  <PeopleNames>
                     {item.title}
                     <br />
                     {item.nameGroup}
                  </PeopleNames>
               </PoepleDiv>
            ))}
         </People>
         <FooterDiv>
            <FooterPart>
               <FooterText>Gift list</FooterText>
               <FooterParagraph>
                  Социальная сеть нового поколения
               </FooterParagraph>
               <IconsDiv>
                  <img src={facebookIcon} alt="vkicon" />
                  <img src={vkIcon} alt="vkicon" />
                  <img src={instagramIcon} alt="instagramicon" />
               </IconsDiv>
            </FooterPart>
            <FooterNav>
               <NavigationText>Навигация</NavigationText>
               <NavigationParagraph>О проекте</NavigationParagraph>
               <NavigationParagraph>Благотворительность</NavigationParagraph>
            </FooterNav>
            <FollowContainer>
               <NavigationText>Подписаться на рассылку</NavigationText>
               <FooterInput type="email" placeholder="Введите ваш Email" />
            </FollowContainer>
         </FooterDiv>
         <EndFooter>
            <FooterSpan>Peaksoft © 2022 Все права защищены</FooterSpan>
         </EndFooter>
      </MainDiv>
   )
}

const MainDiv = styled('main')`
   width: 100%;
`
const MainHeader = styled('header')`
   height: 602px;
   background-color: #8639b5;
   display: flex;
   justify-content: space-around;
   align-items: center;
`

const MiddleContainer = styled('div')`
   display: flex;
   justify-content: center;
   padding-top: 130px;
`

const People = styled('div')`
   display: flex;
   justify-content: center;
   padding-top: 120px;
   padding-bottom: 120px;
   align-items: center;
`
const PoepleDiv = styled('div')`
   display: flex;
   text-align: center;
   margin: 20px;
   flex-direction: column;
`

const PeopleNames = styled('p')`
   font-size: 14px;
   margin-top: 10px;
   font-family: 'Inter';
   font-size: 14px;
   font-weight: 400;
   line-height: 18px;
   text-align: center;
`

const FooterDiv = styled('footer')`
   display: flex;
   justify-content: space-around;
   padding-top: 25px;
   padding-bottom: 25px;
   border-bottom: 1px solid #e9eaed;
   border-top: 1px solid #e9eaed;
`
const FooterText = styled('h1')`
   text-transform: uppercase;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 700;
   font-size: 24px;
   line-height: 29px;
   text-transform: uppercase;
   color: #020202;
`
const FooterParagraph = styled('span')`
   font-family: 'Inter';
   font-size: 14px;
   font-weight: 400;
   line-height: 18px;
   letter-spacing: 0em;
   text-align: center;
   padding-bottom: 20px;
`
const NavigationText = styled('h1')`
   font-family: 'Inter';
   font-size: 18px;
   font-weight: 500;
   line-height: 18px;
   letter-spacing: 0em;
`
const NavigationParagraph = styled('p')`
   font-size: 16px;
`

const FooterInput = styled('input')`
   width: 332px;
   height: 39px;
   border: 1px solid #bdbdbd;
   border-radius: 6px 35px 35px 6px;
   font-size: 16px;
   outline: none;
   padding-left: 18px;
`
const IconsDiv = styled('div')`
   width: 116px;
   height: 22.05px;
   display: flex;
   justify-content: space-between;
`
const EndFooter = styled('div')`
   display: flex;
   justify-content: center;
   padding: 20px 90px 25px 0px;
`
const FooterNav = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 16px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 100%;
`

const FooterPart = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 5px;
`

const FollowContainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 16px;
`

const FooterSpan = styled('span')`
   font-family: 'Inter';
   font-size: 14px;
   font-weight: 400;
   line-height: 14px;
   letter-spacing: 0em;
`
