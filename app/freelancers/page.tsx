import { PublicShell } from "@/components/layout/public-shell"
import { PageContainer, PageHeader } from "@/components/shared/page-primitives"
import { freelancers } from "@/lib/mock-data"
import Link from "next/link"

export default function FreelancersPage() {
  return (
    <PublicShell>
      <PageContainer>
        <PageHeader
          eyebrow="Discover talent"
          title="Browse freelancer profiles"
          description="Review professionals by specialty, availability, and strengths before you start a conversation."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {freelancers.map((freelancer) => (
            <Link
              className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              href={`/freelancers/${freelancer.id}`}
              key={freelancer.id}
            >
              <div className="flex items-center gap-3">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/12 text-sm font-semibold text-primary">
                  {freelancer.initials}
                </span>
                <div>
                  <p className="font-medium">{freelancer.name}</p>
                  <p className="text-sm text-muted-foreground">{freelancer.title}</p>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p>{freelancer.location}</p>
                <p>{freelancer.availability}</p>
                <p>{freelancer.hourlyRate}</p>
              </div>
            </Link>
          ))}
        </div>
      </PageContainer>
    </PublicShell>
  )
}
