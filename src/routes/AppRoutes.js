import { useSelector } from 'react-redux'
import GuestRoutes from './GuestRoutes'
import AdminRoutes from './AdminRoutes'
import UserRoutes from './UserRoutes'
import { ROLES } from '../utils/constants/general'

const roleController = {
   [ROLES.ADMIN]: <AdminRoutes />,
   [ROLES.USER]: <UserRoutes />,
}
function AppRoutes() {
   const { role, jwt } = useSelector((state) => state.auth.user)

   if (!jwt) return <GuestRoutes />

   return roleController[role]
}

export default AppRoutes
