import styled from 'styled-components'
import Menu from './meatballs/Menu'
import iconDelete from '../../assets/svg/deleteIcons.svg'
import iconPen from '../../assets/svg/IconPen.svg'

const HolidayCard = ({ src, date, title, getId, onDelete }) => {
   const holiday = [
      {
         id: 1,
         icon: iconPen,
         name: 'Редактировать',
      },
      {
         id: 2,
         icon: iconDelete,
         name: 'Удалить',
      },
   ]
   const idHandler = () => {
      onDelete(getId)
   }
   return (
      <ContainerCard>
         <BlockImg>
            <Image src={src} alt={title} />
         </BlockImg>
         <Title>{title}</Title>
         <DateBlock>
            <Date>{date}</Date>
            <Menu options={holiday} onGetIdHandler={idHandler} getId={getId} />
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
   src: ${(p) => p.src};
   height: 149px;
   width: 317px;
   border-radius: 6px;
`
const Title = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 19px;
   letter-spacing: 0.02em;
   margin-top: 16px;
`
const DateBlock = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 14px;
`

const Date = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: #636c84;
`
