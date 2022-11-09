import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Sidebar from './SideBar'

const LayoutPage = () => {
   const { role } = useSelector((state) => state.auth.user)
   return (
      <>
         {role === 'ADMIN' ? <Sidebar /> : <Sidebar />}
         <Outlet />
      </>
   )
}

export default LayoutPage
