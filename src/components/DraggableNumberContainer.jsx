import React, { useEffect, useState } from 'react'
import DraggableNumber from './DraggableNumber'

function DraggableNumberContainer({ amount, data, currentSetId }) {
  const [validNumbers, setValidNumbers] = useState([])

  useEffect(() => {
    const possibleNumbers = Array.from({ length: amount }, (_, index) => index)
    const validNumbers = possibleNumbers.filter((num) => {
      const remaining = 10 - data[currentSetId].usedAmount

      const filledInputs = Object.values(data[currentSetId].options).filter(
        (key) => key.inputSet === true
      ).length

      if (filledInputs === 0) {
        return num >= 0 && num <= 10
      } else if (filledInputs === 1) {
        return num >= 0 && num <= remaining
      } else if (filledInputs === 2) {
        return num === remaining
      }
    })
    setValidNumbers(validNumbers)
  }, [amount, data[currentSetId].usedAmount, data[currentSetId].inputSet])

  const renderDraggableNumbers = (start, end) => {
    return Array.from({ length: end - start }, (_, index) => (
      <li key={index}>
        <DraggableNumber
          key={index + start}
          id={index + start}
          number={index + start}
          valid={validNumbers.includes(index + start)}
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
        <ul className="flex flex-row md:w-1/2 justify-between mx-4 md:mx-auto">
          {renderDraggableNumbers(5, amount)}
        </ul>
      )}
    </>
  )
}

export default DraggableNumberContainer
