import React from 'react'
import DraggableNumberContainer from './DraggableNumberContainer'
import DroppableInputContainer from './DroppableInputContainer'

function RATQuestions({ data, currentSetId, handleRatValueChange }) {
  return (
    <div>
      <h1 className="text-xl font-semibold text-center my-4">
        {data[currentSetId].statement}
      </h1>
      <div className="space-y-4">
        <DraggableNumberContainer
          amount={10}
          data={data}
          currentSetId={currentSetId}
          handleRatValueChange={handleRatValueChange}
        />
      </div>
      <div className="flex my-8">
        <ul className="flex flex-row w-full">
          <DroppableInputContainer
            data={data}
            currentSetId={currentSetId}
            handleRatValueChange={handleRatValueChange}
          />
        </ul>
      </div>
    </div>
  )
}

export default RATQuestions
