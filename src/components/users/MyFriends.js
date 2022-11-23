import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import styled from 'styled-components'
import FriendsCard from './FriendsCard'

const FRIENDREQUESTS = 'FRIENDREQUESTS'
const MyFriends = ({ friends, friendRequests }) => {
   const [value, setValue] = useState('1')
   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   const navigate = useNavigate()

   const goToInnerPage = (id) => {
      console.log(id)
      navigate(`/user/friends/${id}`)
   }

   const myFriends = (
      <StyledSpan>
         Мои друзья
         <h4>{friends && friends.length}</h4>
      </StyledSpan>
   )

   const requestFriends = (
      <StyledSpan>
         Запросы в друзья
         <h4>{friendRequests && friendRequests.length}</h4>
      </StyledSpan>
   )

   return (
      <ContainerBox>
         <TabContext value={value}>
            <StyledBox>
               <StyledTabList onChange={handleChange}>
                  <StyledTab label={myFriends} value="1" />
                  <StyledTab label={requestFriends} value="2" />
               </StyledTabList>
            </StyledBox>

            <StyledTabPanel value="1">
               {friends?.map((el) => {
                  return (
                     <FriendsCard
                        fullName={el.fullName}
                        id={el.id}
                        key={el.id}
                        image={el.image}
                        countOfHolidays={el.countOfHolidays}
                        countOfWishes={el.countOfWishes}
                        onClick={() => {
                           goToInnerPage(el.id)
                        }}
                     />
                  )
               })}
            </StyledTabPanel>
            <StyledTabPanel value="2">
               {friendRequests?.map((el) => {
                  return (
                     <FriendsCard
                        fullName={el.fullName}
                        id={el.id}
                        key={el.id}
                        image={el.image}
                        countOfHolidays={el.countOfHolidays}
                        countOfWishes={el.countOfWishes}
                        variant={FRIENDREQUESTS}
                        onClick={() => {
                           goToInnerPage(el.id)
                        }}
                     />
                  )
               })}
            </StyledTabPanel>
         </TabContext>
      </ContainerBox>
   )
}
export default MyFriends

const ContainerBox = styled(Box)`
   height: 100vh;
   background: rgba(247, 248, 250, 1);
   width: 100%;
   margin-left: 20px;
`

const StyledBox = styled(Box)`
   width: 1086px !important;
   height: 32px !important;
   border-radius: 9px;
   box-sizing: border-box;
   border: 0.5px solid #797979;
   display: flex;
   align-items: center;
`
const StyledTabList = styled(TabList)`
   & .MuiTabs-indicator {
      display: none;
   }
   & .Mui-selected {
      background-color: #8639b5;
      span {
         color: white;
      }
      h4 {
         color: #8639b5;
         background-color: white;
      }
   }
`
const StyledTab = styled(Tab)`
   min-width: 542px !important;
   min-height: 28px !important;
   border-radius: 7px !important;
   padding: 0 !important;
   margin-top: 10px !important;
   box-sizing: border-box !important;
`
const StyledSpan = styled('span')`
   text-transform: none;
   color: #8d949e;
   font-family: 'Inter', sans-serif;
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 20px;
   display: flex;
   align-items: center;
   text-align: center;
   letter-spacing: 0.02em;

   h4 {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #595656;
      color: #ffffff;
      justify-content: center;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.02em;
      margin-left: 6px;
   }
`
const StyledTabPanel = styled(TabPanel)`
   position: absolute;
   margin-left: -30px;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: repeat(4, 1fr);
   grid-column-gap: 15px;
   grid-row-gap: 15px;
`
