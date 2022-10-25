import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error from '../components/UI/Error'
import { INITIAL_ROUTES } from '../utils/constants/general'
// import LayoutPage from '../layout/LayoutPage'

function UserRoutes() {
   return (
      <Routes>
         <Route
            path={INITIAL_ROUTES.INITIAL.PATH}
            element={<div>testUSER</div>}
         />
         <Route path={INITIAL_ROUTES.NOT_FOUND.PATH} element={<Error />} />
      </Routes>
   )
}

export default UserRoutes
