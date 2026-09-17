import { PageContainer, PageHeader } from "@/components/shared/page-primitives"
import { JobForm } from "@/components/forms/job-form"

export default function NewJobRoute() {
	return <PageContainer><PageHeader eyebrow="Client workspace" title="Post a new job" description="Give the right freelancer enough context to do their best work." /><JobForm /></PageContainer>
}