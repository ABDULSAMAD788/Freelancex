"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const jobSchema = z.object({
  title: z.string().trim().min(8, "Use at least 8 characters."),
  description: z.string().trim().min(40, "Add at least 40 characters so freelancers have enough context."),
  category: z.string().min(1, "Choose a category."),
  skills: z.string().trim().min(2, "Add at least one skill."),
  budgetType: z.enum(["Fixed price", "Hourly"]),
  minBudget: z.string().trim().min(1, "Enter a minimum budget."),
  maxBudget: z.string().trim().min(1, "Enter a maximum budget."),
  duration: z.string().min(1, "Choose a duration."),
  experience: z.string().min(1, "Choose an experience level."),
})

type JobFormValues = z.infer<typeof jobSchema>

export function JobForm() {
  const [feedback, setFeedback] = useState<"draft" | "preview" | null>(null)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<JobFormValues>({ resolver: zodResolver(jobSchema), defaultValues: { category: "Design & Creative", budgetType: "Fixed price", duration: "3 to 5 weeks", experience: "Intermediate" } })
  const onPreview = () => setFeedback("preview")
  const onSaveDraft = () => setFeedback("draft")
  return <Card><CardContent className="p-6 sm:p-8"><form className="space-y-6" onSubmit={handleSubmit(onPreview)} noValidate><div><label className="text-sm font-medium" htmlFor="job-title">Job title</label><Input className="mt-2" id="job-title" placeholder="e.g. Build a brand system for a climate startup" {...register("title")} />{errors.title && <p className="mt-1 text-xs text-destructive">{errors.title.message}</p>}</div><div><label className="text-sm font-medium" htmlFor="job-description">Description</label><Textarea className="mt-2 min-h-36" id="job-description" placeholder="What are you trying to make, and what does success look like?" {...register("description")} />{errors.description && <p className="mt-1 text-xs text-destructive">{errors.description.message}</p>}</div><div className="grid gap-5 sm:grid-cols-2"><FormSelect id="job-category" label="Category" register={register("category")} options={["Programming & Tech", "Design & Creative", "Writing & Content", "Marketing", "Data & Analytics"]} error={errors.category?.message} /><FormSelect id="job-duration" label="Project duration" register={register("duration")} options={["1 to 2 weeks", "3 to 5 weeks", "1 to 3 months"]} error={errors.duration?.message} /></div><div className="grid gap-5 sm:grid-cols-2"><FormSelect id="job-budget-type" label="Budget type" register={register("budgetType")} options={["Fixed price", "Hourly"]} error={errors.budgetType?.message} /><FormSelect id="job-experience" label="Experience level" register={register("experience")} options={["Entry", "Intermediate", "Expert"]} error={errors.experience?.message} /></div><div className="grid gap-5 sm:grid-cols-2"><FormInput id="job-min-budget" label="Minimum budget" placeholder="$1,000" registration={register("minBudget")} error={errors.minBudget?.message} /><FormInput id="job-max-budget" label="Maximum budget" placeholder="$2,500" registration={register("maxBudget")} error={errors.maxBudget?.message} /></div><div><label className="text-sm font-medium" htmlFor="job-skills">Required skills</label><Input className="mt-2" id="job-skills" placeholder="Figma, brand strategy, research" {...register("skills")} />{errors.skills && <p className="mt-1 text-xs text-destructive">{errors.skills.message}</p>}</div><div><p className="text-sm font-medium">Attachments</p><div className="mt-2 rounded-lg border border-dashed border-border p-4 text-sm text-muted-foreground">Attachment upload will be connected when file storage is selected.</div></div><div className="flex flex-wrap justify-end gap-3 border-t border-border pt-6"><Button type="button" variant="outline">Cancel</Button><Button disabled={isSubmitting} onClick={handleSubmit(onSaveDraft)} type="button" variant="secondary">Save draft</Button><Button disabled={isSubmitting} type="submit">Preview job</Button></div>{feedback && <p className="flex items-center justify-end gap-2 text-sm text-emerald-300"><Check className="size-4" />{feedback === "draft" ? "Draft saved locally." : "Preview ready locally."}</p>}</form></CardContent></Card>
}

function FormInput({ id, label, placeholder, registration, error }: { id: string; label: string; placeholder: string; registration: ReturnType<typeof useForm<JobFormValues>>["register"] extends (...args: never[]) => infer T ? T : never; error?: string }) {
  return <div><label className="text-sm font-medium" htmlFor={id}>{label}</label><Input className="mt-2" id={id} placeholder={placeholder} {...registration} />{error && <p className="mt-1 text-xs text-destructive">{error}</p>}</div>
}
function FormSelect({ id, label, options, register, error }: { id: string; label: string; options: string[]; register: Record<string, unknown>; error?: string }) {
  return <div><label className="text-sm font-medium" htmlFor={id}>{label}</label><select className="mt-2 h-9 w-full rounded-lg border border-input bg-background px-3 text-sm" id={id} {...register}>{options.map((option) => <option key={option}>{option}</option>)}</select>{error && <p className="mt-1 text-xs text-destructive">{error}</p>}</div>
}
