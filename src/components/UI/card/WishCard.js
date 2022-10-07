import React from 'react'
import styled from 'styled-components'
import ControllsMenu from '../meadballs/ControllsMenu'

function WishCard({
   src,
   title,
   titleName,
   date,
   datareponse,
   titleImg,
   onClick,
}) {
   return (
      <ContainerCard>
         <TopPart>
            <Image src={src} alt={titleImg} />
         </TopPart>
         <TitleContent>
            <Title>{title}</Title>
            <EventTitle>{titleName}</EventTitle>
         </TitleContent>
         <BottomPart>
            <Date>{date}</Date>
            <ContainerBottom>
               <DataTime>{datareponse}</DataTime>
               <ControllsMenu isOpen={onClick} />
            </ContainerBottom>
         </BottomPart>
      </ContainerCard>
   )
}

export default WishCard

const ContainerCard = styled.div`
   height: 250px;
   width: 340px;
   border-radius: 8px;
   background: #ffffff;
   border: 1px solid #ffffff;
   border-radius: 8px;
   padding: 16px;
`

const TopPart = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`

const TitleContent = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 16px;
`

const Title = styled.div`
   font-family: 'Inter';
   font-size: 14px;
   font-weight: 600;
   line-height: 18px;
   letter-spacing: 0em;
   text-align: left;
`

const EventTitle = styled.span`
   font-family: 'Inter';
   font-size: 13px;
   font-weight: 400;
   line-height: 16px;
   letter-spacing: 0em;
   color: #0ba360;
`

const BottomPart = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 14px;
`

const Date = styled.span`
   font-family: 'Inter';
   font-size: 14px;
   font-weight: 400;
   line-height: 17px;
   letter-spacing: 0em;
   text-align: left;
`

const ContainerBottom = styled.div`
   display: flex;
   align-items: center;
`

const DataTime = styled.span`
   font-family: 'Inter';
   font-size: 14px;
   font-weight: 400;
   line-height: 17px;
   letter-spacing: 0em;
   margin-right: 16px;
   color: #636c84;
`

const Image = styled.img`
   src: ${(p) => p.src};
   height: 149px;
   width: 317px;
   border-radius: 6px;
`
