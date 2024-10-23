import React from 'react'
import DroppableInput from './DroppableInput'

function DroppableInputContainer({ data, handleRatValueChange, currentSetId }) {
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
          {data[currentSetId].options.helper.text}
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
          {data[currentSetId].options.influence.text}
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
          {data[currentSetId].options.autonomy.text}
        </li>
      </div>
    </div>
  )
}

export default DroppableInputContainer
