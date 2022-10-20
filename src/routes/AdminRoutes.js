import React from 'react'
import { Route, Routes } from 'react-router-dom'

function AdminRoutes() {
   return (
      <Routes>
         <Route path="/" element={<div>ADMIN</div>} />
      </Routes>
   )
}

export default AdminRoutes
