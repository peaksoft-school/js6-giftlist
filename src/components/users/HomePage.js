import styled from 'styled-components'
import HolidaysPage from '../../containers/HolidaysPage'

function HomePage() {
   return (
      <List>
         <HolidaysPage />
      </List>
   )
}

export default HomePage

const List = styled('div')`
   background-color: blue;
   width: 100%;
   height: 700px;
   border-radius: 0px;
   justify-content: center;
   display: flex;
   padding-left: 294px;
   padding: 90px;
   justify-content: right;
`
