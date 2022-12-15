import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './SideBar'
import Header from './Header'

const Layout = () => {
   return (
      <>
         <Header />
         <Sidebar />
         <Outlet />
      </>
   )
}

export default Layout
