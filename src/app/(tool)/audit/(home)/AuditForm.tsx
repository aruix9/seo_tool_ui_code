"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Activity, Globe, Plus, X } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { UrlFormValues, UrlSchema } from '@/schemas/zodAuditSchemas'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Field, FieldDescription } from '@/components/ui/field'
import { useRouter } from 'next/navigation'

const urlRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
const isValidUrl = (value: string) => {
  return urlRegex.test(value.trim());
};

const AuditForm = () => {
  const router = useRouter();

  const [urlError, setUrlError] = useState('')
  const [competitorsInput, setCompetitorsInput] = useState('')
  const [showCompetitorField, setShowCompetitorField] = useState(false)
  const [competitors, setCompetitors] = useState<string[]>([])

  const form = useForm<UrlFormValues>({
    resolver: zodResolver(UrlSchema),
    defaultValues: {
      url: "",
    },
  });

  const AddCompetitors = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setUrlError("")
    if (["Enter", ",", " "].includes(e.key)) {
      e.preventDefault();

      let value = e.currentTarget.value.trim();
      value = value.split(/[,\s]+/)[0]

      if (!value) return;

      if (competitors.length >= 3) return;

      if (competitors.some(c => c.toLowerCase() === value.toLowerCase())) return;

      if (!isValidUrl(value)) {
        setUrlError("Invalid URL")
        return;
      }

      setCompetitors(prev => [...prev, value]);

      setCompetitorsInput('');
    }
  };

  const onSubmit = (values: UrlFormValues) => {
    const params = new URLSearchParams();
    params.set("url", values.url);

    const competitorsList: string[] = [...competitors];

    if(competitorsInput.length) {
      competitorsList.push(competitorsInput)
    }

    competitorsList.forEach((value, i) => {
      params.set(`competitor${i + 1}`, value as string);
    });

    router.push(`audit/result?${params.toString()}`);
  };

  const removeCompetitors= (el: string) => {
    let competitorList: string[] = [...competitors];

    competitorList = competitorList.filter(itemString => itemString !== el);

    setCompetitors(competitorList)
  }

  return (
    <Form {...form}>
      <form
        className='space-y-6'
        onSubmit={form.handleSubmit(onSubmit)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
      >
        <div className="text-left space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Your Domain</label>
            <div className="relative">
              <Globe className="absolute left-4 top-[26px] -translate-y-1/2 text-primary w-5 h-5" />
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem className='gap-1'>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="https://www.example.com"
                        className="w-full pl-12 pr-4 py-6 rounded-xl border-2 border-primary bg-primary/5 focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2 ml-1">Competitors</label>
            <div className="flex flex-wrap gap-2 p-3 border-2 border-slate-200 rounded-xl bg-slate-50">
              {showCompetitorField && (
                <Field className='gap-1 mb-2 w-full' data-invalid={urlError.length}>
                  <Input
                    value={competitorsInput}
                    onChange={(e) => setCompetitorsInput(e.target.value)}
                    onKeyUp={(e) => AddCompetitors(e)}
                    placeholder="https://www.example.com"
                    className="inline py-0 rounded-xl border bg-white transition-all" />
                  {urlError ? <FieldDescription className='text-xs text-red-400'>{urlError}</FieldDescription> : <FieldDescription className='text-xs'>Only 3 competitors are allowed</FieldDescription>}
                </Field>
              )}
              {competitors && competitors.map((el: string, i: number) =>
                <span key={i} className="items-center pl-3 gap-1 bg-white rounded-lg text-sm font-medium border border-slate-200">
                  {el} <button className="hover:bg-red-500 hover:text-white rounded-r-lg cursor-pointer px-2 py-2"><X className="w-3 h-3" onClick={() => removeCompetitors(el)} /></button>
                </span>
              )}
              <span
                onClick={() => setShowCompetitorField(!showCompetitorField)}
                className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-bold hover:bg-primary/20 transition-colors cursor-pointer">
                <Plus className="w-3 h-3" /> Add Competitor
              </span>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 text-lg cursor-pointer"
        >
          <Activity className="w-5 h-5" />
          Analyze Authority Gap
        </button>
      </form>
    </Form>
  )
}

export default AuditForm
