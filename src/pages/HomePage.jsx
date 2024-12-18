import React, { useState, useEffect } from 'react'
import RATMainPageHero from '../components/ratComponents/RATMainPageHero'
import LASMainPageHero from '../components/lasComponents/LASMainPageHero'

function HomePage({ toggleLanguage, isEnglish }) {
  return (
    <div className="flex md:flex-row md:mx-auto p-4 flex-col font-poppins max-w-1440 h-full">
      <RATMainPageHero handleTranslation={toggleLanguage} isEnglish={isEnglish} />
      <hr className="border-t-4 bg-primary mb-2 blur-sm" />
      <div className="hidden md:block w-px h-vh bg-primary mx-4 blur-sm" />
      <LASMainPageHero handleTranslation={toggleLanguage} isEnglish={isEnglish} />
    </div>
  )
}

export default HomePage
