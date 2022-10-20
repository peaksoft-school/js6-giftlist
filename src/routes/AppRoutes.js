import React from 'react'
import { ROLES } from '../utils/constants/general'
import AdminRoutes from './AdminRoutes'
import UserRoutes from './UserRoutes'

function AppRoutes() {
   const role = 'ADMIN'

   return (
      <>
         {role === ROLES.ADMIN && <AdminRoutes />}
         {role === ROLES.USER && <UserRoutes />}
      </>
   )
}

export default AppRoutes
