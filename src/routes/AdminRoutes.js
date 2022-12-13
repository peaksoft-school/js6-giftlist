import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LayoutPage from '../layout/Layout'
import { INITIAL_ROUTES } from '../utils/constants/general'
import ErrorPage from '../components/UI/ErrorPage'
import UserPage from '../containers/admin/UserPage'
import UsersInnerPage from '../containers/admin/UsersInnerPage'

function AdminRoutes() {
   return (
      <Routes>
         <Route
            path={INITIAL_ROUTES.INITIAL.PATH}
            element={<Navigate replace to="/admin" />}
         />
         <Route path="/admin" element={<LayoutPage />}>
            <Route
               path="/admin"
               element={<Navigate replace to="/admin/users" />}
            />
            <Route path="users" element={<UserPage />} />
            <Route path="users/:id" element={<UsersInnerPage />} />
         </Route>
         <Route path={INITIAL_ROUTES.NOT_FOUND.PATH} element={<ErrorPage />} />
      </Routes>
   )
}

export default AdminRoutes
