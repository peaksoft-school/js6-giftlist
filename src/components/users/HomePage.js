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
   height: 100vh;
   padding: 90px 40px 0 314px;
   background: rgba(247, 248, 250, 1);
   width: 100%;
`
