import { useSelector } from 'react-redux'
import { ROLES } from '../utils/constants/general'
import AdminRoutes from './AdminRoutes'
import GuestRoutes from './GuestRoutes'
import UserRoutes from './UserRoutes'

function AppRoutes() {
   const { jwt, role } = useSelector((state) => state.auth.user)
   if (!jwt) {
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
