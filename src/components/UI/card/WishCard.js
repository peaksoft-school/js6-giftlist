import React from 'react'
import styled from 'styled-components'
import Menu from '../meatballs/Menu'
import iconDelete from '../../../assets/svg/deleteIcons.svg'
import iconPen from '../../../assets/svg/IconPen.svg'
import { formatDate } from '../../../utils/helpers/helpers'

function WishCard({
   src,
   title,
   titleName,
   date,
   datareponse,
   titleImg,
   openEdditModal,
   openModalDelete,
   id,
}) {
   const options = [
      {
         id: 1,
         icon: iconPen,
         name: 'Редактировать',
         getClick: () => {
            openEdditModal(id)
         },
      },
      {
         id: 2,
         icon: iconDelete,
         name: 'Удалить',
         getClick: () => {
            openModalDelete(id)
         },
      },
   ]
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
            <StyledDate>{formatDate.DD_MM_YY(new Date(date))}</StyledDate>
            <ContainerBottom>
               <DataTime>
                  {datareponse === 'WAIT' ? 'В ожидании' : 'Забронирован'}
               </DataTime>
               <Menu options={options} />
            </ContainerBottom>
         </BottomPart>
      </ContainerCard>
   )
}

export default WishCard

const ContainerCard = styled.div`
   height: 250px;
   width: 349px;
   border-radius: 8px;
   background-color: rgba(255, 255, 255, 1);
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

const StyledDate = styled.span`
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
   width: 317px;
   height: 149px;
   object-fit: cover;
   border-radius: 6px;
`
