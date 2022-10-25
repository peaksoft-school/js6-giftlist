import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LayoutPage from '../layout/LayoutPage'
import { INITIAL_ROUTES } from '../utils/constants/general'
import Error from '../components/UI/Error'
import UserPage from '../containers/admin/UserPage'

function AdminRoutes() {
   return (
      <Routes>
         <Route path={INITIAL_ROUTES.INITIAL.PATH} element={<LayoutPage />}>
            <Route path="/" element={<Navigate replace to="/users" />} />
            <Route path="/" element={<UserPage />} />
         </Route>
         <Route path={INITIAL_ROUTES.NOT_FOUND.PATH} element={<Error />} />
      </Routes>
   )
}

export default AdminRoutes
