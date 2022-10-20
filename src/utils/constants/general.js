import AdminRoutes from '../../routes/AdminRoutes'
import GuestRoutes from '../../routes/GuestRoutes'
import UserRoutes from '../../routes/UserRoutes'

export const ROLES = [
   {
      name: 'ADMIN',
      route: <AdminRoutes />,
   },
   {
      name: 'USER',
      route: <UserRoutes />,
   },
   {
      name: null,
      route: <GuestRoutes />,
   },
]
