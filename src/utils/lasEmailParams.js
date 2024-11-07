import {
  returnBestLearningStyle,
  returnWorstLearningStyle,
  returnResultValues,
} from "./lasTestUtils";
const lasEmailParams = (data, userEmail) => {
  const worstLearningStyle = returnWorstLearningStyle(returnResultValues(data));
  const bestLearningStyle = returnBestLearningStyle(returnResultValues(data));
  const emailParams = {
    to_email: userEmail,
    best_type: bestLearningStyle.style,
    best_summary: bestLearningStyle.summary_best,
    worst_type: worstLearningStyle.style,
    worst_summary: worstLearningStyle.summary_worst,
  };
  return emailParams;
};

export default lasEmailParams;
