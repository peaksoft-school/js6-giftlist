import React from 'react'
import { Route, Routes } from 'react-router-dom'

function UserRoutes() {
   return (
      <Routes>
         <Route path="/" element={<div>User</div>} />
      </Routes>
   )
}

export default UserRoutes
