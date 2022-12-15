import styled from 'styled-components'
import Menu from '@mui/material/Menu'
import MeatBalls from '../../UI/meatballs/Menu'
import ListNotification from './ListNotification'

const Notification = ({
   anchorEl,
   onClose,
   open,
   data = [],
   allAsReadHandle,
}) => {
   const option = [
      {
         name: 'Отметить все как прочитанные',
         id: '1',
         getClick: () => {
            allAsReadHandle()
         },
      },
   ]

   return (
      <StyledMenu
         id="basic-menu"
         anchorEl={anchorEl}
         open={open}
         onClose={onClose}
      >
         <Div>
            <Title>Уведомления</Title>
            {data.length ? (
               <Container>
                  <MeatBalls options={option} />
               </Container>
            ) : (
               <Title> Нет новых уведомление</Title>
            )}
         </Div>

         {data?.map((item) => (
            <ListNotification
               onClose={onClose}
               userId={item.userId}
               createdAt={item.createdAt}
               lastName={item.lastName}
               firsName={item.firstName}
               photo={item.photo}
               status={item.notificationType}
               message={item.message}
               wishName={item.wishName}
            />
         ))}
      </StyledMenu>
   )
}

export default Notification

const Div = styled('div')`
   display: flex;
   justify-content: space-between;
   padding: 0 20px 0 20px;
`
export const StyledMenu = styled(Menu)`
   .css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper {
      width: 410px;
      background: #ffff;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      margin-top: 20px;
   }
`
const Title = styled.p`
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 18px;
   line-height: 22px;
   letter-spacing: 0.2px;
   color: #020202;
`
const Container = styled('div')`
   transform: rotate(90deg);
   margin-bottom: 25px;
`
