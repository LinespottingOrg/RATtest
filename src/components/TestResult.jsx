import React from 'react'
import { useNavigate } from 'react-router-dom'
import RadarChart from '../components/RadarChart'
import returnAwarenessPattern from '../utility/RATTestSummary'
import calculateResult from '../utility/RATQuizCalculation'

function TestResult({ data }) {
  const navigate = useNavigate()
  const splitData = (data, from, until) => {
    const entries = Object.entries(data)
    return Object.fromEntries(entries.slice(from, until))
  }
  const nonConflictResults = returnAwarenessPattern(
    calculateResult(splitData(data, 0, 10))
  )
  const conflictResults = returnAwarenessPattern(
    calculateResult(splitData(data, 10, 20))
  )

  const handleStopTestClick = () => {
    navigate('/')
  }

  return (
    <div className="w-full mx-auto text-center flex flex-col h-full">
      <div className="m-2">
        <RadarChart results={data} />
        <hr className="border-2 border-primary opacity-50" />
      </div>
      <div className="flex flex-row flex-grow">
        <div className="m-2">
          <p>Non-conflict</p>
          <p>{nonConflictResults.awarenessType}</p>
          <p>{nonConflictResults.animalType}</p>
          <p>{nonConflictResults.summary}</p>
        </div>
        <div className="hidden md:block w-px h-vh my-5 bg-primary mx-4 blur-sm" />
        <div className="m-2 flex-grow">
          <p>Conflict</p>
          <p>{conflictResults.awarenessType}</p>
          <p>{conflictResults.animalType}</p>
          <p>{conflictResults.summary}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="btn btn-primary" onClick={handleStopTestClick}>
          Avsluta test
        </button>
        <div className="flex flex-row justify-end items-center">
          <p className="mr-4">Psst...vill du ha resultatet på mail?</p>
          <button className="btn btn-primary">Få Mail</button>
        </div>
      </div>
      <div className="flex flex-row justify-between m-2 "></div>
    </div>
  )
}

export default TestResult
