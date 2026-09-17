import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { PageContainer } from "@/components/shared/page-primitives"
import { ProposalForm } from "@/components/forms/proposal-form"
import { getJob } from "@/lib/mock-data"

export default async function ProposalPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params
  const job = getJob(jobId)
  if (!job) notFound()
  return <PageContainer><Link className="inline-flex items-center gap-2 text-sm text-muted-foreground" href={`/jobs/${job.id}`}><ArrowLeft className="size-4" />Back to job</Link><div className="mx-auto mt-8 max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[.18em] text-primary">Submit a proposal</p><h1 className="mt-3 text-3xl font-semibold tracking-tight">{job.title}</h1><p className="mt-3 text-sm leading-6 text-muted-foreground">Complete the form below to prepare a thoughtful proposal.</p><div className="mt-8"><ProposalForm job={job} /></div></div></PageContainer>
}
