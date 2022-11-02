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
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJOdXJnYXp5IiwiZXhwIjoxNzMyMjAzNTg1LCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.KP7eytoQ5CXLAwkmAOKPRi3bGpWPcTzIekqCkaZ78PanGOl0PbXhXAD3a91-S3cCYHEMpJDJ-svjJJtlqGT-pQ'
   localStorage.setItem('jwt', JSON.stringify(jwt))
   const role = 'ADMIN'
   if (!jwt) {
      return <GuestRoutes />
   }

   return roleController[role]
}

export default AppRoutes
