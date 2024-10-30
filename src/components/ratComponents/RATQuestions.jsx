import React from 'react'
import DraggableNumberContainer from '../DraggableNumberContainer'
import DroppableInputContainer from '../DroppableInputContainer'
import { useTranslation } from 'react-i18next'

function RATQuestions({ data, currentSetId, handleDataChange }) {
  const { t } = useTranslation()
  const options = ['helper', 'influence', 'autonomy']
  return (
    <div>
      <h1 className="md:text-xl font-semibold text-center my-4">{t(`data.rat.${currentSetId}.statement`)}</h1>
      <div className="space-y-4">
        <DraggableNumberContainer amount={10} data={data} currentSetId={currentSetId} test={'RAT'} />
      </div>
      <div className="flex my-8">
        <ul className="flex flex-col md:flex-row w-full">
          <DroppableInputContainer
            data={data}
            currentSetId={currentSetId}
            handleDataChange={handleDataChange}
            options={options}
            test={'RAT'}
          />
        </ul>
      </div>
    </div>
  )
}

export default RATQuestions
