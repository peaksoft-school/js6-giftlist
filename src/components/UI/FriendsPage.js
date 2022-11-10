import { useDispatch } from 'react-redux'
import Button from './Button'
import Inputs from './Inputs'
import {
   postFriendRequests,
   deleteFriends,
   acceptFriendRequests,
   rejectFriendRequests,
} from '../../store/slices/FriendsActions'

const FriendPage = () => {
   const dispatch = useDispatch()

   const addToFriendHandler = (id) => {
      dispatch(postFriendRequests({ id, dispatch }))
   }
   const deleteFriendHandler = (id) => {
      dispatch(deleteFriends({ id, dispatch }))
   }
   const acceptToFriendHandler = (id) => {
      dispatch(acceptFriendRequests({ id, dispatch }))
   }
   const rejectRequestHandler = (id) => {
      dispatch(rejectFriendRequests({ id, dispatch }))
   }
   return (
      <>
         <Inputs placeholder="ID" />
         <Button variant="outlined" onClick={addToFriendHandler}>
            Добавить в друзья
         </Button>
         <Button variant="contained" onClick={deleteFriendHandler}>
            Удалить из друзей
         </Button>
         <Button variant="contained" onClick={acceptToFriendHandler}>
            Принять заявку
         </Button>
         <Button variant="outlined" onClick={rejectRequestHandler}>
            Отклонить
         </Button>
      </>
   )
}
export default FriendPage
