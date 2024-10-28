import React from 'react'
import { useNavigate } from 'react-router-dom'
import RATLogo2 from '../../assets/RAT_LOGO_2.png'
import Button from '../Button'
import { useTranslation } from 'react-i18next'

function RATMainPageHero() {
  const navigate = useNavigate()
  const { t } = useTranslation()
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
          {t('homepage.rat.description_text_1')}
        </p>
        <p className="leading-relaxed mt-4 md:font-semibold md:text-xl">
          {t('homepage.rat.description_text_2')}
        </p>
      </div>

      <div className="h-mainLogoSize w-mainLogoSize mx-auto mb-2">
        <div className="mb-4 mt-2">
          <Button
            prompt={t('homepage.start_button')}
            onClick={handleStartTestClick}
          />
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
