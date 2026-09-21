"use client"

import Link from "next/link"
import { useState } from "react"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageContainer, PageHeader, StatusBadge } from "@/components/shared/page-primitives"
import { jobs } from "@/lib/mock-data"

export function ClientJobsManager() {
  const [filter, setFilter] = useState("All")
  const [closedId, setClosedId] = useState<string | null>(null)
  const [closed, setClosed] = useState<string[]>([])
  const items = jobs.filter((job) => !closed.includes(job.id) && (filter === "All" || filter === "Active" && job.status === "Open" || filter === "Closed" && closed.includes(job.id) || filter === "Drafts" && false))
  const closeJob = () => { if (closedId) { setClosed([...closed, closedId]); setClosedId(null) } }
  return <PageContainer><PageHeader eyebrow="Client workspace" title="My jobs" description="Manage the briefs you have shared with the marketplace." action={<Button asChild><Link href="/dashboard/client/jobs/new">Post a job</Link></Button>} /><div className="mb-6 flex flex-wrap gap-2">{["All", "Active", "Drafts", "Closed"].map((item) => <Button key={item} onClick={() => setFilter(item)} size="sm" variant={filter === item ? "default" : "outline"}>{item}</Button>)}</div><div className="space-y-3">{items.map((job) => <Card key={job.id}><CardContent className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center"><div><div className="flex flex-wrap items-center gap-3"><h2 className="font-medium">{job.title}</h2><StatusBadge status={job.status} /></div><p className="mt-2 text-sm text-muted-foreground">{job.budget} · {job.proposals} proposals · posted {job.posted}</p></div><div className="flex gap-2"><Button asChild size="sm" variant="outline"><Link href={`/jobs/${job.id}`}>View</Link></Button><Button size="sm" variant="ghost">Edit</Button><Button onClick={() => setClosedId(job.id)} size="sm" variant="ghost">Close</Button></div></CardContent></Card>)}{!items.length && <p className="rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground">No jobs in this view.</p>}</div>{closedId && <div aria-labelledby="close-job-title" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-5" role="dialog"><div className="w-full max-w-md rounded-xl border border-border bg-popover p-6 shadow-2xl"><div className="flex justify-between gap-4"><div><h2 className="font-semibold" id="close-job-title">Close this job?</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">This local preview will remove the job from the active list. No backend mutation will occur.</p></div><Button aria-label="Cancel close job" onClick={() => setClosedId(null)} size="icon-sm" variant="ghost"><X /></Button></div><div className="mt-6 flex justify-end gap-2"><Button onClick={() => setClosedId(null)} variant="outline">Cancel</Button><Button onClick={closeJob}><Check />Close job</Button></div></div></div>}</PageContainer>
}
