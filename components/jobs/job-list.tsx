"use client"
import { useMemo, useState } from "react"
import { EmptyState } from "@/components/shared/page-primitives"
import { JobCard } from "@/components/jobs/job-card"
import { JobFilters, type JobFilterState } from "@/components/jobs/job-filters"
import type { Job } from "@/lib/mock-data"

export function JobList({ jobs }: { jobs: Job[] }) {
  const [filters, setFilters] = useState<JobFilterState>({ search: "", category: "", budget: "", experience: "", projectType: "", sort: "" })
  const visibleJobs = useMemo(() => jobs.filter((job) => (!filters.search || `${job.title} ${job.description} ${job.skills.join(" ")}`.toLowerCase().includes(filters.search.toLowerCase())) && (!filters.category || job.category === filters.category) && (!filters.experience || job.experience === filters.experience) && (!filters.projectType || job.projectType === filters.projectType) && (!filters.budget || filters.budget === "Under $1,000" && job.budgetValue < 1000 || filters.budget === "$1,000 - $2,500" && job.budgetValue >= 1000 && job.budgetValue <= 2500 || filters.budget === "Over $2,500" && job.budgetValue > 2500)).sort((a, b) => filters.sort === "Highest budget" ? b.budgetValue - a.budgetValue : 0), [filters, jobs])
  return <div><JobFilters filters={filters} onChange={setFilters} /><div className="mt-6 grid gap-4">{visibleJobs.length ? visibleJobs.map((job) => <JobCard key={job.id} job={job} />) : <EmptyState title="No jobs match these filters" description="Try widening your search or clearing one of the filters." />}</div><p className="mt-5 text-center text-xs text-muted-foreground">Showing {visibleJobs.length} of {jobs.length} opportunities</p></div>
}