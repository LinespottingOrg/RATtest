import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LasLogo1 from '../assets/LAS_LOGO_1.png'
import LasLogo3 from '../assets/LAS_LOGO_3.png'
import { FaAngleLeft } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa6'
import lasData from '../data/lasTestData'
import LasTestResult from '../components/LasTestResult'
import Button from '../components/Button'
import LASQuestions from '../components/lasComponents/LASQuestions'

function LASTestPage({ handleTranslation, isEnglish }) {
  const [testFinished, setTestFinished] = useState(false)
  const [data, setData] = useState(lasData)
  const [currentSetId, setCurrentSetId] = useState(1)
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleDataChange = (setId, promptKey, newValue, inputSet) => {
    setData((prevData) => {
      const updatedSet = {
        ...prevData[setId],
        options: {
          ...prevData[setId].options,
          [promptKey]: {
            ...prevData[setId].options[promptKey],
            value: newValue,
            inputSet: inputSet,
          },
        },
      }

      const usedAmount = Object.values(updatedSet.options).reduce((sum, option) => sum + option.value, 0)

      const answered = usedAmount === 10

      return {
        ...prevData,
        [setId]: {
          ...updatedSet,
          answered,
        },
      }
    })
  }

  const handleRenderNextSet = () => {
    if (currentSetId != 9) {
      setCurrentSetId((prevId) => prevId + 1)
    }
  }

  const handleRenderPreviousSet = () => {
    setCurrentSetId((prevId) => prevId - 1)
  }

  const handleShowResults = () => {
    setTestFinished(true)
  }

  const handleGoBackClick = () => {
    navigate('/')
  }

  /********** SETTING TEST ANSWERS IN DATA & RENDERING NEXT SET ****************************/
  const testSetAnswers = (prompt1, prompt2, prompt3, prompt4) => {
    handleDataChange(currentSetId, prompt1, 1, true)
    handleDataChange(currentSetId, prompt2, 2, true)
    handleDataChange(currentSetId, prompt3, 3, true)
    handleDataChange(currentSetId, prompt4, 4, true)
    //handleRenderNextSet();
  }
  /********** SETTING TEST ANSWERS IN DATA & RENDERING NEXT SET ****************************/

  return (
    <div className="flex md:flex-row md:h-1024 md:max-w-1440 mx-auto text-customTextColor font-poppins h-dvh">
      <div className="w-20% text-center hidden md:flex flex-col justify-between bg-gradient-to-r from-primary">
        <div>
          <h1 className="text-2xl md:text-2xl my-8 font-bold">Learning Style Assessment</h1>
          <label className="flex cursor-pointer gap-2 justify-center">
            <span className="label-text">Swedish</span>
            <input type="checkbox" checked={isEnglish} className="toggle" onChange={handleTranslation} />
            <span className="label-text">English</span>
          </label>
        </div>
        <div className="mt-auto h-testLeftLogoSize w-testLeftLogoSize mx-auto">
          <img src={LasLogo1} alt="LAS LOGO 1" className="w-full h-full object-contain" />
        </div>
      </div>
      {testFinished ? (
        <div className="md:w-80% h-full" data-testid="resultPanel">
          <LasTestResult data={data} />
        </div>
      ) : (
        <div className="md:w-80% flex flex-col h-full bg-gradient-to-b from-primary md:bg-none">
          <div className="flex md:flex-row flex-grow">
            <div className="hidden md:flex w-20% h-full items-center justify-center">
              <div className="h-testRightLogoSize w-testRightLogoSize">
                <img src={LasLogo3} alt="LAS LOGO 3" className="w-full h-full object-contain " />
              </div>
            </div>
            <div className="md:w-80% my-auto p-4 flex-grow">
              <p className="text-l md:text-xl font-semibold leading-relaxed mb-2">{t('testpage.las.heading')}</p>
              <p className="text-l md:text-xl font-semibold leading-relaxed mb-2">{t('testpage.las.instruction_1')}</p>
              <p className="text-l md:text-xl font-semibold leading-relaxed mb-2">{t('testpage.las.instruction_2')}</p>
              <p className="text-l md:text-xl font-semibold leading-relaxed mb-2">{t('testpage.las.instruction_3')}</p>
              <p className="text-l md:text-xl font-semibold leading-relaxed">{t('testpage.las.instruction_4')}</p>
            </div>
          </div>
          <div className="p-4 flex-grow">
            <p className="text-md md:text-xl font-semibold leading-relaxed">
              {t('testpage.las.description_1')}
              <br /> {t('testpage.las.description_2')}
              <br />
              {t('testpage.las.description_3')}
              <br />
              {t('testpage.drag_and_drop')}
            </p>
          </div>
          <div className="flex-grow" data-testid="questionPanel">
            <LASQuestions data={data} currentSetId={currentSetId} handleDataChange={handleDataChange} />
          </div>
          <div className="flex flex-row justify-between items-center mb-2 mx-2">
            <Button prompt={t('resultpage.return')} onClick={handleGoBackClick} data-testid={'returnButton'} />
            <div className="flex flex-row">
              {currentSetId <= 1 ? (
                <button className="text-gray-300" disabled data-testid="prevPromptButton">
                  <FaAngleLeft />
                </button>
              ) : (
                <button>
                  <FaAngleLeft onClick={handleRenderPreviousSet} data-testid="prevPromptButton" />
                </button>
              )}

              <progress
                className="progress progress-primary w-24 md:w-56 mx-6 self-center"
                value={currentSetId}
                max="9"
                data-testid="progressbar"
              ></progress>
              {data[currentSetId].answered && currentSetId !== 9 ? (
                <button onClick={handleRenderNextSet} data-testid="nextPromptButton">
                  <FaAngleRight />
                </button>
              ) : (
                <button className="text-gray-300" disabled data-testid="nextPromptButton">
                  <FaAngleRight />
                </button>
              )}
            </div>
            <button
              data-testid="testSetButton"
              className="btn btn-secondary hidden"
              onClick={() =>
                testSetAnswers(
                  'concrete_experiences',
                  'reflective_observation',
                  'abstract_thinking',
                  'active_experimentation'
                )
              }
            >
              Test: SetAnswers for set {currentSetId}
            </button>
            {data[currentSetId].answered && currentSetId === 9 ? (
              <Button
                prompt={t('testpage.result_button')}
                onClick={handleShowResults}
                data-testid={'resultButton'}
                disabled={false}
              />
            ) : (
              <Button prompt={t('testpage.result_button')} data-testid={'resultButton'} disabled={true} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default LASTestPage
