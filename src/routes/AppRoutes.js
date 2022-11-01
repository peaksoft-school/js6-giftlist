// import { useSelector } from 'react-redux'
import GuestRoutes from './GuestRoutes'
import AdminRoutes from './AdminRoutes'
import UserRoutes from './UserRoutes'
import { ROLES } from '../utils/constants/general'

const roleController = {
   [ROLES.ADMIN]: <AdminRoutes />,
   [ROLES.USER]: <UserRoutes />,
}
function AppRoutes() {
   // const { jwt, role } = useSelector((state) => state.auth.user)
   const jwt = true
   const role = 'ADMIN'
   if (!jwt) {
      return <GuestRoutes />
   }

   return roleController[role]
}

export default AppRoutes
