import React from 'react'
import HeroSection from '../components/HeroSection'
import RegisterPage from '../components/RegisterPage'
import ButtonStack from '../components/ButtonStack'
import Advertisement from '../components/Advertisement'
import B2Bpattern from '../components/B2Bpattern'
import { ServicesSection } from '../components/ServiceSection'



const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <RegisterPage/>
      <ButtonStack/>
      <B2Bpattern/>
      <ServicesSection/>
      <Advertisement/>
    </div>
  )
}

export default HomePage
