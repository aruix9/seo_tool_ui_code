import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, EyeOff, TrendingUp } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"
import { Checkbox } from "@/src/components/ui/checkbox"

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <section className="max-w-[1440px] px-6 mx-auto w-full">
      <div className="flex flex-col md:flex-row items-stretch gap-16">
        {/* Left Column: Marketing Content */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Welcome <span className="text-primary">Back</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Bridging the authority gap with data-driven SEO strategies. Log in to manage your link-building campaigns and monitor your domain authority growth.
            </p>
            
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl shadow-primary/20 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
              <img 
                alt="Analytics Dashboard" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-lg z-20 border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">+24% Domain Authority</p>
                    <p className="text-xs text-slate-500">Average client growth this month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sign-in Form */}
        <div className="flex-1 flex items-center justify-end">
          <div className="w-full max-w-lg bg-background-light rounded-xl shadow-xl border border-slate-200 p-8 lg:p-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Sign In to ButterSwipe</h2>
              <p className="text-slate-500">Enter your credentials to access your account</p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@company.com" 
                  className="h-12 px-4 rounded-lg border-slate-300 bg-white focus-visible:ring-primary focus-visible:border-primary text-base" 
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-semibold text-slate-700">Password</Label>
                  <Link to="#" className="text-sm font-medium text-primary hover:underline">Forgot Password?</Link>
                </div>
                <div className="relative">
                  <Input 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    className="h-12 px-4 pr-12 rounded-lg border-slate-300 bg-white focus-visible:ring-primary focus-visible:border-primary text-base" 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Checkbox id="remember-me" className="rounded text-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
                <Label htmlFor="remember-me" className="text-sm font-normal text-slate-600 cursor-pointer">
                  Keep me signed in
                </Label>
              </div>
              
              <Button type="submit" className="w-full h-[52px] bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-[0.98] text-base">
                Sign In
              </Button>
            </form>
            
            <p className="mt-8 text-center text-sm text-slate-600">
              New to ButterSwipe?
              <Link to="/register" className="font-bold text-primary hover:underline ml-1">Create an account</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
