import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Menu from '@mui/material/Menu'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Profile } from '../assets/svg/Profile.svg'
import { ReactComponent as Arrow } from '../assets/svg/arrow-down.svg'
import { ReactComponent as ProfileIcon } from '../assets/svg/logoutIcon.svg'
import { ReactComponent as LogoutIcon } from '../assets/svg/logoutIcons.svg'
import { getProfileInfo } from '../store/slices/ProfileActions'
import ProfileModal from '../containers/profile/ProfileModal'

const AccountProfile = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const [logoutState, setLogoutState] = useState(false)

   const logoutHandler = () => {
      setLogoutState(true)
   }
   const neLogoutHandler = () => {
      setLogoutState(false)
   }

   const { role, firstName, image, lastName } = useSelector(
      (state) => state.auth.user
   )
   console.log(lastName, 'data', firstName)

   const profileNavigate = () => {
      navigate('/user/profile/my-profile')
   }
   useEffect(() => {
      dispatch(getProfileInfo())
   }, [])

   return (
      <AccauntProfile>
         {logoutState && (
            <ProfileModal onClose={neLogoutHandler} isOpen={logoutState} />
         )}
         <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
               <>
                  <MenuDiv variant="contained" {...bindTrigger(popupState)}>
                     <ImageDiv>
                        {image ? <MenuImg src={image} alt="" /> : <Profile />}
                        {firstName} {lastName}
                     </ImageDiv>
                     <p>
                        <Arrow />
                     </p>
                  </MenuDiv>
                  <Menu {...bindMenu(popupState)}>
                     {role !== 'ADMIN' && (
                        <MenuItem onClick={popupState.close}>
                           <p>
                              <ProfileIcon />
                           </p>
                           <p onClick={profileNavigate}>Профиль</p>
                        </MenuItem>
                     )}
                     <MenuItem onClick={popupState.close}>
                        <p>
                           <LogoutIcon />
                        </p>

                        <p onClick={logoutHandler}>Выйти</p>
                     </MenuItem>
                  </Menu>
               </>
            )}
         </PopupState>
      </AccauntProfile>
   )
}

export default AccountProfile

const AccauntProfile = styled('div')`
   display: flex;
   cursor: pointer;
`
const MenuDiv = styled('div')`
   width: 200px;
   height: 40px;
   display: flex;
   align-items: center;
   cursor: pointer;
   p {
      margin-left: 6px;
   }
`
const MenuItem = styled('div')`
   display: flex;
   width: 120px;
   height: 44px;
   font-family: 'Inter', sans-serif;
   align-items: center;
   cursor: pointer;
   p {
      margin-left: 10px;
      font-family: 'Inter', sans-serif;
   }
`
const MenuImg = styled('img')`
   width: 30px;
   height: 30px;
   border-radius: 50%;
`

const ImageDiv = styled('div')`
   display: flex;
   align-items: center;
   gap: 4px;
`
