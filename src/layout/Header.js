import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import BellIcons from '../assets/svg/Bellcons.svg'
import userIcon from '../assets/svg/userIcon.svg'
import IconButton from '../components/UI/IconButton'
import openIcon from '../assets/svg/openIcons.svg'
import MenuItem from '../components/UI/meatballs/MenuItem'
import SelectInputSearch from '../components/UI/SelectInput/SelectInputSearch'
import { searchingUser } from '../store/slices/searchActions'
import SearchInputList from '../components/UI/SearchInputList'
import useDebaunce from '../hooks/useDebaunce'

function Header() {
   const { pathname } = useLocation()

   const { role } = useSelector((state) => state.auth.user)

   const { options } = useSelector((state) => state.search)

   const dispatch = useDispatch()

   const [isOpen, setIsOpen] = useState(false)

   const openProfile = () => setIsOpen((prevstate) => !prevstate)

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
   return (
      <StyledHeader>
         <Container>
            {pathname.includes('charity') ? (
               <SelectInputSearch />
            ) : (
               isWishLentaSearch()
            )}
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
