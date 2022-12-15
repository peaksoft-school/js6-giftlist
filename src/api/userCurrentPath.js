import { matchRoutes, useLocation } from 'react-router-dom'

const routes = [
   { path: '/user/lenta' },
   { path: '/user/friends' },
   { path: '/user/wishlist/*' },
   { path: '/user/holidays' },
   { path: '/user/bookedPage' },
   { path: '/user/charity' },
   { path: '/user/complaints/*' },
]

export const useCurrentPath = () => {
   const location = useLocation()
   const route = matchRoutes(routes, location)
   if (route) {
      const [routeObject] = route
      return routeObject.pathnameBase
   }
   return '/'
}
