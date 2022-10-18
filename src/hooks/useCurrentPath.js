import { matchRoutes, useLocation } from 'react-router-dom'

const routes = [{ path: '/posts/*' }, { path: '/main/*' }, { path: '/' }]

export const useCurrentPath = () => {
   const location = useLocation()
   const [route] = matchRoutes(routes, location)

   return route.pathnameBase
}
