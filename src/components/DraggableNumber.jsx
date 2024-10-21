import React from 'react'
import { useDrag } from 'react-dnd'

function DraggableNumber({ id, number, valid }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'NUMBER',
    item: { id, number },
    collect: (monitor) => ({
      isDragging: !monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={valid ? drag : null}
      className={`rounded-lg w-12 h-12 text-center pt-3 text-m ${
        valid ? 'bg-customBlue cursor-grab' : 'bg-gray-400 cursor-not-allowed'
      }`}
      style={{
        opacity: isDragging ? 0.8 : 1,
        pointerEvents: valid ? 'auto' : 'none',
      }}
    >
      {number}
    </div>
  )
}

export default DraggableNumber
