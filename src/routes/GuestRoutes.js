import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../containers/LandingPage'

function GuestRoutes() {
   return (
      <Routes>
         <Route path="/" element={<LandingPage />} />
         <Route path="*" element={<h1 style={{ color: 'red' }}>Hello</h1>} />
      </Routes>
   )
}

export default GuestRoutes
