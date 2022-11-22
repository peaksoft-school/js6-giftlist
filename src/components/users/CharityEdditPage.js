import styled from '@emotion/styled'
import Avatar from '@mui/material/Avatar'

import BreadCrumbs from '../UI/BreadCrumbs'
import Button from '../UI/Button'
import ImagePicker from '../UI/ImagePicker'

const CharityEdditPage = () => {
   const path = {
      charity: 'Благотворительность',
      '': 'fdasdfas',
   }
   return (
      <Container>
         <BreadCrumbsDiv>
            <BreadCrumbs translate={path} />
         </BreadCrumbsDiv>
         <Div>
            <ImagePicker alt="image" width="343px" heigth="343px" />
            <WrapperDiv>
               <User>
                  <StyledAvatar alt="avatar" />
                  <UserName>Аида Каримова</UserName>

                  <Status>В ожидании</Status>
               </User>
               <Title>Iphone 13 Pro</Title>
               <Description>
                  Дисплей Super Retina XDR с технологией ProMotion и быстрым,
                  плавным откликом. Грандиозный апгрейд системы камер,
                  открывающий совершенно новые возможности. Исключительная
                  прочность. A15 Bionic — самый быстрый чип для iPhone. И
                  впечатляющее время работы без подзарядки. Всё это Pro.
               </Description>
               <WrapperNameGiftAndDate>
                  <NameGift>Категория:</NameGift>
                  <DateGift>Состояние:</DateGift>
               </WrapperNameGiftAndDate>
               <WrapperPropsGiftAndDate>
                  <NameGiftProps>Школьные</NameGiftProps>
                  <DateGiftProps>Б/У</DateGiftProps>
               </WrapperPropsGiftAndDate>
               <WrapperNameGiftAndDate>
                  <NameGift>Подкатегория:</NameGift>
                  <DateGift>Дата добавления:</DateGift>
               </WrapperNameGiftAndDate>
               <WrapperPropsGiftAndDate>
                  <NameGiftProps>Сумка</NameGiftProps>
                  <DateGiftProps>12.04.2022</DateGiftProps>
               </WrapperPropsGiftAndDate>
               <ButtonWrapper>
                  {false ? (
                     <WrapperButton>
                        <Button variant="transparent">Удалить</Button>
                        <Button variant="outlined">Редактировать</Button>
                     </WrapperButton>
                  ) : (
                     <WrapperButton>
                        <Button>Забронировать</Button>
                        <Button>Отменить бронь</Button>
                     </WrapperButton>
                  )}
               </ButtonWrapper>
            </WrapperDiv>
         </Div>
      </Container>
   )
}
export default CharityEdditPage

const Description = styled('div')`
   max-width: 670px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   display: flex;
   align-items: center;
   padding-bottom: 20px;
   color: #000000;
`
const BreadCrumbsDiv = styled.div`
   margin-top: 40px;
   margin-bottom: 30px;
   margin-left: 20px;
`
const Container = styled('div')`
   height: 100vh;
   padding: 90px 40px 0 314px;
   background: #f7f8fa;
   width: 100%;
   display: flex;
   flex-direction: column;
`
const WrapperDiv = styled('div')`
   padding-left: 20px;
`
const User = styled('div')`
   align-items: center;
   display: grid;
   grid-template-columns: 48px 450px 140px;
   margin-bottom: 14px;
   width: 93%;
   padding-top: 35px;
`
const StyledAvatar = styled(Avatar)`
   width: 36px;
   height: 36px;
`
const UserName = styled('h2')`
   box-sizing: border-box;
   margin: 0;

   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 0.02em;

   /* black */

   color: #020202;
`
const Status = styled('p')`
   display: flex;
   justify-content: flex-end;
   color: #3774d0;
   font-family: 'Inter';
   font-weight: 400;
   font-size: 14px;
`
const WrapperNameGiftAndDate = styled('div')`
   display: grid;
   grid-template-columns: 211px 472px;
   margin-bottom: 6px;
   width: 95%;
`
const NameGift = styled('div')`
   color: #5c5c5c;
   font-family: 'Inter';
   font-weight: 400;
   font-size: 14px;
   width: 95%;
`
const DateGift = styled('div')`
   color: #5c5c5c;
   font-family: 'Inter';
   font-weight: 400;
   font-size: 14px;
   width: 95%;
`
const WrapperPropsGiftAndDate = styled('div')`
   display: grid;
   grid-template-columns: 211px 472px;
   margin-bottom: 20px;
   width: 95%;
`
const NameGiftProps = styled('div')`
   color: #0ba360;
   width: 95%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   display: flex;
   align-items: center;

   color: #000000;
`
const DateGiftProps = styled('div')`
   font-family: 'Inter';
   font-weight: 400;
   font-size: 16px;
   color: #000000;
   line-height: 130%;
`
const Title = styled('h1')`
   color: #3774d0;
   font-size: 24px;
   font-weight: 500;
   width: 95%;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 130%;
   padding-top: 12px;
   padding-bottom: 20px;
   color: #020202;
`

const ButtonWrapper = styled('div')`
   display: flex;
   justify-content: flex-end;
   padding-top: 40px;
   padding-right: 0px;
   margin-right: 40px;
`

const WrapperButton = styled('div')`
   display: flex;
   gap: 42px;
`

const Div = styled('div')`
   display: flex;
   margin-left: 0px;
   width: 100%;
   padding: 20px;
   background-color: #ffffff;
   height: 100vh;
   border-radius: 10px;
`
