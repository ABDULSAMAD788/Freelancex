import { PublicShell } from "@/components/layout/public-shell"
import { PageContainer, PageHeader } from "@/components/shared/page-primitives"
import { JobList } from "@/components/jobs/job-list"
import { jobs } from "@/lib/mock-data"
export default function JobsPage() { return <PublicShell><PageContainer><PageHeader eyebrow="Marketplace" title="Find work with momentum." description="Browse focused projects from teams looking for independent talent. Filter by the shape of work that fits you." /><JobList jobs={jobs} /></PageContainer></PublicShell> }