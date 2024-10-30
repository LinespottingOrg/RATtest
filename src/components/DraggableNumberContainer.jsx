import React, { useEffect, useState } from 'react'
import DraggableNumber from './DraggableNumber'
import { returnValidRatNumbers } from '../utils/ratTestUtils'
import { returnValidLasNumbers } from '../utils/lasTestUtils'

function DraggableNumberContainer({ amount, data, currentSetId, test }) {
  const [validNumbers, setValidNumbers] = useState([])
  if (test === 'LAS') {
    setValidNumbers[(1, 2, 3, 4)]
  }
  useEffect(() => {
    if (test == 'RAT') {
      setValidNumbers(returnValidRatNumbers(amount, data, currentSetId))
      console.log(returnValidRatNumbers(amount, data, currentSetId))
    } else {
      setValidNumbers(returnValidLasNumbers(amount, data, currentSetId))
    }
  }, [amount, data[currentSetId], data[currentSetId]])

  const renderDraggableNumbers = (start, end) => {
    return Array.from({ length: end - start }, (_, index) => (
      <li key={index}>
        <DraggableNumber
          key={index + start}
          id={index + start}
          number={test === 'LAS' ? index + start + 1 : index + start}
          valid={test === 'LAS' ? validNumbers.includes(index + start + 1) : validNumbers.includes(index + start)}
        />
      </li>
    ))
  }

  return (
    <>
      <ul className="flex flex-row md:w-1/2 justify-between mx-4 md:mx-auto">
        {renderDraggableNumbers(0, Math.min(amount, 5))}
      </ul>
      {amount > 5 && (
        <ul className="flex flex-row md:w-1/2 justify-between mx-4 md:mx-auto">{renderDraggableNumbers(5, amount)}</ul>
      )}
    </>
  )
}

export default DraggableNumberContainer
