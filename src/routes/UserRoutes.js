import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import LayoutPage from '../layout/LayoutPage'

function UserRoutes() {
   return (
      <Routes>
         <Route path="/USER" element={<div>testUSER</div>} />
         <Route path="*" element={<h1 style={{ color: 'red' }}>Hello</h1>} />
      </Routes>
   )
}

export default UserRoutes
