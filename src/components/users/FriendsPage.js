import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import styled from 'styled-components'
import MyFriends from './MyFriends'

import { getFriendRequest, getFriends } from '../../store/slices/FriendsActions'

const FriendPage = () => {
   const dispatch = useDispatch()

   const { friends } = useSelector((state) => state.friends)
   const { friendRequests } = useSelector((state) => state.friendRequests)
   console.log(friendRequests)
   console.log(friends)

   useEffect(() => {
      dispatch(getFriends()).unwrap()
   }, [])

   useEffect(() => {
      dispatch(getFriendRequest()).unwrap()
   }, [])

   return (
      <Container>
         <h2>Друзья</h2>
         {friends && (
            <MyFriends friends={friends} friendRequests={friendRequests} />
         )}
      </Container>
   )
}
export default FriendPage

const Container = styled.div`
   width: 1086px;
   margin: 0 auto;
   h2 {
      margin-top: 40px;
      margin-bottom: 33px;
      font-size: 20px;
      line-height: 24px;
      display: flex;
      align-items: center;
      letter-spacing: 0.2px;
      color: #020202;
   }
`
