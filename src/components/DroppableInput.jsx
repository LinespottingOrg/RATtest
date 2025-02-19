import { React, useState } from 'react'
import { useDrop } from 'react-dnd'

function DroppableInput({ handleDataChange, option, currentSetId, data, test }) {
  const inputValue = data[currentSetId].options[option].value

  /* handles the dropped action when a number is dropped into a input that can recieve it */
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: 'NUMBER',
      drop: (item) => {
        handleDataChange(currentSetId, option, item.number, true)
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    [currentSetId]
  )

  /* clears the data for that specific prompt, and in turn clears the droppable input */
  const handleClearInput = () => {
    handleDataChange(currentSetId, option, 0, false)
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
