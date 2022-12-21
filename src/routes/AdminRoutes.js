import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LayoutPage from '../layout/Layout'
import { INITIAL_ROUTES } from '../utils/constants/general'
import ErrorPage from '../components/UI/ErrorPage'
import UserPage from '../containers/admin/UserPage'
import Complaints from '../containers/admin/Complaints'
import ComplaintInnerPage from '../containers/admin/ComplaintInnerPage'
import CharityPage from '../containers/admin/CharityPage'
import InnerPageCharity from '../containers/admin/InnerPageCharity'

function AdminRoutes() {
   return (
      <Routes>
         <Route
            path={INITIAL_ROUTES.INITIAL.PATH}
            element={<Navigate replace to="/admin" />}
         />
         <Route path="/admin" element={<LayoutPage />}>
            <Route path="complaints" element={<Complaints />} />
            <Route path="complaints/:id" element={<ComplaintInnerPage />} />
            <Route path="users" element={<UserPage />} />
            <Route path="charityAdmin" element={<CharityPage />} />
            <Route path="charityAdmin/:id" element={<InnerPageCharity />} />
         </Route>
         <Route path={INITIAL_ROUTES.NOT_FOUND.PATH} element={<ErrorPage />} />
      </Routes>
   )
}

export default AdminRoutes
