import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutPage from '../layout/LayoutPage'

function AdminRoutes() {
   return (
      <Routes>
         <Route path="/ADMIN" element={<LayoutPage />} />
         <Route path="*" element={<h1 style={{ color: 'red' }}>Hello</h1>} />
      </Routes>
   )
}

export default AdminRoutes
