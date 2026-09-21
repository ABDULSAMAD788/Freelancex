"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { Job } from "@/lib/mock-data"

const proposalSchema = z.object({
  coverLetter: z.string().trim().min(50, "Add at least 50 characters."),
  price: z.string().trim().min(1, "Enter your proposed price."),
  delivery: z.string().trim().min(1, "Enter an estimated delivery time."),
  experience: z.string().trim().min(30, "Share a little relevant experience."),
  questions: z.string().optional(),
})
type ProposalFormValues = z.infer<typeof proposalSchema>

export function ProposalForm({ job }: { job: Job }) {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<ProposalFormValues>({ resolver: zodResolver(proposalSchema) })
  if (submitted) return <Card><CardContent className="flex flex-col items-center p-10 text-center"><CheckCircle2 className="size-10 text-emerald-300" /><h2 className="mt-5 text-2xl font-semibold">Proposal preview sent</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">This mock submission is complete. Nothing has been persisted.</p></CardContent></Card>
  return <Card><CardContent className="space-y-6 p-6 sm:p-8"><div className="rounded-lg bg-muted/60 p-4"><p className="text-xs text-muted-foreground">Applying to</p><p className="mt-1 font-medium">{job.title}</p><p className="mt-1 text-sm text-muted-foreground">{job.budget} · {job.duration}</p></div><form className="space-y-6" onSubmit={handleSubmit(() => setSubmitted(true))} noValidate><Field id="cover-letter" label="Cover letter" error={errors.coverLetter?.message}><Textarea className="min-h-40" id="cover-letter" placeholder="Tell the client why this project is a strong fit..." {...register("coverLetter")} /></Field><div className="grid gap-5 sm:grid-cols-2"><Field id="proposal-price" label="Proposed price" error={errors.price?.message}><Input id="proposal-price" placeholder="$2,800" {...register("price")} /></Field><Field id="proposal-delivery" label="Estimated delivery" error={errors.delivery?.message}><Input id="proposal-delivery" placeholder="4 weeks" {...register("delivery")} /></Field></div><Field id="proposal-experience" label="Relevant skills or experience" error={errors.experience?.message}><Textarea className="min-h-28" id="proposal-experience" placeholder="Share one or two relevant examples..." {...register("experience")} /></Field><Field id="proposal-questions" label="Optional questions"><Textarea id="proposal-questions" placeholder="Anything you would like to clarify?" {...register("questions")} /></Field><Button className="w-full" type="submit">Preview and submit</Button></form></CardContent></Card>
}
function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) { return <div><label className="text-sm font-medium" htmlFor={id}>{label}</label><div className="mt-2">{children}</div>{error && <p className="mt-1 text-xs text-destructive">{error}</p>}</div> }
