import React from 'react'
import AdminRoutes from './AdminRoutes'
import UserRoutes from './UserRoutes'

function AppRoutes() {
   const role = ''
   const routes = { ADMIN: '', USER: '' }

   return (
      <>
         {role === routes.ADMIN && <AdminRoutes />}
         {role === routes.USER && <UserRoutes />}
      </>
   )
}

export default AppRoutes
