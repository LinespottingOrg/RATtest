import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RATLogo1 from '../assets/RAT_LOGO_1.png'
import RATLogo3 from '../assets/RAT_LOGO_3.png'
import { FaAngleLeft } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa6'
import RATQuestions from '../components/RATQuestions'
import ratData from '../data/ratData'
import TestResult from '../components/TestResult'

function RATTestPage() {
  const [testFinished, setTestFinished] = useState(false)
  const [data, setData] = useState(ratData)
  const [currentSetId, setCurrentSetId] = useState(1)
  const navigate = useNavigate()

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

      const usedAmount = Object.values(updatedSet.options).reduce(
        (sum, option) => sum + option.value,
        0
      )

      const answered = usedAmount === 10

      console.log('Updated Set', {
        ...prevData,
        [setId]: {
          ...updatedSet,
          usedAmount,
          answered,
        },
      })

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

  const handleRenderNextSet = () => {
    if (currentSetId != 20) {
      setCurrentSetId((prevId) => prevId + 1)
    }
  }

  const handleRenderPreviousSet = () => {
    setCurrentSetId((prevId) => prevId - 1)
  }

  const testSetAnswers = (promptKey1, promptKey2, promptKey3) => {
    handleRatValueChange(currentSetId, promptKey1, 1, true)
    handleRatValueChange(currentSetId, promptKey2, 3, true)
    handleRatValueChange(currentSetId, promptKey3, 6, true)
    handleRenderNextSet()
  }

  const handleShowResults = () => {
    setTestFinished(true)
  }

  const handleGoBackClick = () => {
    navigate('/')
  }

  return (
    <div className="flex md:flex-row md:h-1024 max-w-1440 md:mx-auto text-customTextColor font-poppins h-full">
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
      {testFinished ? (
        <div className="w-80%">
          <TestResult data={data} />
        </div>
      ) : (
        <div className="w-80% flex flex-col h-full">
          <div className="flex md:flex-row flex-grow">
            <div className="hidden md:block w-20%">
              <div className="mt-auto h-testRightLogoSize w-testRightLogoSize mx-auto">
                <img
                  src={RATLogo3}
                  alt="RAT LOGO"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="md:w-80% my-auto p-4 flex-grow">
              <p className="text-xl font-semibold leading-relaxed">
                Testet består av 20 frågor och varje fråga börjar med en
                ofullständig mening följd av tre alternativ
              </p>
            </div>
          </div>
          <div className="p-4 flex-grow">
            <p className="text-xl font-semibold leading-relaxed">
              Fördela 10 poäng bland de tre alternativen för att belysa din
              ståndpunkt i vart och ett av de tre förslagen.
              <br /> Använd alltid samtliga 10 poäng, aldrig fler eller färre än
              10 poäng. Du får använda 0 i ett alternativ.
              <br />
              Drag och släpp dina svar.
            </p>
          </div>
          <div className="flex-grow">
            <RATQuestions
              data={data}
              currentSetId={currentSetId}
              handleRatValueChange={handleRatValueChange}
            />
          </div>
          <div className="flex flex-row justify-between items-center mb-2 mx-2">
            <button
              className="btn btn-primary text-white"
              onClick={handleGoBackClick}
            >
              Backa
            </button>
            <div className="flex flex-row">
              {currentSetId <= 1 ? (
                <button className="text-gray-300" disabled>
                  <FaAngleLeft />
                </button>
              ) : (
                <button>
                  <FaAngleLeft onClick={handleRenderPreviousSet} />
                </button>
              )}

              <progress
                className="progress progress-primary w-56 mx-6 self-center"
                value={currentSetId}
                max="20"
              ></progress>
              {data[currentSetId].answered && currentSetId !== 20 ? (
                <button onClick={handleRenderNextSet}>
                  <FaAngleRight />
                </button>
              ) : (
                <button className="text-gray-300" disabled>
                  <FaAngleRight />
                </button>
              )}
            </div>
            <button
              className="btn btn-secondary"
              onClick={() => testSetAnswers('helper', 'influence', 'autonomy')}
            >
              Test: SetAnswers for set {currentSetId}
            </button>
            {data[currentSetId].answered && currentSetId === 20 ? (
              <button
                className="btn btn-primary text-white"
                onClick={handleShowResults}
              >
                Resultat
              </button>
            ) : (
              <button className="btn btn-secondary text-white" disabled>
                Resultat
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default RATTestPage
