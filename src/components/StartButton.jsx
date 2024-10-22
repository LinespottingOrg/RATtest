import React from 'react'

function StartButton({ onClick }) {
  return (
    <>
      <button
        className="btn bg-customBlue text-white mt-2 text-xl"
        onClick={onClick}
      >
        Start Test
      </button>
    </>
  )
}

export default StartButton
