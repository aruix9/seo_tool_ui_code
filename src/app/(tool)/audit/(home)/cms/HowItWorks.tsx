import { BarChart2, ListChecks, Search } from 'lucide-react'
import React from 'react'

const HowItWorks = () => {
  return (
    <section className="mb-12 py-12">
      <div className="max-w-[1440px] px-6 mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">How Authority Analysis Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="h-16 w-16 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
              <Search className="text-primary group-hover:text-white transition-colors w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg mb-2">1. Input Details</h3>
            <p className="text-sm text-slate-500 px-4">Enter your domain and up to 5 competitors to start the comparative scan.</p>
          </div>
          <div className="text-center group">
            <div className="h-16 w-16 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
              <BarChart2 className="text-primary group-hover:text-white transition-colors w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg mb-2">2. Deep Analysis</h3>
            <p className="text-sm text-slate-500 px-4">Our AI identifies specific backlink gaps and quality metrics between domains.</p>
          </div>
          <div className="text-center group">
            <div className="h-16 w-16 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
              <ListChecks className="text-primary group-hover:text-white transition-colors w-8 h-8" />
            </div>
            <h3 className="font-bold text-lg mb-2">3. Acquire & Rank</h3>
            <p className="text-sm text-slate-500 px-4">Receive a prioritized list of link opportunities to bridge the authority gap.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
