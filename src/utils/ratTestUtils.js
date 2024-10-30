import { awarenessTypes } from '../data/awarenessTypesData'
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

export function returnValidRatNumbers(amount, data, currentSetId) {
  console.log('Data log in js:', data)
  console.log('Amount log in js:', amount)
  console.log('Currentsetid log in js:', currentSetId)

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
