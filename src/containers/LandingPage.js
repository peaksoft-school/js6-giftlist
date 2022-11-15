import React from 'react'
import TopSection from './TopSection'
import { MainLendingPage } from './landingPage/MainLandingPage'
import CountingUp from '../components/landingPage/CountingUp'

function LandingPage() {
   return (
      <>
         <TopSection />
         <CountingUp />
         <MainLendingPage />
      </>
   )
}

export default LandingPage
