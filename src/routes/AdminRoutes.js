import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LayoutPage from '../layout/Layout'
import { INITIAL_ROUTES } from '../utils/constants/general'
import ErrorPage from '../components/UI/ErrorPage'
import UserPage from '../containers/admin/UserPage'
import CharityPage from '../containers/admin/CharityAdminPage'
import InnerPageCharity from '../containers/admin/InnerPageAdminCharity'

function AdminRoutes() {
   return (
      <Routes>
         <Route
            path={INITIAL_ROUTES.INITIAL.PATH}
            element={<Navigate replace to="/admin" />}
         />
         <Route path="/admin" element={<LayoutPage />}>
<<<<<<< HEAD
            <Route path="complaints" element={<Complaints />} />
            <Route path="complaints/:id" element={<ComplaintInnerPage />} />
=======
>>>>>>> b1da1ca6e25fe9b35c7e8b31dc8a25bf914b3183
            <Route path="users" element={<UserPage />} />
            <Route path="charityAdmin" element={<CharityPage />} />
            <Route path="charityAdmin/:id" element={<InnerPageCharity />} />
         </Route>
         <Route path={INITIAL_ROUTES.NOT_FOUND.PATH} element={<ErrorPage />} />
      </Routes>
   )
}

export default AdminRoutes
