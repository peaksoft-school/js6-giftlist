import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './SideBar'

const Layout = () => {
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
               <Sidebar listData={[{ id: '1' }]} />
            </>
         )}
         <Outlet />
      </>
   )
}

export default Layout
