"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { ArrowUpRight, Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { EmptyState } from "@/components/shared/page-primitives"
import { categories } from "@/lib/mock-data"

export function CategoryBrowser() {
  const [query, setQuery] = useState("")
  const visible = useMemo(() => categories.filter((category) => `${category.name} ${category.description}`.toLowerCase().includes(query.toLowerCase())), [query])
  return <div><div className="relative max-w-xl"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input aria-label="Search categories" className="pl-9" onChange={(event) => setQuery(event.target.value)} placeholder="Search categories" value={query} /></div><div className="mt-6">{visible.length ? <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{visible.map((category) => { const Icon = category.icon; return <Link href={`/jobs?category=${encodeURIComponent(category.name)}`} key={category.name}><Card className="h-full transition-colors hover:border-primary/50"><CardContent className="p-6"><div className="flex items-center justify-between"><Icon className="size-7 text-primary" /><ArrowUpRight className="size-4 text-muted-foreground" /></div><h2 className="mt-8 font-semibold">{category.name}</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">{category.description}</p><p className="mt-5 text-xs text-primary">{category.jobs} open jobs</p></CardContent></Card></Link> })}</div> : <EmptyState title="No categories found" description="Try a broader search term." />}</div></div>
}
