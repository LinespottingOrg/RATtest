import React from 'react'
import LASLogo1 from '../../assets/LAS_Logo_1.png'
import Button from '../Button'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

function LASMainPageHero() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const handleStartTestClick = () => {
    navigate('las/test')
  }

  return (
    <div className="flex flex-col justify-between text-center md:w-1/2 md:h-1024 p-4 text-customTextColor">
      <h1 className="text-2xl md:text-4xl mb-2 font-bold">Learning Styles Assessment</h1>
      <hr className="border-t-2 border-customBlue mb-2" />
      <div className="flex-grow">
        <p className="leading-relaxed mt-4 md:font-semibold md:text-xl">{t('homepage.las.description_text_1')}</p>
        <p className="leading-relaxed mt-4 md:font-semibold md:text-xl">{t('homepage.las.description_text_2')}</p>
      </div>
      <div className="mt-auto h-mainLogoSize w-mainLogoSize mx-auto mb-2">
        <div className="mb-4 mt-2">
          <Button prompt={t('homepage.start_button')} onClick={handleStartTestClick} />
        </div>
        <img src={LASLogo1} alt="LAS LOGO" className="w-full h-full object-contain" />
      </div>
    </div>
  )
}

export default LASMainPageHero
