import { Link } from "react-router-dom"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Label } from "@/src/components/ui/label"

export default function ForgotPassword() {
  return (
    <section className="max-w-[1440px] px-6 mx-auto w-full h-full min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-[540px]">
        <div className="bg-background-light rounded-[24px] p-10 md:p-14 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-200">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-3 text-slate-900">Forgot Password?</h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
              Enter the email address associated with your account and we'll send you a link to reset your password.
            </p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2 text-left">
              <Label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@company.com" 
                className="h-12 px-4 rounded-xl border-slate-200 bg-white focus-visible:ring-primary focus-visible:border-primary text-base" 
                required
              />
            </div>
            
            <Button type="submit" className="w-full h-[52px] bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all active:scale-[0.98] text-base">
              Send Reset Link
            </Button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-slate-100 text-center">
            <p className="text-slate-500 text-sm">
              Remember your password?
              <Link to="/login" className="font-bold text-primary hover:underline ml-1">Back to Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
