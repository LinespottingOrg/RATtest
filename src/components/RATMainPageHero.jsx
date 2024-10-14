import React from 'react'
import RATLogo2 from '../assets/RAT_LOGO_2.png'
import StartButton from './StartButton'

function RATMainPageHero() {
  return (
    <div className="text-center md:w-1/2">
      <h1 className="text-4xl mb-2">Relational Awareness Theory</h1>
      <hr className="border-t-2 border-customBlue mb-2" />
      <p>
        Relational Awareness Theory (RAT) is a framework designed to help
        individuals and organizations better understand the dynamics of their
        relationships. This theory emphasizes that our interactions are shaped
        by more than just personal motivations—our actions are deeply influenced
        by the relationships we maintain with others, whether in personal,
        social, or professional contexts. The goal of Relational Awareness
        Theory is to help individuals recognize the complexity of relationships,
        leading to more meaningful interactions, improved communication, and
        deeper connections. It also provides a valuable lens for understanding
        conflict, collaboration, and leadership in various social structures,
        such as in the workplace or within families.
      </p>
      <StartButton />
      <img src={RATLogo2} alt="RAT LOGO" />
    </div>
  )
}

export default RATMainPageHero
