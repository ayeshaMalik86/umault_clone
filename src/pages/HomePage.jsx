import React from 'react'
import HeroSection from '../components/HeroSection'
import RegisterPage from '../components/RegisterPage'
import ButtonStack from '../components/ButtonStack'
import Advertisement from '../components/Advertisement'
import RevenueIncrease from '../components/RevenueIncrease'


const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <RegisterPage/>
      <ButtonStack/>
      <RevenueIncrease/>
      <Advertisement/>
    </div>
  )
}

export default HomePage
