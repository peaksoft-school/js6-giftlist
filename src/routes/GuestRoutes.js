import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error from '../components/UI/Error'
import LandingPage from '../containers/LandingPage'
import { INITIAL_ROUTES } from '../utils/constants/general'

function GuestRoutes() {
   return (
      <Routes>
         <Route path={INITIAL_ROUTES.INITIAL.PATH} element={<LandingPage />} />
         <Route path={INITIAL_ROUTES.NOT_FOUND.PATH} element={<Error />} />
      </Routes>
   )
}

export default GuestRoutes
