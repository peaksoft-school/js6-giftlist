import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ErrorPage from '../components/UI/ErrorPage'
import { INITIAL_ROUTES } from '../utils/constants/general'
import LayoutPage from '../layout/Layout'
import HolidaysPage from '../containers/HolidaysPage'
import HolidayInnerPage from '../containers/holidayInnerPage'
import WishListPage from '../components/users/WishListPage'
import WishInnerPage from '../containers/WishInnerPage'
import WishEdditPage from '../components/users/WishEdditPage'
import CharityPage from '../components/users/CharityPage'
import CharityInnerPage from '../containers/CharityInnerPage'
import FriendProfilePage from '../containers/profile/FriendProfilePage'
import FriendsPage from '../containers/FriendsPage'
import CharityEdditPage from '../components/users/CharityEdditPage'
import CharityMyEddit from '../components/users/CharityMyEddit'
import InnerPage from '../components/users/InnerPage'
import Lenta from '../components/users/lenta/Lenta'
import InnerLenta from '../components/users/lenta/InnerLenta'
import InnerHolidayEdit from '../components/users/InnerHolidayEdit'

function UserRoutes() {
   return (
      <Routes>
         <Route
            path={INITIAL_ROUTES.INITIAL.PATH}
            element={<Navigate replace to="/user" />}
         />
         <Route path="/user" element={<LayoutPage />}>
            <Route element={<Navigate replace to="/user/lenta" />} index />
            <Route path="lenta" element={<Lenta />} />
            <Route path="lenta/:id/inner-page" element={<InnerLenta />} />
            <Route path="holidays" element={<HolidaysPage />} />
            <Route
               path="holidays/:id/inner-page"
               element={<HolidayInnerPage />}
            />
            <Route
               path="holidays/:id/eddit-page"
               element={<InnerHolidayEdit />}
            />
            <Route path="wishlist" element={<WishListPage />} />
            <Route path="wishlist/new" element={<WishInnerPage />} />
            <Route path="wishlist/:id/edit" element={<WishEdditPage />} />
            <Route path="charity" element={<CharityPage />} />
            <Route path="friends" element={<FriendsPage />} />
            <Route path="friends/:id" element={<FriendProfilePage />} />
            <Route path="charity/add-charity" element={<CharityInnerPage />} />
            <Route path="charity/:id/myEddit" element={<CharityMyEddit />} />
            <Route path="charity/:id/eddit" element={<CharityEdditPage />} />
            <Route path="charity/:id/inner-page" element={<InnerPage />} />
         </Route>
         <Route path={INITIAL_ROUTES.NOT_FOUND.PATH} element={<ErrorPage />} />
      </Routes>
   )
}

export default UserRoutes
