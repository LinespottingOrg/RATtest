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
