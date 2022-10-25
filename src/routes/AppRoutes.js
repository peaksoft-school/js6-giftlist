import { useSelector } from 'react-redux'
import { ROLE } from '../utils/constants/general'
import AdminRoutes from './AdminRoutes'
import GuestRoutes from './GuestRoutes'
import UserRoutes from './UserRoutes'

function AppRoutes() {
   const { jwt, role } = useSelector((state) => state.user.user)
   console.log(jwt, role)
   if (!jwt) {
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
