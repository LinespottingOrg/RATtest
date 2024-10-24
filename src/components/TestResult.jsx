import React from 'react'
import { useNavigate } from 'react-router-dom'
import RatResultChart from './ratComponents/RatResultChart'
import Button from './Button'
import {
  setTestResultValues,
  returnAwarenessPattern,
} from '../utils/ratTestUtils'

function TestResult({ data }) {
  const navigate = useNavigate()
  const splitData = (data, from, until) => {
    const entries = Object.entries(data)
    return Object.fromEntries(entries.slice(from, until))
  }
  const nonConflictResults = returnAwarenessPattern(
    setTestResultValues(splitData(data, 0, 10))
  )
  const conflictResults = returnAwarenessPattern(
    setTestResultValues(splitData(data, 10, 20))
  )

  const handleStopTestClick = () => {
    navigate('/')
  }

  return (
    <div className="w-full mx-auto text-center flex flex-col h-full">
      <div className="m-2">
        <RatResultChart results={data} />
        <hr className="border-2 border-primary opacity-50 md:mx-12" />
      </div>
      <div className="flex flex-col md:flex-row flex-grow">
        <div className="m-2 flex-grow">
          <p className="text-xl font-semibold my-2">Non-conflict</p>
          <hr className="border border-primary mx-8" />
          <p className="font-semibold my-2">
            {nonConflictResults.awarenessType}
          </p>
          <p className="font-semibold">{nonConflictResults.animalType}</p>
          <hr className="border border-primary mx-4 my-2" />
          <p>{nonConflictResults.summary}</p>
        </div>
        <div className="hidden md:block w-px h-vh my-5 bg-primary mx-4 blur-sm" />
        <div className="m-2 flex-grow">
          <p className="text-xl font-semibold my-2">Conflict</p>
          <hr className="border border-primary mx-8" />
          <p className="font-semibold my-2">{conflictResults.awarenessType}</p>
          <p className="font-semibold">{conflictResults.animalType}</p>
          <hr className="border border-primary mx-4 my-2" />
          <p>{conflictResults.summary}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mx-2">
        <Button prompt={'Avsluta Test'} onClick={handleStopTestClick} />
        <div className="flex flex-row justify-end items-center mx-2">
          <p className="mr-4">Psst...vill du ha resultatet på mail?</p>
          <Button prompt={'Få mail'} />
        </div>
      </div>
      <div className="flex flex-row justify-between m-2 "></div>
    </div>
  )
}

export default TestResult
