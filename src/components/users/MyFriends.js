import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import styled from 'styled-components'
import FriendsCard from './FriendsCard'

const FRIENDREQUESTS = 'FRIENDREQUESTS'

function TabPanel(props) {
   const { children, value, index, ...other } = props

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <Typography>{children}</Typography>
            </Box>
         )}
      </div>
   )
}

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
   }
}

export default function MyFriends({ friends, friendRequests }) {
   const [value, setValue] = React.useState(0)
   const navigate = useNavigate()

   const goToInnerPage = (id) => {
      navigate(`/user/friends/${id}`)
   }

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   return (
      <Box sx={{ width: '100%' }}>
         <Box sx={{ borderColor: 'divider' }}>
            <TabList
               value={value}
               onChange={handleChange}
               aria-label="basic tabs example"
            >
               <StyledTab label="Мои друзья" {...a11yProps(0)} />
               <StyledTab label="Запросы в друзья" {...a11yProps(1)} />
            </TabList>
         </Box>
         <TabPanels value={value} index={0}>
            <Div>
               {friends?.map((el) => {
                  return (
                     <FriendsCard
                        fullName={el.fullName}
                        id={el.id}
                        key={el.id}
                        image={el.image}
                        countOfHolidays={el.countOfHolidays}
                        countOfWishes={el.countOfWishes}
                        onClick={(e) => {
                           goToInnerPage(el.id)
                           e.stopPropagation()
                        }}
                     />
                  )
               })}
            </Div>
         </TabPanels>
         <TabPanels value={value} index={1}>
            <Div>
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
                        onClick={(e) => {
                           goToInnerPage(el.id)
                           e.stopPropagation()
                        }}
                     />
                  )
               })}
            </Div>
         </TabPanels>
      </Box>
   )
}

const Div = styled('div')`
   display: flex;
   gap: 10px;
`
const StyledTab = styled(Tab)`
   min-width: 542px !important;
   min-height: 28px !important;
   border-radius: 7px !important;
   padding: 0 !important;
   box-sizing: border-box !important;
   &.css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
      background-color: #8639b5;
      color: rgba(255, 255, 255, 1);
   }
   &.span {
      background-color: red;
   }
`

const TabList = styled(Tabs)`
   & .css-heg063-MuiTabs-flexContainer {
      border: 0.5px solid #797979;
      height: 32px;
      width: 1086px;
      border-radius: 8.90999984741211px;
   }

   & .css-1aquho2-MuiTabs-indicator {
      background-color: transparent;
   }
`

const TabPanels = styled(TabPanel)``
