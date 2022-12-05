import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import SelectInputSearch from '../components/UI/SelectInput/SelectInputSearch'
import SearchInput from '../components/UI/SearchInput'
import AccountProfile from './AccountProfile'
import { ReactComponent as Bellcons } from '../assets/svg/Bellcons.svg'

function Header() {
   const { pathname } = useLocation()

   return (
      <StyledHeader>
         <Container>
            {pathname.includes('charity') ? (
               <SelectInputSearch />
            ) : (
               <SearchInput />
            )}
            <RightSideContainer>
               <Profile>
                  <Bellcons />
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
