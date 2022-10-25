import { useSelector } from 'react-redux'
import { Routes } from 'react-router-dom'
import { ROLE } from '../utils/constants/general'
import AdminRoutes from './AdminRoutes'
import GuestRoutes from './GuestRoutes'
import UserRoutes from './UserRoutes'

function AppRoutes() {
   const { jwt, role } = useSelector((state) => state.user.user)
   if (!jwt) {
      return <GuestRoutes />
   }

   const RoutesComponent = () => {
      return {
         [ROLE.ADMIN]: AdminRoutes(),
         [ROLE.USER]: UserRoutes(),
      }
   }

   return <Routes>{RoutesComponent[role]}</Routes>
}

export default AppRoutes
