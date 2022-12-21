import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LayoutPage from '../layout/Layout'
import { INITIAL_ROUTES } from '../utils/constants/general'
import ErrorPage from '../components/UI/ErrorPage'
import UserPage from '../containers/admin/UserPage'
import UsersInnerPage from '../containers/admin/UsersInnerPage'
import MainlingPage from '../containers/admin/MainlingPage'
import MailingInnerPage from '../containers/admin/MailingInnerPage'
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
            <Route element={<Navigate replace to="/admin/users" />} index />
            <Route path="users" element={<UserPage />} />
            <Route path="users/:id" element={<UsersInnerPage />} />
            <Route path="mailing" element={<MainlingPage />} />
            <Route
               path="mailing/:id/inner-page"
               element={<MailingInnerPage />}
            />
            <Route path="charityAdmin" element={<CharityPage />} />
            <Route path="charityAdmin/:id" element={<InnerPageCharity />} />
         </Route>
         <Route path={INITIAL_ROUTES.NOT_FOUND.PATH} element={<ErrorPage />} />
      </Routes>
   )
}

export default AdminRoutes
