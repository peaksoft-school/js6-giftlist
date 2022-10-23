import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutPage from '../layout/LayoutPage'

function AdminRoutes() {
   return (
      <Routes>
         <Route path="/" element={<LayoutPage />} />
      </Routes>
   )
}

export default AdminRoutes
