import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { INITIAL_ROUTES } from '../utils/constants/general'
// import LayoutPage from '../layout/LayoutPage'

function UserRoutes() {
   return (
      <Routes>
         <Route
            path={INITIAL_ROUTES.INITIAL.PATH}
            element={<div>testUSER</div>}
         />
         <Route path="*" element={<h1 style={{ color: 'red' }}>Hello</h1>} />
      </Routes>
   )
}

export default UserRoutes
