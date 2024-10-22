const returnAwarenessPattern = (data) => {
  const awarenessTypes = {
    selfless_nurturing: {
      awarenessType: 'Selfless & Nurturing',
      animalType: 'St.Bernard Dog',
      summary:
        'The Selfless & Nurturing is characterized by their effort to achieve harmony with others and make sure everyone is doing well, without expecting much in return',
    },
    assertive_direct: {
      awarenessType: 'Assertive & Direct',
      animalType: 'Lion',
      summary:
        "The Assertive & Direct person seeks to be straightforward, wants to guide others' activities, and desires recognition from others.",
    },
    analytical_independent: {
      awarenessType: 'Analytical & Independent',
      animalType: 'Owl',
      summary:
        'The Analytical & Independent person strives to be self-sufficient, independent, thoughtful, and logical.',
    },
  }

  const highestKey = Object.entries(data).reduce(
    (highest, [key, value]) => (value > data[highest] ? key : highest),
    Object.keys(data)[0]
  )

  console.log('Highest values in key: ', highestKey)
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

export default returnAwarenessPattern
