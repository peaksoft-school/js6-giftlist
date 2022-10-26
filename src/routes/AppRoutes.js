// import { useSelector } from 'react-redux'
import GuestRoutes from './GuestRoutes'
import AdminRoutes from './AdminRoutes'
import UserRoutes from './UserRoutes'
import { ROLES } from '../utils/constants/general'

const routerComponents = {
   [ROLES.ADMIN]: <AdminRoutes />,
   [ROLES.USER]: <UserRoutes />,
}
function AppRoutes() {
   // const { jwt, role } = useSelector((state) => state.auth.user)
   const jwt = true
   const role = ''
   if (!jwt) {
      return <GuestRoutes />
   }

   return routerComponents[role]
}

export default AppRoutes
