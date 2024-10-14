import React from 'react'
import LASLogo1 from '../assets/LAS_Logo_1.png'
import StartButton from './StartButton'

function LASMainPageHero() {
  return (
    <div className="text-center md:w-1/2">
      <h1 className="text-4xl mb-2">Learning Styles Assessment</h1>
      <hr className="border-t-2 border-customBlue mb-2" />
      <p>
        Discover your unique learning preferences with our Learning Style
        Assessment! This insightful assessment helps you understand how you
        absorb, process, and retain information best. By identifying your
        dominant learning styles, you can tailor your educational experiences to
        enhance your learning efficiency and effectiveness. The Learning Style
        Inventory consists of a series of simple questions designed to reveal
        your preferred learning methods. Once completed, you’ll receive a
        detailed profile that highlights your learning style, allowing you to
        adopt strategies that cater to your strengths.
      </p>
      <StartButton />
      <img src={LASLogo1} alt="LAS LOGO" />
    </div>
  )
}

export default LASMainPageHero
