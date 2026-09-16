"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Check, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const profileSchema = z.object({
	name: z.string().trim().min(2, "Enter your name."),
	title: z.string().trim().min(3, "Add a professional title."),
	about: z.string().trim().min(30, "Add at least 30 characters about your work."),
	location: z.string().trim().min(2, "Enter your location."),
	hourlyRate: z.string().trim().min(1, "Enter an hourly rate."),
	availability: z.string().min(1, "Choose your availability."),
})
type ProfileValues = z.infer<typeof profileSchema>

export function ProfileForm() {
	const [saved, setSaved] = useState(false)
	const [skills, setSkills] = useState(["Product design", "Design systems", "Figma"])
	const { register, handleSubmit, formState: { errors } } = useForm<ProfileValues>({ resolver: zodResolver(profileSchema), defaultValues: { name: "Jordan Davis", title: "Product designer", about: "I help teams turn ambitious ideas into useful, thoughtful products.", location: "Toronto, Canada", hourlyRate: "$85/hr", availability: "Available this week" } })
	return <Card><CardContent className="p-6 sm:p-8"><form className="space-y-7" onSubmit={handleSubmit(() => setSaved(true))} noValidate><div className="flex items-center gap-4"><div className="flex size-20 items-center justify-center rounded-2xl bg-primary/15 text-xl font-semibold text-primary">JD</div><Button type="button" variant="outline">Change photo</Button></div><div className="grid gap-5 sm:grid-cols-2"><Field id="profile-name" label="Name" error={errors.name?.message}><Input id="profile-name" {...register("name")} /></Field><Field id="profile-title" label="Professional title" error={errors.title?.message}><Input id="profile-title" {...register("title")} /></Field></div><Field id="profile-about" label="About" error={errors.about?.message}><Textarea className="min-h-32" id="profile-about" {...register("about")} /></Field><div className="grid gap-5 sm:grid-cols-2"><Field id="profile-location" label="Location" error={errors.location?.message}><Input id="profile-location" {...register("location")} /></Field><Field id="profile-rate" label="Hourly rate" error={errors.hourlyRate?.message}><Input id="profile-rate" {...register("hourlyRate")} /></Field></div><Field id="profile-availability" label="Availability" error={errors.availability?.message}><select className="h-9 w-full rounded-lg border border-input bg-background px-3 text-sm" id="profile-availability" {...register("availability")}><option>Available this week</option><option>Available in 2 weeks</option><option>Not currently available</option></select></Field><div><p className="text-sm font-medium">Skills</p><div className="mt-2 flex flex-wrap gap-2">{skills.map((skill) => <span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground" key={skill}>{skill}<button aria-label={`Remove ${skill}`} onClick={() => setSkills(skills.filter((item) => item !== skill))} type="button"><X className="size-3" /></button></span>)}<button className="inline-flex items-center gap-1 rounded-full border border-dashed border-border px-3 py-1.5 text-sm text-muted-foreground" onClick={() => setSkills([...skills, "Research"])} type="button"><Plus className="size-3" />Add skill</button></div></div><div className="flex justify-end border-t border-border pt-6"><Button type="submit">{saved ? <><Check />Changes saved</> : "Save changes"}</Button></div>{saved && <p className="text-right text-sm text-emerald-300">Saved locally for this preview.</p>}</form></CardContent></Card>
}
function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) { return <div><label className="text-sm font-medium" htmlFor={id}>{label}</label><div className="mt-2">{children}</div>{error && <p className="mt-1 text-xs text-destructive">{error}</p>}</div> }
