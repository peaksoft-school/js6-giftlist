import styled from 'styled-components'
import Menu from './meatballs/Menu'
import iconDelete from '../../assets/svg/deleteIcons.svg'
import iconPen from '../../assets/svg/IconPen.svg'

const HolidayCard = ({
   src,
   date,
   title,
   id,
   openModalDelete,
   openEdditModal,
   navigateInnerPage,
}) => {
   const holiday = [
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
         <BlockImg onClick={() => navigateInnerPage(id)}>
            <Image src={src} alt={title} />
         </BlockImg>
         <Title>{title}</Title>
         <DateBlock>
            <Date>{date}</Date>
            <Menu options={holiday} />
         </DateBlock>
      </ContainerCard>
   )
}

export default HolidayCard

const ContainerCard = styled.div`
   width: 349px;
   border-radius: 8px;
   background: #ffffff;
   border: 1px solid #ffffff;
   border-radius: 8px;
   padding: 16px;
   height: 250px;
`
const BlockImg = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`

const Image = styled.img`
   width: 317px;
   height: 149px;
   object-fit: cover;
   border-radius: 6px;
`
const Title = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 0.02em;
   margin-top: 13px;
   color: #020202;
`
const DateBlock = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 5px;
`

const Date = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: rgba(99, 108, 132, 1);
`
