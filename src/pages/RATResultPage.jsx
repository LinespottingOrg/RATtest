import React from 'react'
import RATLogo1 from '../assets/RAT_LOGO_1.png'
import RadarChart from '../components/RadarChart'

function RATResultPage({ results }) {
  return (
    <div className="flex md:flex-row md:h-1024 max-w-1440 md:mx-auto text-customTextColor font-poppins ">
      <div className="w-20% text-center hidden md:flex flex-col justify-between bg-gradient-to-r from-primary">
        <div>
          <h1 className="text-2xl md:text-2xl mt-2 font-bold">
            Relational Awereness Theory
          </h1>
        </div>
        <div className="mt-auto h-testLeftLogoSize w-testLeftLogoSize mx-auto">
          <img
            src={RATLogo1}
            alt="RAT LOGO"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="w-80%">
        <RadarChart results={results} />
      </div>
    </div>
  )
}

export default RATResultPage
