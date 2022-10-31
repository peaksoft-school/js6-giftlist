export const ROLES = {
   ADMIN: 'ADMIN',
   USER: 'USER',
}

export const INITIAL_ROUTES = {
   INITIAL: {
      PATH: '/',
   },
   NOT_FOUND: {
      PATH: '*',
   },
}

export const RolePaths = {
   USER: [
      {
         pathName: 'Лента',
         path: '/homePage',
         icon: '',
      },
   ],
   ADMIN: [
      {
         pathName: 'Пользователи',
         path: '/users',
         icon: '',
      },
   ],
}
