import styled from 'styled-components'
import HolidaysPage from '../../containers/HolidaysPage'

function HomePage() {
   return (
      <Container>
         <HolidaysPage />
      </Container>
   )
}

export default HomePage

const Container = styled('div')`
   padding-left: 230px;
   background: rgba(247, 248, 250, 1);
   padding-top: 90px;
`
