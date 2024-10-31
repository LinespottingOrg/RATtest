import React from 'react'
import DroppableInput from './DroppableInput'
import { useTranslation } from 'react-i18next'

function DroppableInputContainer({ data, handleDataChange, currentSetId, options, test }) {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col md:flex-row justify-between mx-2 font-semibold md:w-full">
      {options.map((option, index) => (
        <div key={index} className="flex flex-row ">
          <li className="flex flex-row mx-4 md:mx-auto">
            <DroppableInput
              handleDataChange={handleDataChange}
              currentSetId={currentSetId}
              data={data}
              option={option}
              test={test}
            />
            {test === 'LAS' ? (
              <p className="ml-2 md:max-w-36">{t(`data.las.options.${option}.p${currentSetId}`)}</p>
            ) : (
              <p className="ml-2 md:max-w-36">{t(`data.rat.${currentSetId}.options.${option}`)}</p>
            )}
          </li>
        </div>
      ))}
    </div>
  )
}

export default DroppableInputContainer
