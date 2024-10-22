import React from 'react'
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
    <ResponsiveContainer width="100%" height={400}>
      <RC cx="50%" cy="70%" outerRadius="100%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar
          name="Non Conflict"
          dataKey="uv"
          stroke="#27b857"
          fill="#27b857"
          fillOpacity={0.6}
        />
        <Radar
          name="Conflict"
          dataKey="pv"
          stroke="#8a1e1a"
          fill="#8a1e1a"
          fillOpacity={0.6}
        />
        <Tooltip />
      </RC>
    </ResponsiveContainer>
  )
}

export default RadarChart
