import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ErrorPage from '../components/UI/ErrorPage'
import { INITIAL_ROUTES } from '../utils/constants/general'
// import LayoutPage from '../layout/LayoutPage'

function UserRoutes() {
   return (
      <Routes>
         <Route
            path={INITIAL_ROUTES.INITIAL.PATH}
            element={<div>testUSER</div>}
         >
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<div>test userPages</div>} />
         </Route>
         <Route path={INITIAL_ROUTES.NOT_FOUND.PATH} element={<ErrorPage />} />
      </Routes>
   )
}

export default UserRoutes
