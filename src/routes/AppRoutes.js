import React from 'react'
import { ROLES } from '../utils/constants/general'
import AdminRoutes from './AdminRoutes'
import GuestRoutes from './GuestRoutes'
import UserRoutes from './UserRoutes'

function AppRoutes() {
   const role = 'ADMIN'

   if (!role) {
      return <GuestRoutes />
   }

   return (
      <>
         {role === ROLES.ADMIN && <AdminRoutes />}
         {role === ROLES.USER && <UserRoutes />}
      </>
   )
}

export default AppRoutes
