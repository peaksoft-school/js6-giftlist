import React from 'react'
import styled from 'styled-components'
import SearchInput from '../components/UI/SearchInput'
import iconsBell from '../assets/svg/iconsBell.svg'
import profileIcon from '../assets/svg/profileIcons.svg'
import openIcon from '../assets/svg/openIcon.svg'

function Header({ isInput }) {
   // searchSelect input not done, will add later///

   return (
      <ContainerHeader>
         <LeftPart>
            {isInput ? <SearchInput /> : <SearchInput />}
            <img src={iconsBell} alt="alt" />
         </LeftPart>
         <Profile>
            <img src={profileIcon} alt="userIcon" />
            <span>Naruto Uzumaki</span>
            <img src={openIcon} alt="open" />
         </Profile>
      </ContainerHeader>
   )
}

export default Header

const ContainerHeader = styled.div`
   width: 100%;
   padding-left: 314px;
   background: #ffffff;
   box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.15);
   height: 86px;
   position: fixed;
   display: flex;
   align-items: center;
`

const LeftPart = styled.div`
   display: flex;
   gap: 22px;
`

const Profile = styled.div`
   display: flex;
   align-items: center;
   padding-left: 30px;
   gap: 7px;
`
