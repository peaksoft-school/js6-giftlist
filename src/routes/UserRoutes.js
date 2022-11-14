import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ErrorPage from '../components/UI/ErrorPage'
// import HomePage from '../components/users/HomePage'
import { INITIAL_ROUTES } from '../utils/constants/general'
import LayoutPage from '../layout/LayoutPage'
import FriendPage from '../components/users/FriendsPage'
import FriendProfilePage from '../containers/profile/FriendProfilePage'

function UserRoutes() {
   return (
      <Routes>
<<<<<<< HEAD
         <Route path={INITIAL_ROUTES.INITIAL.PATH} element={<LayoutPage />}>
            <Route path="/" element={<Navigate replace to="/homePage" />} />
            <Route path="/homePage" element={<FriendPage />} />
            <Route path="/friends/:id" element={<FriendProfilePage />} />
=======
         <Route
            path={INITIAL_ROUTES.INITIAL.PATH}
            element={<Navigate replace to="/user" />}
         />
         <Route path="/user" element={<LayoutPage />}>
            <Route
               path="/user"
               element={<Navigate replace to="/user/homePage" />}
            />
            <Route path="homePage" element={<HomePage />} />
>>>>>>> ef824715b74d8c4fd38067631ccd3c2f489b0398
         </Route>
         <Route path={INITIAL_ROUTES.NOT_FOUND.PATH} element={<ErrorPage />} />
      </Routes>
   )
}

export default UserRoutes
