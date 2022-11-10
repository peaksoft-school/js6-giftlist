import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const LayoutPage = () => {
   const { role } = useSelector((state) => state.auth.user)
   return (
      <>
         {role === 'ADMIN' ? <div>Test ADMIN</div> : <div>Test USER</div>}
         <Outlet />
      </>
   )
}

export default LayoutPage
