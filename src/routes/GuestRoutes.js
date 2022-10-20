import React from 'react'
import { Route, Routes } from 'react-router-dom'

function GuestRoutes() {
   return (
      <Routes>
         <Route path="/" element={<div>Guest</div>} />
      </Routes>
   )
}

export default GuestRoutes
