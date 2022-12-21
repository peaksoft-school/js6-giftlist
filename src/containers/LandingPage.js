import React from 'react'
import TopSection from './TopSection'
import { MainLendingPage } from './landingPage/MainLandingPage'
import CountingUp from '../components/landingPage/CountingUp'

function LandingPage() {
   return (
      <div>
         <TopSection />
         <CountingUp />
         <MainLendingPage />
      </div>
   )
}

export default LandingPage
