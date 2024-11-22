import React from 'react'
import { useNavigate } from 'react-router-dom'
import RatResultChart from './ratComponents/RatResultChart'
import Button from './Button'
import EmailModal from './EmailModal'
import { setTestResultValues, returnAwarenessPattern } from '../utils/ratTestUtils'
import { useTranslation } from 'react-i18next'
import splitData from '../utils/splitData'

function TestResult({ data }) {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const nonConflictResults = returnAwarenessPattern(setTestResultValues(splitData(data, 0, 10)))
  const conflictResults = returnAwarenessPattern(setTestResultValues(splitData(data, 10, 20)))

  const handleStopTestClick = () => {
    navigate('/')
  }

  const awarenessTypeKeyMap = {
    'Analytical & Independent': 'analytical_independent',
    'Selfless & Nurturing': 'selfless_nurturing',
    'Assertive & Direct': 'assertive_direct',
  }

  return (
    <div className="w-full mx-auto text-center flex flex-col h-full">
      <div className="m-2">
        <RatResultChart results={data} data-testid={'ratResultChart'} />
        <hr className="border-2 border-primary opacity-50 md:mx-12" />
      </div>
      <div className="flex flex-col md:flex-row flex-grow">
        <div className="m-2 flex-grow">
          <p className="text-xl font-semibold my-2">{t('resultpage.non_conflict')}</p>
          <hr className="border border-primary mx-8" />
          <p className="font-semibold my-2">
            {t(`awareness_types.${awarenessTypeKeyMap[nonConflictResults.awarenessType]}.type`)}
          </p>
          <p className="font-semibold">
            {t(`awareness_types.${awarenessTypeKeyMap[nonConflictResults.awarenessType]}.animal`)}
          </p>
          <hr className="border border-primary mx-4 my-2" />
          <p>{t(`awareness_types.${awarenessTypeKeyMap[nonConflictResults.awarenessType]}.summary`)}</p>
        </div>
        <div className="hidden md:block w-px h-vh my-5 bg-primary mx-4 blur-sm" />
        <div className="m-2 flex-grow">
          <p className="text-xl font-semibold my-2">{t('resultpage.conflict')}</p>
          <hr className="border border-primary mx-8" />
          <p className="font-semibold my-2">
            {t(`awareness_types.${awarenessTypeKeyMap[conflictResults.awarenessType]}.type`)}
          </p>
          <p className="font-semibold">
            {t(`awareness_types.${awarenessTypeKeyMap[nonConflictResults.awarenessType]}.animal`)}
          </p>
          <hr className="border border-primary mx-4 my-2" />
          <p>{t(`awareness_types.${awarenessTypeKeyMap[nonConflictResults.awarenessType]}.summary`)}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mx-2">
        <Button prompt={t('resultpage.end_button')} onClick={handleStopTestClick} data-testid={'endButton'} />
        <div className="flex flex-row justify-end items-center mx-2">
          <p className="mr-4 hidden md:block">{t('resultpage.mail_prompt')}</p>
          <EmailModal data={data} prompt={t('resultpage.mail_button')} test={'RAT'} data-testid={'emailButton'} />
        </div>
      </div>
      <div className="flex flex-row justify-between m-2 "></div>
    </div>
  )
}

export default TestResult
