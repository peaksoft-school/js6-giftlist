import { Avatar } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getCharityById } from '../../store/slices/charityActions'
import ImagePicker from '../UI/ImagePicker'

function CharityEdditPage() {
   const { id } = useParams()
   console.log(id)
   //    const [image, setImage] = useState()
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getCharityById(id))
         .unwrap()
         .then((result) => {
            console.log(result)
         })
   }, [])

   return (
      <Container>
         <WrapperInner>
            <ImageContainer>
               <ImagePicker width="343px" heigth="343px" />
            </ImageContainer>
            <Div>
               <TopPart>
                  <ContentSecond>
                     <Avatar />
                     <TitleContent>
                        <Title>Аида Каримова</Title>
                        <Number>+996 705 86 95 44</Number>
                     </TitleContent>
                  </ContentSecond>
                  <StatusDiv>
                     <Status>В ожидании</Status>
                  </StatusDiv>
               </TopPart>
               <MiddlePart>
                  <Titles>Рубашка</Titles>
                  <Description>
                     Рубашка с технологией ProMotion и быстрым, плавным
                     откликом. Грандиозный апгрейд системы камер, открывающий
                     совершенно новые возможности. Исключительная прочность. A15
                     Bionic — самый быстрый чип для iPhone. И впечатляющее время
                     работы без подзарядки. Всё это Pro.
                  </Description>
                  <Info>
                     <Category>fdsa</Category>
                     <Condition>fasfdas</Condition>
                     <Date>asfdas</Date>
                     <SubCategory>dfadsfdas</SubCategory>
                  </Info>
               </MiddlePart>
            </Div>
         </WrapperInner>
      </Container>
   )
}

export default CharityEdditPage

const Container = styled('div')`
   height: 100vh;
   background: #f7f8fa;
   width: 100%;
   padding: 90px 40px 0 314px;
   background: #f7f8fa;
`
const WrapperInner = styled('div')`
   background-color: #ffffff;
   border-radius: 10px;
   padding: 20px 20px;
   width: 100%;
   display: flex;
   border: 1px solid black;
`

const TopPart = styled('div')`
   display: flex;
   gap: 450px;
   padding-left: 20px;
   padding-top: 20px;
   border: 1px solid black;
`

const Title = styled('h4')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 0.02em;

   color: #020202;
`

const Number = styled('div')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;

   letter-spacing: 0.02em;

   color: #5c5c5c;
`

const Status = styled('span')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #3774d0;
   text-align: center;
`

const StatusDiv = styled('div')`
   padding-top: 17px;
`

const ContentSecond = styled('div')`
   display: flex;
   gap: 16px;
`
const TitleContent = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 4px;
`

const MiddlePart = styled('div')`
   display: flex;
   flex-direction: column;
   padding-left: 20px;
`
const Description = styled('span')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 130%;
   color: #000000;
`

const Titles = styled('h4')``

const ImageContainer = styled('div')`
   border: 1px solid black;
`

const Div = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 35px;
`
const Info = styled('div')``
const Category = styled('div')``
const Condition = styled('div')``
const Date = styled('div')``
const SubCategory = styled('div')
