import React from 'react'
import HeroSection from '../components/HeroSection'
import RegisterPage from '../components/RegisterPage'
import ButtonStack from '../components/ButtonStack'
import Advertisement from '../components/Advertisement'
import RevenueIncrease from '../components/RevenueIncrease'
import PerformingVideo from '../components/PerformingVideo'
import Views from '../components/Views'
import B2Bpattern from '../components/B2Bpattern'
import Spectacular from '../components/Spectacular'


const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <RegisterPage/>
      <ButtonStack/>
      <B2Bpattern/>
      <Spectacular/>
      <RevenueIncrease/>
      <Views/>
      <PerformingVideo/>
      <Advertisement/>
    </div>
  )
}

export default HomePage
