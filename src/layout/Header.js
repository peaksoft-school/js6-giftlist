import React, { useState } from 'react'
import styled from 'styled-components'
import SearchInput from '../components/UI/SearchInput'
import BellIcons from '../assets/svg/Bellcons.svg'
import userIcon from '../assets/svg/userIcon.svg'
import IconButton from '../components/UI/IconButton'
import openIcon from '../assets/svg/openIcons.svg'
import MenuItem from '../components/UI/meatballs/MenuItem'

function Header({ isInput }) {
   // searchSelect input not done, will add later///
   const [isOpen, setIsOpen] = useState(false)
   const openProfile = () => {
      setIsOpen((prevstate) => !prevstate)
   }
   return (
      <StyledHeader>
         <Container>
            {isInput ? <SearchInput /> : <SearchInput />}
            <RightSideContainer>
               <BellIcon alt="alt" src={BellIcons} />
               <Profile>
                  <img src={userIcon} alt="profile" />
                  <span> Naruto Uzumaki</span>
                  <IconButton image={openIcon} onClick={openProfile} />
                  <MenuProfile>
                     {isOpen && <MenuItem>hello</MenuItem>}
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
   box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
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
