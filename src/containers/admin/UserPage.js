import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import UserCard from '../../components/users/UserCard'
import {
   getUsers,
   unBlockUsers,
   usersBlock,
} from '../../store/slices/usersActions'

function UserPage() {
   const { users } = useSelector((state) => state.users)

   const dispatch = useDispatch()

   const onUsersBlock = (id) => dispatch(usersBlock(id))

   const onUnBlockUsers = (id) => dispatch(unBlockUsers(id))
   useEffect(() => {
      dispatch(getUsers())
   }, [])
   return (
      <StyledWrapper>
         <Title>Пользователи</Title>
         <Div>
            {users.map((item) => (
               <UserCard
                  amount={item.giftCount}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  img={item.image}
                  onUsersBlock={onUsersBlock}
                  id={item.id}
                  onUnBlockUsers={onUnBlockUsers}
                  status={item.isBlock}
               />
            ))}
         </Div>
      </StyledWrapper>
   )
}

export default UserPage

const StyledWrapper = styled('div')`
   height: 100vh;
   padding: 90px 40px 0 314px;
   background: #f7f8fa;
   width: 100%;
`

const Div = styled('div')`
   display: flex;
   flex-wrap: wrap;
`
const Title = styled('div')`
   font-family: 'Inter';
   font-size: 20px;
   font-weight: 500;
   line-height: 24px;
   letter-spacing: 0.20000000298023224px;
   text-align: left;
   padding: 30px 0px 25px 0px;
`
