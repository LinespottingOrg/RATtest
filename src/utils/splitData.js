const splitData = (data, from, until) => {
  const entries = Object.entries(data)
  return Object.fromEntries(entries.slice(from, until))
}

export default splitData
