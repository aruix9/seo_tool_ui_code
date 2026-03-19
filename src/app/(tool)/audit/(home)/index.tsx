import { AuthorityRoadmap } from "../(shared)/AuditAuthorityRoadmap";

import RecentlyAnalyzed from "./RecentlyAnalyzed";
import AnalysisTips from "./cms/AnalysisTips";
import HeroTitle from "./cms/HeroTitle";
import AuditForm from "./AuditForm";
import HowItWorks from "./cms/HowItWorks";

const AuditHomePage = () => {
    return (
        <>

            <section className="border-b border-slate-200 bg-white/50">
                <div className="max-w-[1440px] px-6 mx-auto mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
                        <div className="lg:col-span-6 bg-white rounded-xl p-8 md:p-10 shadow-sm border border-slate-200">
                            <HeroTitle />
                            <AuditForm />
                        </div>

                        <aside className="lg:col-span-4 h-full flex flex-col">
                            <AuthorityRoadmap currentStep={1} />
                            <AnalysisTips />
                        </aside>
                    </div>
                </div>
            </section>
            <RecentlyAnalyzed />
            <HowItWorks />
        </>
    )
}

export default AuditHomePage
