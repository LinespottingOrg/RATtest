import React from 'react'
import LASLogo1 from '../assets/LAS_Logo_1.png'
import StartButton from './StartButton'

function LASMainPageHero() {
  return (
    <div className="flex flex-col justify-between text-center md:w-1/2 md:h-1024 p-4 text-customTextColor">
      <h1 className="text-2xl md:text-4xl mb-2 font-bold">
        Learning Styles Assessment
      </h1>
      <hr className="border-t-2 border-customBlue mb-2" />
      <div className="flex-grow">
        <p className="leading-relaxed mt-4 md:font-semibold md:text-xl">
          Discover your unique learning preferences with our Learning Style
          Assessment! This insightful assessment helps you understand how you
          absorb, process, and retain information best. By identifying your
          dominant learning styles, you can tailor your educational experiences
          to enhance your learning efficiency and effectiveness.
        </p>
        <p className="leading-relaxed mt-4 md:font-semibold md:text-xl">
          The Learning Style Inventory consists of a series of simple questions
          designed to reveal your preferred learning methods. Once completed,
          you’ll receive a detailed profile that highlights your learning style,
          allowing you to adopt strategies that cater to your strengths.
        </p>
      </div>
      <div className="mt-auto h-mainLogoSize w-mainLogoSize mx-auto mb-2">
        <div className="mb-4">
          <StartButton />
        </div>
        <img
          src={LASLogo1}
          alt="LAS LOGO"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}

export default LASMainPageHero
