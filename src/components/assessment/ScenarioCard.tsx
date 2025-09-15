import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface ScenarioOption {
  id: string
  text: string
  type: "single" | "multiple"
}

interface ScenarioTask {
  id: string
  title: string
  description: string
  type: "choice" | "priority" | "text"
  options?: ScenarioOption[]
  placeholder?: string
}

interface ScenarioCardProps {
  scenario: {
    id: string
    title: string
    situation: string
    tasks: ScenarioTask[]
  }
  onComplete: (answers: Record<string, any>) => void
  className?: string
}

export function ScenarioCard({ scenario, onComplete, className }: ScenarioCardProps) {
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0)

  const currentTask = scenario.tasks[currentTaskIndex]
  const isLastTask = currentTaskIndex === scenario.tasks.length - 1
  const isFirstTask = currentTaskIndex === 0

  const handleAnswer = (taskId: string, answer: any) => {
    setAnswers(prev => ({ ...prev, [taskId]: answer }))
  }

  const handleNext = () => {
    if (isLastTask) {
      onComplete(answers)
    } else {
      setCurrentTaskIndex(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (!isFirstTask) {
      setCurrentTaskIndex(prev => prev - 1)
    }
  }

  const renderTaskContent = (task: ScenarioTask) => {
    switch (task.type) {
      case "choice":
        if (task.options?.[0]?.type === "multiple") {
          return (
            <div className="space-y-3">
              {task.options.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.id}
                    checked={answers[task.id]?.includes(option.id) || false}
                    onCheckedChange={(checked) => {
                      const currentAnswers = answers[task.id] || []
                      if (checked) {
                        handleAnswer(task.id, [...currentAnswers, option.id])
                      } else {
                        handleAnswer(task.id, currentAnswers.filter((id: string) => id !== option.id))
                      }
                    }}
                  />
                  <Label htmlFor={option.id} className="text-sm font-normal">
                    {option.text}
                  </Label>
                </div>
              ))}
            </div>
          )
        } else {
          return (
            <RadioGroup
              value={answers[task.id] || ""}
              onValueChange={(value) => handleAnswer(task.id, value)}
            >
              {task.options?.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.id} id={option.id} />
                  <Label htmlFor={option.id} className="text-sm font-normal">
                    {option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )
        }
      
      case "text":
        return (
          <Textarea
            placeholder={task.placeholder || "Enter your response..."}
            value={answers[task.id] || ""}
            onChange={(e) => handleAnswer(task.id, e.target.value)}
            className="min-h-[120px]"
          />
        )
      
      default:
        return null
    }
  }

  return (
    <Card className={cn("bg-gradient-card shadow-card-subtle animate-fade-in", className)}>
      <CardHeader>
        <CardTitle className="text-xl text-assessment-primary">
          {scenario.title}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {scenario.situation}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="bg-background/50 p-4 rounded-lg border border-border/30">
          <h4 className="font-semibold text-foreground mb-3">
            Task {currentTaskIndex + 1}: {currentTask.title}
          </h4>
          <p className="text-muted-foreground mb-4">
            {currentTask.description}
          </p>
          
          {renderTaskContent(currentTask)}
        </div>
        
        <div className="flex justify-between items-center pt-4 border-t border-border/30">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={isFirstTask}
          >
            Previous
          </Button>
          
          <div className="text-sm text-muted-foreground">
            Task {currentTaskIndex + 1} of {scenario.tasks.length}
          </div>
          
          <Button
            onClick={handleNext}
            disabled={!answers[currentTask.id]}
            className="bg-assessment-primary hover:bg-assessment-primary-light"
          >
            {isLastTask ? "Complete Scenario" : "Next Task"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}