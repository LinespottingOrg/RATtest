import React, { useEffect, useState } from 'react'
import {
  Radar,
  RadarChart as RC,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

import calculateResult from '../utility/RATQuizCalculation'

function RadarChart({ results }) {
  const splitData = (data, from, until) => {
    const entries = Object.entries(data)
    return Object.fromEntries(entries.slice(from, until))
  }

  const nonConflictScores = calculateResult(splitData(results, 0, 10))
  const conflictScores = calculateResult(splitData(results, 10, 20))
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 650)

  useEffect(() => {
    const handleScreenResize = () => setIsSmallScreen(window.innerWidth < 650)
    window.addEventListener('resize', handleScreenResize)
    return () => window.removeEventListener('resize', handleScreenResize)
  })

  const data = [
    {
      name: 'OSJÄLVISK - VÅRDANDE',
      uv: nonConflictScores.helper,
      pv: conflictScores.helper + 5,
      fullMark: 100,
    },
    {
      name: 'PÅSTRIDIG - DIREKT',
      uv: nonConflictScores.influence,
      pv: conflictScores.influence - 20,
      fullMark: 100,
    },
    {
      name: 'ANALYTISK - SJÄLVSTÄNDIG',
      uv: nonConflictScores.autonomy,
      pv: conflictScores.autonomy + 15,
      fullMark: 100,
    },
  ]

  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <RC cx="50%" cy="70%" outerRadius="100%" data={data}>
        <PolarGrid />
        <PolarAngleAxis
          dataKey="name"
          tick={{
            width: isSmallScreen ? 60 : 120,
            fontSize: isSmallScreen ? 11 : 24,
          }}
        />
        <PolarRadiusAxis domain={[0, 100]} angle={30} />
        <Radar
          name="Non Conflict"
          dataKey="uv"
          stroke="#27b857"
          fill="#27b857"
          fillOpacity={0.4}
        />
        <Radar
          name="Conflict"
          dataKey="pv"
          stroke="#8a1e1a"
          fill="#8a1e1a"
          fillOpacity={0.4}
        />
        <Tooltip />
      </RC>
    </ResponsiveContainer>
  )
}

export default RadarChart
