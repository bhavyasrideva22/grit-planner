import { cn } from "@/lib/utils"
import { ProgressBar } from "@/components/ui/progress-bar"

interface AssessmentHeaderProps {
  title: string
  currentStep: number
  totalSteps: number
  className?: string
}

export function AssessmentHeader({ 
  title, 
  currentStep, 
  totalSteps, 
  className 
}: AssessmentHeaderProps) {
  return (
    <header className={cn(
      "bg-gradient-card border-b border-border/50 py-6 px-6 sticky top-0 z-50 backdrop-blur-sm",
      className
    )}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-foreground">
            Resource-Constrained Planner Assessment
          </h1>
          <div className="text-sm text-muted-foreground">
            Step {currentStep} of {totalSteps}
          </div>
        </div>
        
        <ProgressBar 
          value={currentStep} 
          max={totalSteps} 
          showLabel={true}
          label={title}
          className="mb-2"
        />
      </div>
    </header>
  )
}