import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LayoutPage from '../layout/Layout'
import { INITIAL_ROUTES } from '../utils/constants/general'
import ErrorPage from '../components/UI/ErrorPage'
import UserPage from '../containers/admin/UserPage'
import Complaints from '../containers/admin/Complaints'
import ComplaintInnerPage from '../containers/admin/ComplaintInnerPage'

function AdminRoutes() {
   return (
      <Routes>
         <Route
            path={INITIAL_ROUTES.INITIAL.PATH}
            element={<Navigate replace to="/admin" />}
         />
         <Route path="/admin" element={<LayoutPage />}>
            <Route path="/admin" element={<Navigate replace to="/admin" />} />
            <Route path="admin/" element={<UserPage />} />
            <Route path="complaints" element={<Complaints />} />
            <Route
               path="complaints/:id/inner-page"
               element={<ComplaintInnerPage />}
            />
         </Route>
         <Route path={INITIAL_ROUTES.NOT_FOUND.PATH} element={<ErrorPage />} />
      </Routes>
   )
}

export default AdminRoutes
