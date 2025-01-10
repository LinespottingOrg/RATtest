import React from 'react'
import { useDragLayer } from 'react-dnd'

function DragLayer() {
  /* react dnd utility to support the draglayer needed to use drag and drop */
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    isDragging: monitor.isDragging(),
    item: monitor.getItem(),
    currentOffset: monitor.getClientOffset(),
  }))

  if (!isDragging || !currentOffset) {
    return null
  }

  return (
    /* styling for the item object being dragged */
    <div
      style={{
        position: 'absolute',
        left: currentOffset.x,
        top: currentOffset.y,
        pointerEvents: 'none',
        opacity: 0.7,
        fontSize: '24px',
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: '4px',
        padding: '4px',
        zIndex: 1000,
      }}
    >
      {item.number}
    </div>
  )
}

export default DragLayer
