import { Route, Check } from "lucide-react"

interface AuthorityRoadmapProps {
    currentStep: number;
}

export function AuthorityRoadmap({ currentStep }: AuthorityRoadmapProps) {
    const steps = [
        {
            title: "Audit Site Profile",
            completedText: "Completed 2 days ago",
            inProgressText: "In Progress",
            upcomingText: "Next Step"
        },
        {
            title: "Identify Competitor Gaps",
            completedText: "Completed today",
            inProgressText: "In Progress",
            upcomingText: "Next Step"
        },
        {
            title: "Acquire High-Trust Links",
            completedText: "Completed",
            inProgressText: "In Progress",
            upcomingText: "Upcoming"
        },
        {
            title: "Complete Secure Purchase",
            completedText: "Completed",
            inProgressText: "In Progress",
            upcomingText: "Upcoming"
        },
        {
            title: "Monitor Backlink Indexing",
            completedText: "Completed",
            inProgressText: "In Progress",
            upcomingText: "Final Phase"
        }
    ];

    return (
        <div className="flex-grow">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                    <Route className="text-primary w-5 h-5" />
                    <h3 className="font-bold text-lg">Authority Roadmap</h3>
                </div>
                <div className="space-y-4">
                    {steps.map((step, index) => {
                        const stepNumber = index + 1;
                        const isCompleted = stepNumber < currentStep;
                        const isCurrent = stepNumber === currentStep;

                        return (
                            <div key={index} className="flex items-start gap-3">
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${isCompleted ? 'border-primary bg-primary' :
                                    isCurrent ? 'border-primary' : 'border-slate-200'
                                    }`}>
                                    {isCompleted && <Check className="w-3 h-3 text-white font-bold" />}
                                    {isCurrent && <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>}
                                </div>
                                <div>
                                    <p className={`text-sm font-bold ${isCompleted || isCurrent ? 'text-slate-900' : 'text-slate-400'}`}>
                                        {step.title}
                                    </p>
                                    <p className={`text-[11px] font-medium uppercase tracking-wider ${isCompleted ? 'text-slate-400' :
                                        isCurrent ? 'text-primary' : 'text-slate-400'
                                        }`}>
                                        {isCompleted ? step.completedText : isCurrent ? step.inProgressText : step.upcomingText}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
