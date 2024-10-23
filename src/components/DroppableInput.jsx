import { React, useState } from 'react'
import { useDrop } from 'react-dnd'

function DroppableInput({ handleRatValueChange, option, currentSetId, data }) {
  const inputValue = data[currentSetId].options[option].value

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: 'NUMBER',
      drop: (item) => {
        handleRatValueChange(currentSetId, option, item.number, true)
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [currentSetId]
  )

  const handleClearInput = () => {
    handleRatValueChange(currentSetId, option, 0, false)
  }

  return (
    <div className="relative inline-block mb-2 md:mb-0">
      <input
        ref={drop}
        type="text"
        value={inputValue}
        readOnly
        className="input input-bordered input-accent max-w-12 text-center"
      />
      {Number(inputValue) > 0 && (
        <button
          className="absolute top-[-15px] left-[-10px] text-red-500 hover:text-red-700 text-2xl"
          onClick={handleClearInput}
        >
          &times;
        </button>
      )}
    </div>
  )
}

export default DroppableInput
