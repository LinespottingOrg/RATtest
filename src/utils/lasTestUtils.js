import { learningStyles } from '../data/learningStylesData'

/* -------- checks and returns valid numbers for the draggableNumber -------- */
export function returnValidLasNumbers(amount, data, currentSetId) {
  const possibleNumbers = Array.from({ length: amount }, (_, index) => index + 1)
  const usedValues = Object.values(data[currentSetId].options).map((option) => option.value)
  const validNumbers = possibleNumbers.filter((num) => !usedValues.includes(num))
  return validNumbers
}

/* --------- calculates and returns the sum of values from the data --------- */
export function returnResultValues(data) {
  const values = { concrete_experiences: 0, reflective_observation: 0, abstract_thinking: 0, active_experimentation: 0 }
  for (const key in data) {
    const options = data[key].options
    for (const option in options) {
      values[option] += options[option].value
    }
  }
  return values
}

/* -------- calculates and returns the highest key from all the data -------- */
/* ------------------- does not support returning 2 values ------------------ */
export function returnBestLearningStyle(data) {
  const highestKey = Object.entries(data).reduce(
    (highest, [key, value]) => (value > data[highest] ? key : highest),
    Object.keys(data)[0]
  )

  switch (highestKey) {
    case 'concrete_experiences':
      return learningStyles.concrete_experiences
    case 'reflective_observation':
      return learningStyles.reflective_observation
    case 'abstract_thinking':
      return learningStyles.abstract_thinking
    case 'active_experimentation':
      return learningStyles.active_experimentation
    default:
      return null
  }
}

/* -------- calculates and returns the lowest key from all the data -------- */
/* ------------------- does not support returning 2 values ------------------ */
export function returnWorstLearningStyle(data) {
  const lowestKey = Object.entries(data).reduce(
    (lowest, [key, value]) => (value < data[lowest] ? key : lowest),
    Object.keys(data)[0]
  )

  switch (lowestKey) {
    case 'concrete_experiences':
      return learningStyles.concrete_experiences
    case 'reflective_observation':
      return learningStyles.reflective_observation
    case 'abstract_thinking':
      return learningStyles.abstract_thinking
    case 'active_experimentation':
      return learningStyles.active_experimentation
    default:
      return null
  }
}
