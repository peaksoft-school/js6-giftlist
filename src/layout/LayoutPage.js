import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './SideBar'

const LayoutPage = () => {
   const { role } = useSelector((state) => state.auth.user)
   return (
      <>
         {role === 'ADMIN' ? (
            <>
               <Header />
               <Sidebar />
            </>
         ) : (
            <>
               <Header />
               <Sidebar />
            </>
         )}
         <Outlet />
      </>
   )
}

export default LayoutPage
