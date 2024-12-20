import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RATLogo1 from '../assets/RAT_LOGO_1.png'
import RATLogo3 from '../assets/RAT_LOGO_3.png'
import { FaAngleLeft } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa6'
import RATQuestions from '../components/ratComponents/RATQuestions'
import ratData from '../data/ratTestData'
import RatTestResult from '../components/RatTestResult'
import Button from '../components/Button'
import { useTranslation } from 'react-i18next'

function RATTestPage({ handleTranslation, isEnglish }) {
  /* i18n translation utility */
  const { t } = useTranslation()

  /* React navigation utility */
  const navigate = useNavigate()

  /* state to set the test as finished to render the result page */
  const [testFinished, setTestFinished] = useState(false)

  /* state to hold the data for rendering and calculating results */
  const [data, setData] = useState(ratData)

  /* state to hold the current set id of the data to render the prompts and valid numbers */
  const [currentSetId, setCurrentSetId] = useState(1)

  /* handles and updates the dataset for the current test by using the data states and the currentSetId state*/
  const handleRatValueChange = (setId, promptKey, newValue, inputSet) => {
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
          usedAmount,
          answered,
        },
      }
    })
  }

  /* handles rendering the next set of data */
  const handleRenderNextSet = () => {
    if (currentSetId != 20) {
      setCurrentSetId((prevId) => prevId + 1)
    }
  }

  /* handles rendering the previous set of data */
  const handleRenderPreviousSet = () => {
    setCurrentSetId((prevId) => prevId - 1)
  }

  /* handles switching the state to render the result screen */
  const handleShowResults = () => {
    setTestFinished(true)
  }

  /* navigates back to the homepage */
  const handleGoBackClick = () => {
    navigate('/')
  }

  /********** SETTING TEST ANSWERS IN DATA FOR CURRENT SET ****************************/
  const testSetAnswers = (promptKey1, promptKey2, promptKey3) => {
    handleRatValueChange(currentSetId, promptKey1, 1, true)
    handleRatValueChange(currentSetId, promptKey2, 3, true)
    handleRatValueChange(currentSetId, promptKey3, 6, true)
    //handleRenderNextSet()
  }
  /********** SETTING TEST ANSWERS IN DATA FOR CURRENT SET ****************************/

  return (
    <div className="flex md:flex-row md:h-1024 md:max-w-1440 mx-auto text-customTextColor font-poppins h-full">
      <div className="w-20% text-center hidden md:flex flex-col justify-between bg-gradient-to-r from-primary">
        <div>
          <h1 className="text-2xl md:text-2xl my-8 font-bold">Relational Awereness Theory</h1>
          <label className="flex cursor-pointer gap-2 justify-center">
            <span className="label-text">Swedish</span>
            <input
              type="checkbox"
              checked={isEnglish}
              className="toggle"
              onChange={handleTranslation}
              data-testid="translationToggle"
            />
            <span className="label-text">English</span>
          </label>
        </div>
        <div className="mt-auto h-testLeftLogoSize w-testLeftLogoSize mx-auto">
          <img src={RATLogo1} alt="rat logo 1" className="w-full h-full object-contain" />
        </div>
      </div>
      {testFinished ? (
        <div className="md:w-80%  md:bg-none" data-testid="ratResultPanel">
          <RatTestResult data={data} />
        </div>
      ) : (
        <div className="md:w-80% flex flex-col h-full bg-gradient-to-b from-primary md:bg-none">
          <div className="flex md:flex-row flex-grow">
            <div className="hidden md:flex w-20% h-full items-center justify-center">
              <div className="h-testRightLogoSize w-testRightLogoSize">
                <img src={RATLogo3} alt="rat logo 3" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="md:w-80% my-auto p-4 flex-grow">
              <p className="text-l md:text-xl font-semibold leading-relaxed">{t('testpage.rat.heading')}</p>
            </div>
          </div>
          <div className="p-4 flex-grow">
            <p className="text-md md:text-xl font-semibold leading-relaxed">
              {t('testpage.rat.instruction_1')}
              <br />
              {t('testpage.rat.instruction_2')}
              <br />
              {t('testpage.drag_and_drop')}
            </p>
          </div>
          <div className="flex-grow">
            <RATQuestions data={data} currentSetId={currentSetId} handleDataChange={handleRatValueChange} />
          </div>
          <div className="flex flex-row justify-between items-center mb-2 mx-2">
            <Button prompt={t('resultpage.return')} onClick={handleGoBackClick} />
            <div className="flex flex-row">
              {currentSetId <= 1 ? (
                <button className="text-gray-300" data-testid="prevSetButton" disabled>
                  <FaAngleLeft />
                </button>
              ) : (
                <button>
                  <FaAngleLeft onClick={handleRenderPreviousSet} data-testid="prevSetButton" />
                </button>
              )}

              <progress
                className="progress progress-primary w-24 md:w-56 mx-6 self-center"
                value={currentSetId}
                max="20"
              ></progress>
              {data[currentSetId].answered && currentSetId !== 20 ? (
                <button onClick={handleRenderNextSet} data-testid="nextSetButton">
                  <FaAngleRight />
                </button>
              ) : (
                <button className="text-gray-300" data-testid="nextSetButton" disabled>
                  <FaAngleRight />
                </button>
              )}
            </div>
            {/********** SETTING TEST ANSWERS IN DATA & RENDERING NEXT SET,
            REMOVE/SET "hidden" TO SHOW/HIDE ****************************/}
            <button
              data-testid="testButton"
              className="btn btn-secondary hidden"
              onClick={() => testSetAnswers('helper', 'influence', 'autonomy')}
            >
              Test: SetAnswers for set {currentSetId}
            </button>
            {/********** SETTING TEST ANSWERS IN DATA & RENDERING NEXT SET,
            REMOVE/SET "hidden" TO SHOW/HIDE ****************************/}
            {data[currentSetId].answered && currentSetId === 20 ? (
              <Button
                prompt={t('testpage.result_button')}
                disabled={false}
                onClick={handleShowResults}
                data-testid="resultButton"
              />
            ) : (
              <Button prompt={t('testpage.result_button')} disabled={true} data-testid="resultButton" />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default RATTestPage
