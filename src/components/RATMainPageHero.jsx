import React from 'react'
import { useNavigate } from 'react-router-dom'
import RATLogo2 from '../assets/RAT_LOGO_2.png'
import StartButton from './StartButton'

function RATMainPageHero() {
  const navigate = useNavigate()
  const handleStartTestClick = () => {
    navigate('/rat/test')
  }
  return (
    <div className="flex flex-col justify-between text-center md:w-1/2 md:h-1024 p-4 text-customTextColor">
      <h1 className="text-2xl md:text-4xl mb-2 font-bold">
        Relational Awareness Theory
      </h1>
      <hr className="border-t-2 border-customBlue mb-2" />
      <div className="flex-grow ">
        <p className="leading-relaxed mt-4 md:font-semibold md:text-xl">
          Relational Awareness Theory (RAT) is a framework designed to help
          individuals and organizations better understand the dynamics of their
          relationships. This theory emphasizes that our interactions are shaped
          by more than just personal motivations—our actions are deeply
          influenced by the relationships we maintain with others, whether in
          personal, social, or professional contexts.
        </p>
        <p className="leading-relaxed mt-4 md:font-semibold md:text-xl">
          The goal of Relational Awareness Theory is to help individuals
          recognize the complexity of relationships, leading to more meaningful
          interactions, improved communication, and deeper connections. It also
          provides a valuable lens for understanding conflict, collaboration,
          and leadership in various social structures, such as in the workplace
          or within families.
        </p>
      </div>

      <div className="h-mainLogoSize w-mainLogoSize mx-auto mb-2">
        <div className="mb-4">
          <StartButton onClick={handleStartTestClick} />
        </div>
        <img
          src={RATLogo2}
          alt="RAT LOGO"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  )
}

export default RATMainPageHero
