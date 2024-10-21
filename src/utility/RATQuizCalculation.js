const calculateResult = (data) => {
  console.log('Counted values:', calculateDataResults(data))
  console.log(
    'Non-conflict values',
    calculateDataResults(splitData(data, 0, 10))
  )
  console.log('Conflict values', calculateDataResults(splitData(data, 10, 20)))
}

const splitData = (data, from, until) => {
  const entries = Object.entries(data)
  return Object.fromEntries(entries.slice(from, until))
}

const calculateDataResults = (data) => {
  const values = { helper: 0, influence: 0, autonomy: 0 }
  for (const key in data) {
    const options = data[key].options
    for (const option in options) {
      values[option] += options[option].value
    }
  }
  return values
}

export default calculateResult
