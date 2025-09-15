import { useState, useCallback } from 'react'

export interface AssessmentState {
  currentStep: number
  totalSteps: number
  currentSection: 'intro' | 'scenarios' | 'practical' | 'time-management' | 'problem-solving' | 'results'
  scenarioIndex: number
  answers: Record<string, any>
  scores: Record<string, number>
}

export function useAssessment() {
  const [state, setState] = useState<AssessmentState>({
    currentStep: 1,
    totalSteps: 8, // intro + 7 sections
    currentSection: 'intro',
    scenarioIndex: 0,
    answers: {},
    scores: {}
  })

  const startAssessment = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentStep: 2,
      currentSection: 'scenarios'
    }))
  }, [])

  const completeScenario = useCallback((scenarioId: string, answers: Record<string, any>) => {
    setState(prev => {
      const newAnswers = { ...prev.answers, [scenarioId]: answers }
      const newScenarioIndex = prev.scenarioIndex + 1
      
      // Calculate scenario score (simplified scoring for demo)
      const scenarioScore = Object.keys(answers).length * 20 // Basic scoring
      
      return {
        ...prev,
        answers: newAnswers,
        scenarioIndex: newScenarioIndex,
        currentStep: prev.currentStep + 1,
        scores: { ...prev.scores, [scenarioId]: scenarioScore }
      }
    })
  }, [])

  const nextSection = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentStep: prev.currentStep + 1,
      currentSection: getNextSection(prev.currentSection)
    }))
  }, [])

  const calculateOverallScore = useCallback(() => {
    const scores = Object.values(state.scores)
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0
  }, [state.scores])

  return {
    state,
    startAssessment,
    completeScenario,
    nextSection,
    calculateOverallScore
  }
}

function getNextSection(current: AssessmentState['currentSection']): AssessmentState['currentSection'] {
  const sections: AssessmentState['currentSection'][] = [
    'intro', 'scenarios', 'practical', 'time-management', 'problem-solving', 'results'
  ]
  const currentIndex = sections.indexOf(current)
  return sections[currentIndex + 1] || 'results'
}