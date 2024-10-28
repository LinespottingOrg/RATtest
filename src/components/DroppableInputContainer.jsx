import React from 'react'
import DroppableInput from './DroppableInput'
import { useTranslation } from 'react-i18next'

function DroppableInputContainer({ data, handleRatValueChange, currentSetId }) {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col md:flex-row justify-between mx-2 font-semibold md:w-full">
      <div className="flex flex-row ">
        <li>
          <DroppableInput
            handleRatValueChange={handleRatValueChange}
            currentSetId={currentSetId}
            data={data}
            option={'helper'}
          />
        </li>
        <li className="ml-2 md:max-w-36">
          {t(`data.rat.${currentSetId}.options.helper`)}
        </li>
      </div>
      <div className="flex flex-row">
        <li>
          <DroppableInput
            handleRatValueChange={handleRatValueChange}
            currentSetId={currentSetId}
            data={data}
            option={'influence'}
          />
        </li>
        <li className="ml-2 md:max-w-36">
          {t(`data.rat.${currentSetId}.options.influence`)}
        </li>
      </div>
      <div className="flex flex-row">
        <li>
          <DroppableInput
            handleRatValueChange={handleRatValueChange}
            currentSetId={currentSetId}
            data={data}
            option={'autonomy'}
          />
        </li>
        <li className="ml-2 md:max-w-36">
          {t(`data.rat.${currentSetId}.options.autonomy`)}
        </li>
      </div>
    </div>
  )
}

export default DroppableInputContainer
