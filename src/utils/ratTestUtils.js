import { awarenessTypes } from '../data/awarenessTypesData'
/* --------------- calculates and return the values from data --------------- */
export function setTestResultValues(data) {
  const values = { helper: 0, influence: 0, autonomy: 0 }
  for (const key in data) {
    const options = data[key].options
    for (const option in options) {
      values[option] += options[option].value
    }
  }
  return values
}
/* -------------- returns the highest key from the data values -------------- */
/* ------------------------ does not support 2 values ----------------------- */
export function returnAwarenessPattern(data) {
  const highestKey = Object.entries(data).reduce(
    (highest, [key, value]) => (value > data[highest] ? key : highest),
    Object.keys(data)[0]
  )

  switch (highestKey) {
    case 'helper':
      return awarenessTypes.selfless_nurturing
    case 'influence':
      return awarenessTypes.assertive_direct
    case 'autonomy':
      return awarenessTypes.analytical_independent
    default:
      return null
  }
}

/* ---------------- returns valid numbers for draggableNumber --------------- */
export function returnValidRatNumbers(amount, data, currentSetId) {
  const possibleNumbers = Array.from({ length: amount }, (_, index) => index)
  const validNumbers = possibleNumbers.filter((num) => {
    const remaining = 10 - data[currentSetId].usedAmount

    const filledInputs = Object.values(data[currentSetId].options).filter((key) => key.inputSet === true).length

    if (filledInputs === 0) {
      return num >= 0 && num <= 10
    } else if (filledInputs === 1) {
      return num >= 0 && num <= remaining
    } else if (filledInputs === 2) {
      return num === remaining
    }
  })
  return validNumbers
}
