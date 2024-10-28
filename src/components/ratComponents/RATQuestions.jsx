import React from 'react'
import DraggableNumberContainer from '../DraggableNumberContainer'
import DroppableInputContainer from '../DroppableInputContainer'
import { useTranslation } from 'react-i18next'

function RATQuestions({ data, currentSetId, handleRatValueChange }) {
  const { t } = useTranslation()
  return (
    <div>
      <h1 className="md:text-xl font-semibold text-center my-4">
        {t(`data.rat.${currentSetId}.statement`)}
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
        <ul className="flex flex-col md:flex-row w-full">
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
