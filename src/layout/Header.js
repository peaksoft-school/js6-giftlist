import React from 'react'
import styled from 'styled-components'
import SearchInput from '../components/UI/SearchInput'

function Header({ isInput }) {
   // searchSelect input not done, will add later///
   return (
      <StyledHeader>
         <Container>
            {isInput ? <SearchInput /> : <SearchInput />}
            <RightSideContainer>
               <BellIcon alt="alt" />
               <Profile>Profile</Profile>
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
