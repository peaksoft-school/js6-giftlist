import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './SideBar'

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
