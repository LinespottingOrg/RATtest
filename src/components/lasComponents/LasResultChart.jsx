import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { useTranslation } from 'react-i18next'
import { returnResultValues } from '../../utils/lasTestUtils'

function LasResultChart({ result }) {
  /* i18n translation utility */
  const { t } = useTranslation()

  /* UseState to handle resizing of the chart properties on smaller devices */
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 650)

  /* variable for setting a max length for the shortened names in the chart */
  const SHORT_NAME_MAX_LENGTH = 12

  /* variable for the colorcodes used in the chart */
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  /* variable for holding the testresult */
  const scores = returnResultValues(result)

  /* listening to the window size and updates the isSmallScreen state */
  useEffect(() => {
    const handleScreenResize = () => setIsSmallScreen(window.innerWidth < 650)
    window.addEventListener('resize', handleScreenResize)
    return () => window.removeEventListener('resize', handleScreenResize)
  })

  /* creates a shorter chart name based on the SHORT_NAME_MAX_LENGTH variable */
  const shortenName = (name, maxLength) => {
    if (name.length > maxLength) {
      return name.substring(0, maxLength) + '...'
    }
    return name
  }

  //FIXME: set the data dynamically based on windowsize instead of 2 vaiables
  const shortData = [
    {
      name: shortenName(t('learning_styles.concrete_experiences.style'), SHORT_NAME_MAX_LENGTH),
      value: scores.concrete_experiences,
    },
    {
      name: shortenName(t('learning_styles.reflective_observation.style'), SHORT_NAME_MAX_LENGTH),
      value: scores.reflective_observation,
    },
    {
      name: shortenName(t('learning_styles.abstract_thinking.style'), SHORT_NAME_MAX_LENGTH),
      value: scores.abstract_thinking,
    },
    {
      name: shortenName(t('learning_styles.active_experimentation.style'), SHORT_NAME_MAX_LENGTH),
      value: scores.active_experimentation,
    },
  ]

  const longData = [
    {
      name: t('learning_styles.concrete_experiences.style'),
      value: scores.concrete_experiences,
    },
    {
      name: t('learning_styles.reflective_observation.style'),
      value: scores.reflective_observation,
    },
    {
      name: t('learning_styles.abstract_thinking.style'),
      value: scores.abstract_thinking,
    },
    {
      name: t('learning_styles.active_experimentation.style'),
      value: scores.active_experimentation,
    },
  ]

  //FIXME: change this when the data has been fixed
  const data = isSmallScreen ? shortData : longData

  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          startAngle={180}
          endAngle={-180}
          innerRadius={isSmallScreen ? 15 : 80}
          outerRadius={isSmallScreen ? 25 : 100}
          paddingAngle={5}
          dataKey="value"
          label={(entry) => `${entry.name}: ${entry.value}`}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default LasResultChart
