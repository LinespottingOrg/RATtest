import React, { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useTranslation } from "react-i18next";

import { setTestResultValues } from "../../utils/ratTestUtils";
import splitData from "../../utils/splitData";

function RatResultChart({ results, "data-testid": testId }) {
  const nonConflictScores = setTestResultValues(splitData(results, 0, 10));
  const conflictScores = setTestResultValues(splitData(results, 10, 20));
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 650);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScreenResize = () => setIsSmallScreen(window.innerWidth < 650);
    window.addEventListener("resize", handleScreenResize);
    return () => window.removeEventListener("resize", handleScreenResize);
  });

  const data = [
    {
      name: t("awareness_types.selfless_nurturing.type"),
      uv: nonConflictScores.helper,
      pv: conflictScores.helper,
      fullMark: 100,
    },
    {
      name: t("awareness_types.assertive_direct.type"),
      uv: nonConflictScores.influence,
      pv: conflictScores.influence,
      fullMark: 100,
    },
    {
      name: t("awareness_types.analytical_independent.type"),
      uv: nonConflictScores.autonomy,
      pv: conflictScores.autonomy,
      fullMark: 100,
    },
  ];

  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <RadarChart
        cx="50%"
        cy="70%"
        outerRadius="100%"
        data={data}
        data-testid={testId}
      >
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
          name={t("resultpage.non_conflict")}
          dataKey="uv"
          stroke="#27b857"
          fill="#27b857"
          fillOpacity={0.4}
        />
        <Radar
          name={t("resultpage.conflict")}
          dataKey="pv"
          stroke="#8a1e1a"
          fill="#8a1e1a"
          fillOpacity={0.4}
        />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default RatResultChart;
