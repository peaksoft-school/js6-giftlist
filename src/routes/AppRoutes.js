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
   const jwt =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJOdXJnYXp5IiwiZXhwIjoxNzMyMTk0ODk4LCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.UOmaxpFw8nILnimOv7byz_IuFZPMUP5Au9D9oKT8MJHgWuZ6h1lHbLf47CtziWifr1ClZxQ-ZsyxeBjgkdYiiQ'
   localStorage.setItem('jwt', JSON.stringify(jwt))
   const role = 'ADMIN'
   if (!jwt) {
      return <GuestRoutes />
   }

   return roleController[role]
}

export default AppRoutes
