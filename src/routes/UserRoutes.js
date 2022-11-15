import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ErrorPage from '../components/UI/ErrorPage'
import HomePage from '../components/users/HomePage'
import { INITIAL_ROUTES } from '../utils/constants/general'
import LayoutPage from '../layout/Layout'
import HolidaysPage from '../containers/HolidaysPage'
import WishListPage from '../components/users/WishListPage'
import WishInnerPage from '../containers/WishInnerPage'

function UserRoutes() {
   return (
      <Routes>
         <Route
            path={INITIAL_ROUTES.INITIAL.PATH}
            element={<Navigate replace to="/user" />}
         />
         <Route path="/user" element={<LayoutPage />}>
            <Route element={<Navigate replace to="/user/homePage" />} index />
            <Route path="homePage" element={<HomePage />} />
            <Route path="holidays" element={<HolidaysPage />} />
            <Route path="wish_list" element={<WishListPage />} />
            <Route path="wish_list/add" element={<WishInnerPage />} />
         </Route>
         <Route path={INITIAL_ROUTES.NOT_FOUND.PATH} element={<ErrorPage />} />
      </Routes>
   )
}

export default UserRoutes
