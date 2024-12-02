import React from "react";
import { useDrag } from "react-dnd";

function DraggableNumber({ id, number, valid }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "NUMBER",
    item: { id, number },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={valid ? drag : null}
      className={`rounded-lg w-12 h-12 text-center pt-3 text-m ${
        valid ? "bg-primary cursor-grab" : "bg-gray-400 cursor-not-allowed"
      } ${isDragging ? "border-4 border-dashed border-gray-500" : ""}`}
      style={{
        opacity: isDragging ? 0.5 : 1,
        pointerEvents: valid ? "auto" : "none",
        transform: isDragging ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.2s ease",
        userSelect: "none",
      }}
      onDragStart={(e) => e.preventDefault()}
    >
      {number}
    </div>
  );
}

export default DraggableNumber;
