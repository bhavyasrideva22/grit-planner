import { useAssessment } from "@/hooks/useAssessment"
import { AssessmentHeader } from "@/components/assessment/AssessmentHeader"
import { AssessmentIntro } from "@/components/assessment/AssessmentIntro"
import { ScenarioCard } from "@/components/assessment/ScenarioCard"
import { scenarios } from "@/data/scenarios"

const Index = () => {
  const { state, startAssessment, completeScenario } = useAssessment()

  const getCurrentSectionTitle = () => {
    switch (state.currentSection) {
      case 'intro':
        return 'Introduction'
      case 'scenarios':
        return `Scenario ${state.scenarioIndex + 1}: ${scenarios[state.scenarioIndex]?.title || 'Assessment'}`
      case 'practical':
        return 'Practical Skills'
      case 'time-management':
        return 'Time & Task Management'
      case 'problem-solving':
        return 'Problem Solving'
      case 'results':
        return 'Results & Recommendations'
      default:
        return 'Assessment'
    }
  }

  const renderCurrentSection = () => {
    switch (state.currentSection) {
      case 'intro':
        return <AssessmentIntro onStart={startAssessment} />
      
      case 'scenarios':
        if (state.scenarioIndex < scenarios.length) {
          return (
            <ScenarioCard
              scenario={scenarios[state.scenarioIndex]}
              onComplete={(answers) => completeScenario(scenarios[state.scenarioIndex].id, answers)}
            />
          )
        }
        return <div className="text-center">All scenarios completed!</div>
      
      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Section: {getCurrentSectionTitle()}</h2>
            <p className="text-muted-foreground">This section is coming soon...</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {state.currentSection !== 'intro' && (
        <AssessmentHeader
          title={getCurrentSectionTitle()}
          currentStep={state.currentStep}
          totalSteps={state.totalSteps}
        />
      )}
      
      <main className="container mx-auto px-4 py-8">
        {renderCurrentSection()}
      </main>
    </div>
  )
};

export default Index;
