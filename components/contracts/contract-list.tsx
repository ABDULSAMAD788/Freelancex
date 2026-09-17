"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageContainer, SectionHeader, StatusBadge } from "@/components/shared/page-primitives"
import { contracts } from "@/lib/mock-data"

export function ContractList() {
  const active = contracts.filter((contract) => contract.status === "Active")
  const completed = contracts.filter((contract) => contract.status === "Completed")
  return <PageContainer><SectionHeader title="Contracts" description="Keep active and completed work easy to scan." /><div className="space-y-10"><ContractGroup title="Active" items={active} /><ContractGroup title="Completed" items={completed} /></div></PageContainer>
}
function ContractGroup({ title, items }: { title: string; items: typeof contracts }) { return <section><div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-semibold">{title}</h2><span className="text-sm text-muted-foreground">{items.length} contracts</span></div>{items.length ? <div className="grid gap-4 md:grid-cols-2">{items.map((contract) => <Card key={contract.id}><CardHeader><div className="flex items-start justify-between gap-4"><div><CardTitle>{contract.title}</CardTitle><p className="mt-1 text-sm text-muted-foreground">with {contract.otherParty}</p></div><StatusBadge status={contract.status} /></div></CardHeader><CardContent><div className="flex justify-between text-sm"><span className="text-muted-foreground">{contract.budget} · started {contract.startDate}</span><span>{contract.progress}%</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary" style={{ width: `${contract.progress}%` }} /></div><Button asChild className="mt-5" size="sm" variant="outline"><Link href={`/dashboard/contracts/${contract.id}`}>View contract <ArrowRight /></Link></Button></CardContent></Card>)}</div> : <p className="rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground">No {title.toLowerCase()} contracts in this preview.</p>}</section> }
