export const scenarios = [
  {
    id: "scenario-1",
    title: "Limited Team Bandwidth for Project Launch",
    situation: "Your team has 5 people, but due to vacations and sick days, only 3 are available to launch a new product in 3 weeks. You lack full clarity on final feature specs.",
    tasks: [
      {
        id: "actions",
        title: "Choose the top 3 actions you would take first",
        description: "Select the three most critical actions to take immediately:",
        type: "choice" as const,
        options: [
          {
            id: "stakeholder-meeting",
            text: "Schedule urgent stakeholder meeting to clarify requirements",
            type: "multiple" as const
          },
          {
            id: "resource-audit",
            text: "Conduct immediate resource audit and capacity assessment",
            type: "multiple" as const
          },
          {
            id: "scope-reduction",
            text: "Identify minimum viable features for launch",
            type: "multiple" as const
          },
          {
            id: "external-help",
            text: "Explore temporary contractor or consultant options",
            type: "multiple" as const
          },
          {
            id: "timeline-extension",
            text: "Negotiate timeline extension with stakeholders",
            type: "multiple" as const
          },
          {
            id: "team-redistribution",
            text: "Redistribute current team members' responsibilities",
            type: "multiple" as const
          }
        ]
      },
      {
        id: "prioritization",
        title: "Prioritize feature delivery based on risk and impact",
        description: "Rank these features from highest to lowest priority for the constrained launch:",
        type: "choice" as const,
        options: [
          {
            id: "core-functionality",
            text: "Core product functionality (essential features)",
            type: "single" as const
          },
          {
            id: "user-authentication",
            text: "User authentication and security features",
            type: "single" as const
          },
          {
            id: "reporting-dashboard",
            text: "Reporting and analytics dashboard",
            type: "single" as const
          },
          {
            id: "integration-apis",
            text: "Third-party integrations and APIs",
            type: "single" as const
          },
          {
            id: "advanced-features",
            text: "Advanced/premium features",
            type: "single" as const
          }
        ]
      },
      {
        id: "stakeholders",
        title: "Identify which stakeholders to engage for missing info",
        description: "Explain your approach to gathering the missing feature specifications and who you would contact first:",
        type: "text" as const,
        placeholder: "Describe your stakeholder engagement strategy, including who to contact, in what order, and what specific information you need from each..."
      }
    ]
  },
  {
    id: "scenario-2",
    title: "Budget Cuts Impacting Vendor Contracts",
    situation: "Mid-quarter, your budget is cut by 20%, affecting contracts with key suppliers and threatening delivery timelines.",
    tasks: [
      {
        id: "contract-decisions",
        title: "Decide which contracts to renegotiate or postpone",
        description: "Which approach would you take for managing vendor contracts?",
        type: "choice" as const,
        options: [
          {
            id: "critical-vendors",
            text: "Prioritize critical vendors, renegotiate terms with secondary ones",
            type: "single" as const
          },
          {
            id: "across-board",
            text: "Negotiate 20% reduction across all vendor contracts equally",
            type: "single" as const
          },
          {
            id: "payment-terms",
            text: "Maintain services but extend payment terms",
            type: "single" as const
          },
          {
            id: "scope-reduction",
            text: "Reduce scope of work with all vendors proportionally",
            type: "single" as const
          }
        ]
      },
      {
        id: "impact-minimization",
        title: "List steps to minimize impact on delivery timelines",
        description: "Outline your specific action plan to protect delivery schedules:",
        type: "text" as const,
        placeholder: "Detail your step-by-step approach to maintaining delivery timelines despite budget constraints..."
      },
      {
        id: "negotiation-data",
        title: "State what data you need before negotiating",
        description: "What information would you gather before entering vendor negotiations?",
        type: "choice" as const,
        options: [
          {
            id: "vendor-performance",
            text: "Historical vendor performance metrics and contract terms",
            type: "multiple" as const
          },
          {
            id: "market-rates",
            text: "Current market rates for similar services",
            type: "multiple" as const
          },
          {
            id: "delivery-impact",
            text: "Impact analysis of service reduction on project deliverables",
            type: "multiple" as const
          },
          {
            id: "alternative-vendors",
            text: "Alternative vendor options and pricing",
            type: "multiple" as const
          },
          {
            id: "internal-capacity",
            text: "Internal team capacity to absorb some vendor responsibilities",
            type: "multiple" as const
          }
        ]
      }
    ]
  }
]