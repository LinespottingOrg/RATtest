import React from 'react'

function Button({ onClick, prompt }) {
  return (
    <>
      <button className="btn bg-primary text-white text-xl" onClick={onClick}>
        {prompt}
      </button>
    </>
  )
}

export default Button
