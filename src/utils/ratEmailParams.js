import splitData from './splitData'
import { setTestResultValues, returnAwarenessPattern } from './ratTestUtils'

/* -------------------- setting email params for emailjs -------------------- */
const ratEmailParams = (data, userEmail) => {
  const fullNonConflictValues = setTestResultValues(splitData(data, 0, 10))
  const fullConflictValues = setTestResultValues(splitData(data, 10, 20))
  const nonConflictResults = returnAwarenessPattern(setTestResultValues(splitData(data, 0, 10)))
  const conflictResults = returnAwarenessPattern(setTestResultValues(splitData(data, 10, 20)))
  const emailParams = {
    to_email: userEmail,
    non_conflict_awarenessType: nonConflictResults.awarenessType,
    non_conflict_animalType: nonConflictResults.animalType,
    non_conflict_summary: nonConflictResults.summary,
    conflict_awarenessType: conflictResults.awarenessType,
    conflict_animalType: conflictResults.animalType,
    conflict_summary: conflictResults.summary,
    analytical_independent: 'Analytical & Independent',
    selfless_nurturing: 'Selfless & Nurturing',
    assertive_direct: 'Assertive & Direct',
    non_conflict_analytical_independent: fullNonConflictValues.autonomy,
    non_conflict_selfless_nurturing: fullNonConflictValues.helper,
    non_conflict_assertive_direct: fullNonConflictValues.influence,
    conflict_analytical_independent: fullConflictValues.autonomy,
    conflict_selfless_nurturing: fullConflictValues.helper,
    conflict_assertive_direct: fullConflictValues.influence,
  }

  return emailParams
}

export default ratEmailParams
