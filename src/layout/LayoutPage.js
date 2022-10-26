import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutPage = () => {
   const role = 'ADMIN'
   return (
      <>
         {role === 'ADMIN' ? <div>Test ADMIN</div> : <div>Test USER</div>}
         <Outlet />
      </>
   )
}

export default LayoutPage
