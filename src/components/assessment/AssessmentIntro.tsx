import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Target, TrendingUp } from "lucide-react"

interface AssessmentIntroProps {
  onStart: () => void
}

export function AssessmentIntro({ onStart }: AssessmentIntroProps) {
  const features = [
    {
      icon: Target,
      title: "Scenario-Based Assessment",
      description: "7 realistic scenarios testing your decision-making under pressure"
    },
    {
      icon: Users,
      title: "PEARL Framework Analysis",
      description: "Comprehensive evaluation of Practical Intelligence, Execution, Adaptability, Reliability, and Learning Agility"
    },
    {
      icon: Clock,
      title: "Time & Task Management",
      description: "Evaluate your prioritization skills and deadline management"
    },
    {
      icon: TrendingUp,
      title: "Personalized Feedback",
      description: "Detailed improvement plan with actionable recommendations"
    }
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="text-assessment-primary">
          Professional Assessment
        </Badge>
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Resource-Constrained Planner
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Applied Skills & Real-World Readiness Assessment
        </p>
      </div>

      <Card className="bg-gradient-card shadow-assessment">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            About This Assessment
          </CardTitle>
          <CardDescription className="text-center text-base">
            Measure your ability to navigate projects and tasks while managing limited resources
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="prose prose-sm max-w-none text-foreground">
            <p>
              In today's fast-paced and resource-limited work environments, being a Resource-Constrained Planner 
              means effectively navigating projects and tasks while managing limited time, budget, tools, and personnel. 
              Applied skill readiness in this domain is about more than theoretical knowledge — it is the ability to 
              make sound decisions, prioritize tasks, and execute plans despite ambiguity and constraints.
            </p>
            <p>
              This assessment measures how well candidates can adapt, plan, and deliver results when resources are 
              scarce or uncertain. Through realistic scenarios, practical tasks, and problem-solving exercises, 
              it evaluates their decision-making quality, execution discipline, and adaptability under pressure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-3 p-4 rounded-lg bg-background/50 border border-border/30">
                <feature.icon className="h-6 w-6 text-assessment-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-assessment-primary/5 border border-assessment-primary/20 rounded-lg p-4">
            <h3 className="font-semibold text-assessment-primary mb-2">
              What You'll Gain:
            </h3>
            <ul className="text-sm text-foreground space-y-1">
              <li>• Insights into your real-world performance readiness</li>
              <li>• Identification of strengths and improvement areas</li>
              <li>• Personalized 4-6 week improvement roadmap</li>
              <li>• Role readiness assessment for relevant positions</li>
            </ul>
          </div>

          <div className="text-center pt-4">
            <Button 
              onClick={onStart}
              size="lg"
              className="bg-assessment-primary hover:bg-assessment-primary-light text-white px-8 py-3 text-lg"
            >
              Begin Assessment
            </Button>
            <p className="text-sm text-muted-foreground mt-2">
              Estimated time: 45-60 minutes
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}