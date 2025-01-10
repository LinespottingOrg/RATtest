import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'
import { useTranslation } from 'react-i18next'

function RATMainPageHero({ handleTranslation, isEnglish }) {
  /* i18n translation utility */
  const { t } = useTranslation()

  /* React navigation utility */
  const navigate = useNavigate()

  /* handles clicking on start test */
  const handleStartTestClick = () => {
    navigate('rat/test')
  }

  //TODO: create a description text component
  //TODO: create the translation toggle component
  return (
    <div className="flex flex-col justify-between text-center md:w-1/2 md:h-1024 p-4 text-customTextColor">
      <h1 className="text-2xl md:text-4xl mb-2 font-bold">Relational Awareness Theory</h1>
      <hr className="border-t-2 border-primary mb-2" />
      <div className="flex-grow">
        <label className="flex cursor-pointer gap-2 justify-center">
          <span className="label-text">Swedish</span>
          <input type="checkbox" checked={isEnglish} className="toggle" onChange={handleTranslation} />
          <span className="label-text">English</span>
        </label>
        <p className="leading-relaxed mt-4 md:font-semibold md:text-xl">{t('homepage.rat.description_text_1')}</p>
        <p className="leading-relaxed mt-4 md:font-semibold md:text-xl">{t('homepage.rat.description_text_2')}</p>
      </div>

      <div className="h-mainLogoSize w-mainLogoSize mx-auto mb-2">
        <div className="mb-4 mt-2">
          <Button prompt={t('homepage.start_button')} onClick={handleStartTestClick} />
        </div>
        <img src="/assets/RAT_LOGO_2.png" alt="rat logo" className="w-full h-full object-contain" />
      </div>
    </div>
  )
}

export default RATMainPageHero
