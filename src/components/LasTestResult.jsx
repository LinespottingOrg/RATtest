import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import { useTranslation } from 'react-i18next'
import LasResultChart from './lasComponents/LasResultChart'
import { returnBestLearningStyle, returnResultValues, returnWorstLearningStyle } from '../utils/lasTestUtils'
import EmailModal from './EmailModal'

function LasTestResult({ data }) {
  /* i18n translation utility */
  const { t } = useTranslation()

  /* react navigation utility */
  const navigate = useNavigate()

  /* takes the user back to the homepage */
  const handleStopTestClick = () => {
    navigate('/')
  }

  /* variables to hold the results */
  const bestLearningStyle = returnBestLearningStyle(returnResultValues(data))
  const worstLearningStyle = returnWorstLearningStyle(returnResultValues(data))

  /* keymapper to map the options in data to more readable results */
  const learningStylesKeyMap = {
    'Concrete Experiences': 'concrete_experiences',
    'Reflective Observation': 'reflective_observation',
    'Abstract Thinking': 'abstract_thinking',
    'Active Experimenting': 'active_experimentation',
  }

  return (
    <div className="w-full mx-auto text-center flex flex-col h-full">
      <div className="m-2">
        <LasResultChart result={data} />
        <hr className="border-2 border-primary opacity-50 md:mx-12" />
      </div>
      <div className="flex flex-col md:flex-row flex-grow">
        <div className="m-2 flex-grow">
          <p className="text-xl font-semibold my-2">{t('resultpage.learning_best')}</p>
          <hr className="border border-primary mx-8" />
          <p className="font-semibold my-2">
            {t(`learning_styles.${learningStylesKeyMap[bestLearningStyle.style]}.style`)}
          </p>
          <hr className="border border-primary mx-4 my-2" />
          <p>{t(`learning_styles.${learningStylesKeyMap[bestLearningStyle.style]}.summary_best`)}</p>
        </div>
        <div className="hidden md:block w-px h-vh my-5 bg-primary mx-4 blur-sm" />
        <div className="m-2 flex-grow">
          <p className="text-xl font-semibold my-2">{t('resultpage.learning_worst')}</p>
          <hr className="border border-primary mx-8" />
          <p className="font-semibold my-2">
            {t(`learning_styles.${learningStylesKeyMap[worstLearningStyle.style]}.style`)}
          </p>
          <hr className="border border-primary mx-4 my-2" />
          <p>{t(`learning_styles.${learningStylesKeyMap[worstLearningStyle.style]}.summary_worst`)}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mx-2">
        <Button prompt={t('resultpage.end_button')} onClick={handleStopTestClick} data-testid={'endTestButton'} />
        <div className="flex flex-row justify-end items-center mx-2">
          <p className="mr-4 hidden md:block">{t('resultpage.mail_prompt')}</p>
          <EmailModal data={data} prompt={t('resultpage.mail_button')} test={'LAS'} data-testid={'emailModal'} />
        </div>
      </div>
      <div className="flex flex-row justify-between m-2 "></div>
    </div>
  )
}

export default LasTestResult
