import styled from 'styled-components'
import MyFriends from './MyFriends'

function HomePage() {
   return (
      <Container>
         Lenta
         <MyFriends />
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
