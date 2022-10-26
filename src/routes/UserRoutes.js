import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ErrorPage from '../components/UI/ErrorPage'
import HomePage from '../components/users/HomePage'
import LayoutPage from '../layout/LayoutPage'
import { INITIAL_ROUTES } from '../utils/constants/general'

function UserRoutes() {
   return (
      <Routes>
         <Route path={INITIAL_ROUTES.INITIAL.PATH} element={<LayoutPage />}>
            <Route path="/" element={<Navigate replace to="/homePage" />} />
            <Route path="/homePage" element={<HomePage />} />
         </Route>
         <Route path={INITIAL_ROUTES.NOT_FOUND.PATH} element={<ErrorPage />} />
      </Routes>
   )
}

export default UserRoutes
