import React from 'react'
import RATMainPageHero from '../components/RATMainPageHero'
import LASMainPageHero from '../components/LASMainPageHero'

function HomePage() {
  return (
    <div className="flex md:flex-row md:mx-auto p-4 flex-col font-poppins max-w-1440">
      <RATMainPageHero />
      <hr className="border-t-4 bg-customBlue mb-2 blur-sm" />
      <div className="hidden md:block w-px h-vh bg-customBlue mx-4 blur-sm" />
      <LASMainPageHero />
    </div>
  )
}

export default HomePage
