import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import MyFriends from '../components/users/MyFriends'
import { getFriendRequest, getFriends } from '../store/slices/FriendsActions'

const FriendPage = () => {
   const dispatch = useDispatch()

   const { friends } = useSelector((state) => state.friends)
   const { friendRequests } = useSelector((state) => state.friendRequests)

   useEffect(() => {
      dispatch(getFriends())
   }, [])

   useEffect(() => {
      dispatch(getFriendRequest())
   }, [])

   return (
      <Container>
         <ToastContainer />
         <Title>Друзья</Title>
         {friends && (
            <MyFriends friends={friends} friendRequests={friendRequests} />
         )}
         {friends?.length <= 0 && friendRequests?.length <= 0 && (
            <NotFound>У вас еще нет друзей</NotFound>
         )}
      </Container>
   )
}
export default FriendPage

const Container = styled.div`
   width: 100%;
   height: 100vh;
   padding: 90px 40px 0 314px;
   background: rgba(247, 248, 250, 1);
`

const Title = styled('span')`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 500;
   font-size: 20px;
   line-height: 24px;
   display: flex;
   align-items: center;
   letter-spacing: 0.2px;
   color: #020202;
   margin-bottom: 33px;
`
const NotFound = styled.h4`
   position: absolute;
   left: 750px;
   top: 400px;
   font-weight: bold;
   font-size: 30px;
`
