import React, { useState } from 'react'
import styled from 'styled-components'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import BellIcons from '../assets/svg/Bellcons.svg'
import userIcon from '../assets/svg/userIcon.svg'
import IconButton from '../components/UI/IconButton'
import openIcon from '../assets/svg/openIcons.svg'
import SelectInputSearch from '../components/UI/SelectInput/SelectInputSearch'
import SearchInput from '../components/UI/SearchInput'
import MenuItem from '../components/UI/meatballs/MenuItem'
import userIcons from '../assets/svg/userIcons.svg'
import logoutIcons from '../assets/svg/logoutIcons.svg'
import ProfileModal from '../containers/profile/ProfileModal'

function Header() {
   // searchSelect input not done, will add later///
   const { pathname } = useLocation()
   const { firstName, lastName, image } = useSelector(
      (state) => state.auth.user
   )
   console.log(image, 'imagess')
   const [isOpen, setIsOpen] = useState(false)
   const openProfile = () => {
      setIsOpen((prevstate) => !prevstate)
   }

   const navigate = useNavigate()
   const [params, setParams] = useSearchParams()
   const { modal } = Object.fromEntries(params)
   const onLogoutHandle = () => {
      setParams({ modal: 'LOGOUT-MODAL' })
   }
   const onCloseModalHandle = () => setParams({})

   const navigateToMyProfile = () => {
      navigate('/user/profile/my-profile')
   }
   return (
      <StyledHeader>
         <ProfileModal
            isOpen={modal === 'LOGOUT-MODAL'}
            onClose={onCloseModalHandle}
         />
         <Container>
            {pathname.includes('charity') ? (
               <SelectInputSearch />
            ) : (
               <SearchInput />
            )}
            <RightSideContainer>
               <BellIcon alt="alt" src={BellIcons} />
               <Profile>
                  <img src={userIcon} alt="profile" />
                  <span>
                     {firstName}
                     {lastName}
                  </span>
                  <IconButton image={openIcon} onClick={openProfile} />
                  <MenuProfile>
                     {isOpen && (
                        <MenuDiv>
                           <MenuItem
                              icons={userIcons}
                              onclick={navigateToMyProfile}
                           >
                              Профиль
                           </MenuItem>
                           <MenuItem
                              icons={logoutIcons}
                              onclick={onLogoutHandle}
                           >
                              Выйти
                           </MenuItem>
                        </MenuDiv>
                     )}
                  </MenuProfile>
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
   gap: 7px;
   padding-right: 16.5px;
   & span {
      white-space: nowrap;
   }
`
const RightSideContainer = styled.div`
   display: flex;
   align-items: center;
   column-gap: 30px;
`
const BellIcon = styled.img`
   align-self: flex-end;
   position: relative;
   bottom: 1px;
`

const MenuProfile = styled.div`
   position: absolute;
   top: 50px;
   right: 28px;
`

const MenuDiv = styled('div')`
   padding: 16px 0px 16px 0px;
   display: flex;
   flex-direction: column;
   gap: 16px;
   border-radius: 4px;
   background: #ffffff;
   cursor: pointer;
   box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 24px;
   color: #020202;
`
