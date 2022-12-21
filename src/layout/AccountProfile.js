import React, { useEffect } from 'react'
import styled from 'styled-components'
import Menu from '@mui/material/Menu'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { ReactComponent as Profile } from '../assets/svg/Profile.svg'
import { ReactComponent as Arrow } from '../assets/svg/arrow-down.svg'
import { ReactComponent as ProfileIcon } from '../assets/svg/logoutIcon.svg'
import { ReactComponent as LogoutIcon } from '../assets/svg/logoutIcons.svg'
import ProfileModal from '../containers/profile/ProfileModal'
import { getProfileInfo } from '../store/slices/ProfileActions'
import defautlImage from '../assets/svg/defaultUser.jpg'

const LOGOUT_USER = 'LOGOUT_USER'

const AccountProfile = () => {
   const navigate = useNavigate()

   const dispatch = useDispatch()

   const [params, setParams] = useSearchParams()

   const { logoutModal } = Object.fromEntries(params)

   const logoutHandler = () => {
      setParams({ logoutModal: LOGOUT_USER })
   }
   const neLogoutHandler = () => {
      setParams({})
   }

   const { role, firstName, image, lastName } = useSelector(
      (state) => state.auth.user
   )

   useEffect(() => {
      if (!image) {
         dispatch(getProfileInfo())
      }
      return () => null
   }, [])

   const profileNavigate = () => {
      navigate('/user/profile/my-profile')
   }

   return (
      <AccauntProfile>
         {logoutModal === LOGOUT_USER && (
            <ProfileModal
               onClose={neLogoutHandler}
               isOpen={logoutModal === LOGOUT_USER}
            />
         )}
         <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
               <>
                  <MenuDiv variant="contained" {...bindTrigger(popupState)}>
                     <ImageDiv>
                        {image ? (
                           <MenuImg
                              src={image === 'image' ? defautlImage : image}
                              alt=""
                           />
                        ) : (
                           <Profile />
                        )}
                        {firstName} {lastName}
                     </ImageDiv>
                     <p>
                        <Arrow />
                     </p>
                  </MenuDiv>
                  <Menu {...bindMenu(popupState)} disableScrollLock>
                     {role !== 'ADMIN' && (
                        <MenuItem
                           onClick={() => {
                              popupState.close()
                              profileNavigate()
                           }}
                        >
                           <p>
                              <ProfileIcon />
                           </p>
                           <p>Профиль</p>
                        </MenuItem>
                     )}
                     <MenuItem
                        onClick={() => {
                           popupState.close()
                           logoutHandler()
                        }}
                     >
                        <p>
                           <LogoutIcon />
                        </p>

                        <p>Выйти</p>
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
   width: 250px;
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
   font-family: 'Open Sans';
   font-size: 16px;
   font-weight: 400;
   line-height: 22px;
   letter-spacing: 0.02em;
   text-align: left;
`
