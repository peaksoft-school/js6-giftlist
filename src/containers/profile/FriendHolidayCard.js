import styled from 'styled-components'
import Menu from '../../components/UI/meatballs/Menu'
import { formatDate } from '../../utils/helpers/helpers'
import blockIcon from '../../assets/svg/blockIcon.svg'
import unBlockIcon from '../../assets/svg/unBlock.svg'
import deleteIcon from '../../assets/svg/delete.svg'

const FriendHolidayCard = ({
   src,
   date,
   title,
   id,
   navigateInnerPage,
   role,
   holidayBlock,
   status,
   unBlockHoliday,
   deleteHoliday,
}) => {
   const adminHoliday = [
      {
         id: '1',
         icon: blockIcon,
         name: 'Заблокировать',
         getClick: () => {
            holidayBlock(id)
         },
      },
      {
         id: '2',
         icon: deleteIcon,
         name: 'Удалить',
         getClick: () => {
            deleteHoliday(id)
         },
      },
   ]
   const unBlock = [
      {
         id: '1',
         icon: unBlockIcon,
         name: 'Разблокировать',
         getClick: () => {
            unBlockHoliday(id)
         },
      },
   ]
   return (
      <ContainerCard status={status}>
         <BlockImg onClick={() => navigateInnerPage(id)}>
            <Image src={src} alt={title} />
         </BlockImg>
         <Title>{title}</Title>
         <DateBlock>
            <Dates>{formatDate.DD_MM_YY(new Date(date))}</Dates>
            {role === 'ADMIN' ? (
               <StatusDiv>
                  <Menu
                     id={id}
                     options={status === true ? unBlock : adminHoliday}
                  />
               </StatusDiv>
            ) : (
               ''
            )}
         </DateBlock>
      </ContainerCard>
   )
}

export default FriendHolidayCard

const ContainerCard = styled.div`
   width: 349px;
   border-radius: 8px;
   background: #ffffff;
   border: 1px solid #ffffff;
   border-radius: 8px;
   padding: 16px;
   height: 250px;
   background-color: ${(p) => (p.status === true ? '#DCDCDC' : '#FFFFFF')};
   opacity: ${(p) => (p.status === true ? 0.5 : '')};
`

const StatusDiv = styled('div')`
   display: flex;
   gap: 4px;
   span {
      padding-top: 3px;
      font-family: 'Inter';
      font-size: 15px;
   }
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

const Dates = styled.span`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
   color: rgba(99, 108, 132, 1);
`
