import { ROLES } from '../utils/constants/general'

function AppRoutes({ role }) {
   const { route } = ROLES.find((r) => r.name === role)

   return route
}

export default AppRoutes
