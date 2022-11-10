import styled from 'styled-components'
import HolidayModal from './HolidayModal'

function HomePage() {
   return (
      <List>
         <TopPart>
            <HolidayModal />
         </TopPart>
      </List>
   )
}

export default HomePage

const List = styled('div')`
   background-color: red;
   width: 100%;
   height: 700px;
   border-radius: 0px;
   justify-content: center;
   display: flex;
   padding-left: 294px;
   padding: 90px 23px;
   justify-content: right;
`

const TopPart = styled.div`
   display: flex;
   gap: 700px;
`
