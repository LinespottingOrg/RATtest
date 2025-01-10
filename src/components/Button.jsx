import React from 'react'

function Button({ onClick, prompt, 'data-testid': testId, disabled }) {
  return (
    <>
      <button
        className="btn bg-primary text-white text-l md:text-xl"
        onClick={onClick}
        data-testid={testId}
        disabled={disabled}
      >
        {prompt}
      </button>
    </>
  )
}

export default Button
