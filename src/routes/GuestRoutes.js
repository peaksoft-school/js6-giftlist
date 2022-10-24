import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../containers/LandingPage'

function GuestRoutes() {
   return (
      <Routes>
         <Route path="/" element={<LandingPage />} />
      </Routes>
   )
}

export default GuestRoutes
