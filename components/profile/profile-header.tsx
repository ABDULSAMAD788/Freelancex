import { CheckCircle2, MapPin, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Freelancer } from "@/lib/mock-data"

export function ProfileHeader({ freelancer }: { freelancer: Freelancer }) {
  return <Card><CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start"><div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-primary/20 text-2xl font-semibold text-primary">{freelancer.initials}</div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center gap-2"><h1 className="text-2xl font-semibold tracking-tight">{freelancer.name}</h1><CheckCircle2 className="size-4 text-emerald-300" /></div><p className="mt-1 text-muted-foreground">{freelancer.title}</p><div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground"><span className="inline-flex items-center gap-1.5"><MapPin className="size-4" />{freelancer.location}</span><span className="inline-flex items-center gap-1.5 text-amber-200"><Star className="size-4 fill-current" />{freelancer.rating} ({freelancer.reviews} reviews)</span></div></div><div className="flex gap-2"><Button variant="outline">Contact</Button><Button>Hire {freelancer.name.split(" ")[0]}</Button></div></CardContent></Card>
}