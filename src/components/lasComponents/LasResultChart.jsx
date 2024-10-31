import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { useTranslation } from 'react-i18next'
import { returnResultValues } from '../../utils/lasTestUtils'

function LasResultChart({ result }) {
  const { t } = useTranslation()
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 650)

  const scores = returnResultValues(result)

  useEffect(() => {
    const handleScreenResize = () => setIsSmallScreen(window.innerWidth < 650)
    window.addEventListener('resize', handleScreenResize)
    return () => window.removeEventListener('resize', handleScreenResize)
  })

  const data = [
    { name: t('learning_styles.concrete_experiences.style'), value: scores.concrete_experiences },
    { name: t('learning_styles.reflective_observation.style'), value: scores.reflective_observation },
    { name: t('learning_styles.abstract_thinking.style'), value: scores.abstract_thinking },
    { name: t('learning_styles.active_experimentation.style'), value: scores.active_experimentation },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

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
