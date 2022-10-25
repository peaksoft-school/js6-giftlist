import { ROLE } from '../utils/constants/general'
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
         {role === ROLE.ADMIN && <AdminRoutes />}
         {role === ROLE.USER && <UserRoutes />}
      </>
   )
}

export default AppRoutes
