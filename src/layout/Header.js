import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import bellIcons from '../assets/svg/Bellcons.svg'
import SelectInputSearch from '../components/UI/SelectInput/SelectInputSearch'
import { searchingUser } from '../store/slices/searchActions'
import SearchInputList from '../components/UI/SearchInputList'
import useDebaunce from '../hooks/useDebaunce'
import AccountProfile from './AccountProfile'
import IconButton from '../components/UI/IconButton'
import Notification from '../components/users/notification/Notification'
import { getNotification } from '../store/slices/notificationAction'

function Header() {
   const { pathname } = useLocation()

   const { notification } = useSelector((state) => state.notification)

   const { role } = useSelector((state) => state.auth.user)

   const { options } = useSelector((state) => state.search)

   const dispatch = useDispatch()

   const [value, setValue] = useState('')

   const values = useDebaunce(value)

   const valueChangeHandler = (e) => setValue(e.target.value)

   useEffect(() => {
      if (values && role !== 'ADMIN') {
         dispatch(searchingUser(values))
      }
   }, [values])

   const isWishLentaSearch = () => {
      if (role !== 'ADMIN') {
         return (
            <SearchInputList
               options={options}
               onChange={valueChangeHandler}
               value={value}
            />
         )
      }
      return null
   }
   const [anchorEl, setanchorEl] = useState(null)
   const open = Boolean(anchorEl)

   const isOpenNotification = (e) => setanchorEl(e.currentTarget)

   const cancelNotificationMenu = () => setanchorEl(null)

   useEffect(() => {
      dispatch(getNotification())
   }, [])
   console.log(notification, 'hello')

   return (
      <StyledHeader>
         <Container>
            {pathname.includes('charity') ? (
               <SelectInputSearch />
            ) : (
               isWishLentaSearch()
            )}
            <RightSideContainer>
               <Profile>
                  <Notification
                     open={open}
                     onClose={cancelNotificationMenu}
                     anchorEl={anchorEl}
                     data={notification?.responseList}
                  />
                  <IconButton image={bellIcons} onClick={isOpenNotification} />
                  <AccountProfile />
               </Profile>
            </RightSideContainer>
         </Container>
      </StyledHeader>
   )
}
export default Header
const StyledHeader = styled.header`
   width: 100%;
   padding-left: 294px;
   background: #ffffff;
   box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.03);
   position: fixed;
   z-index: 3;
`
const Container = styled.div`
   display: flex;
   align-items: center;
   padding: 20px 23px;
   justify-content: space-between;
   column-gap: 20px;
`
const Profile = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;
   & span {
      white-space: nowrap;
   }
`
const RightSideContainer = styled.div`
   display: flex;
   align-items: center;
   column-gap: 30px;
`
