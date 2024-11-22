import React from 'react'
import DraggableNumberContainer from '../DraggableNumberContainer'
import DroppableInputContainer from '../DroppableInputContainer'

function LASQuestions({ data, currentSetId, handleDataChange }) {
  const options = ['concrete_experiences', 'reflective_observation', 'abstract_thinking', 'active_experimentation']
  return (
    <div>
      <div className="space-y-4" data-testid="draggableNumberContainer">
        <DraggableNumberContainer amount={4} data={data} currentSetId={currentSetId} test={'LAS'} />
      </div>
      <div className="flex my-8">
        <ul className="flex flex-col md:flex-row w-full" data-testid="droppableInputContainer">
          <DroppableInputContainer
            data={data}
            currentSetId={currentSetId}
            options={options}
            handleDataChange={handleDataChange}
            test={'LAS'}
          />
        </ul>
      </div>
    </div>
  )
}

export default LASQuestions
