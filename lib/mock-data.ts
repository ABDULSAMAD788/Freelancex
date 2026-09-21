import type { LucideIcon } from "lucide-react"
import { BriefcaseBusiness, Code2, Database, Megaphone, Palette, PenLine, Video } from "lucide-react"

export type UserRole = "client" | "freelancer"
export type JobStatus = "Open" | "In review" | "Closed"
export type ProposalStatus = "Pending" | "Shortlisted" | "Accepted" | "Rejected"
export type ContractStatus = "Active" | "Completed"

export type Job = {
  id: string; title: string; description: string; budget: string; budgetValue: number; category: string
  projectType: "Fixed price" | "Hourly"; experience: "Entry" | "Intermediate" | "Expert"; duration: string
  skills: string[]; posted: string; proposals: number; status: JobStatus; clientId: string
}
export type Freelancer = {
  id: string; name: string; initials: string; title: string; location: string; rating: number; reviews: number
  hourlyRate: string; availability: string; about: string; skills: string[]
  portfolio: { title: string; category: string; color: string }[]; history: { title: string; client: string; year: string }[]
}
export type Client = {
  id: string; name: string; initials: string; location: string; memberSince: string; verified: boolean; about: string
  jobsPosted: number; activeJobs: number; totalSpent: string; jobs: Job[]
}
export type Proposal = { id: string; jobId: string; freelancerId: string; coverLetter: string; budget: string; delivery: string; status: ProposalStatus; submitted: string }
export type Contract = { id: string; title: string; otherParty: string; role: UserRole; budget: string; startDate: string; status: ContractStatus; progress: number }

export const categories: { name: string; description: string; icon: LucideIcon; jobs: number }[] = [
  { name: "Programming & Tech", description: "Build products that move work forward.", icon: Code2, jobs: 128 },
  { name: "Design & Creative", description: "Give your next idea a clear visual voice.", icon: Palette, jobs: 86 },
  { name: "Writing & Content", description: "Find the words your audience remembers.", icon: PenLine, jobs: 74 },
  { name: "Marketing", description: "Turn attention into lasting momentum.", icon: Megaphone, jobs: 61 },
  { name: "Data & Analytics", description: "Make confident decisions from your data.", icon: Database, jobs: 43 },
  { name: "Video & Animation", description: "Bring stories to life with motion.", icon: Video, jobs: 38 },
  { name: "Business", description: "Get practical expertise when it matters.", icon: BriefcaseBusiness, jobs: 52 },
]

export const jobs: Job[] = [
  { id: "brand-system", title: "Build a bold brand system for a climate startup", description: "We are looking for a thoughtful designer to shape a flexible identity system for a fast-growing climate technology team.", budget: "$2,400 - $3,200", budgetValue: 2800, category: "Design & Creative", projectType: "Fixed price", experience: "Expert", duration: "3 to 5 weeks", skills: ["Brand strategy", "Figma", "Visual identity"], posted: "2 hours ago", proposals: 8, status: "Open", clientId: "northstar" },
  { id: "nextjs-marketplace", title: "Senior Next.js engineer for marketplace MVP", description: "Help us ship the next iteration of our marketplace with a focus on fast, accessible, maintainable frontend architecture.", budget: "$45 - $70 / hr", budgetValue: 60, category: "Programming & Tech", projectType: "Hourly", experience: "Expert", duration: "1 to 3 months", skills: ["Next.js", "TypeScript", "PostgreSQL"], posted: "5 hours ago", proposals: 14, status: "Open", clientId: "northstar" },
  { id: "launch-copy", title: "Write launch copy for a new productivity app", description: "We need a sharp writer to develop the landing page, onboarding emails, and launch announcement for our new product.", budget: "$800 - $1,200", budgetValue: 1000, category: "Writing & Content", projectType: "Fixed price", experience: "Intermediate", duration: "1 to 2 weeks", skills: ["Copywriting", "SaaS", "Email marketing"], posted: "Yesterday", proposals: 21, status: "Open", clientId: "brightpath" },
  { id: "analytics-audit", title: "Audit our product analytics and reporting", description: "Review our event taxonomy and dashboards, then give the team a practical measurement plan.", budget: "$1,500 - $2,000", budgetValue: 1750, category: "Data & Analytics", projectType: "Fixed price", experience: "Intermediate", duration: "2 to 4 weeks", skills: ["SQL", "Mixpanel", "Data strategy"], posted: "2 days ago", proposals: 6, status: "In review", clientId: "brightpath" },
  { id: "social-campaign", title: "Plan a social campaign for an independent studio", description: "Create a focused four-week content plan with creative direction and a lightweight reporting framework.", budget: "$900 - $1,400", budgetValue: 1150, category: "Marketing", projectType: "Fixed price", experience: "Entry", duration: "2 to 3 weeks", skills: ["Social media", "Content strategy", "Research"], posted: "3 days ago", proposals: 11, status: "Open", clientId: "northstar" },
]

export const freelancers: Freelancer[] = [
  { id: "maya-chen", name: "Maya Chen", initials: "MC", title: "Product designer & brand strategist", location: "Toronto, Canada", rating: 4.9, reviews: 34, hourlyRate: "$85/hr", availability: "Available this week", about: "I help ambitious teams turn complex products into clear, useful experiences. My work sits between strategy, systems, and the details users feel.", skills: ["Product design", "Design systems", "Brand strategy", "Figma", "Prototyping"], portfolio: [{ title: "Atlas climate platform", category: "Product design", color: "bg-primary/70" }, { title: "Northline identity", category: "Brand system", color: "bg-emerald-400/70" }, { title: "Field notes app", category: "Mobile experience", color: "bg-amber-300/70" }], history: [{ title: "Senior product designer", client: "Northstar Labs", year: "2023 - 2025" }, { title: "Brand consultant", client: "Independent", year: "2021 - 2023" }] },
  { id: "ravi-patel", name: "Ravi Patel", initials: "RP", title: "Full-stack TypeScript engineer", location: "London, UK", rating: 5.0, reviews: 18, hourlyRate: "$95/hr", availability: "Available in 2 weeks", about: "I build reliable web products for teams that care about speed and quality. I enjoy untangling complex workflows and leaving codebases calmer than I found them.", skills: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "AWS"], portfolio: [{ title: "Marketlane", category: "Marketplace", color: "bg-cyan-400/70" }, { title: "Ops console", category: "SaaS platform", color: "bg-violet-400/70" }], history: [{ title: "Lead engineer", client: "Brightpath", year: "2024 - 2025" }, { title: "Senior engineer", client: "Various teams", year: "2020 - 2024" }] },
]

export const clients: Client[] = [
  { id: "northstar", name: "Northstar Labs", initials: "NL", location: "New York, United States", memberSince: "March 2022", verified: true, about: "We make software that helps climate teams move from good intentions to measurable action.", jobsPosted: 18, activeJobs: 3, totalSpent: "$48,600", jobs },
  { id: "brightpath", name: "Brightpath Studio", initials: "BS", location: "Austin, United States", memberSince: "September 2023", verified: true, about: "A small product studio partnering with founders on ambitious, human-centered software.", jobsPosted: 9, activeJobs: 2, totalSpent: "$21,250", jobs: jobs.filter((job) => job.clientId === "brightpath") },
]
export const proposals: Proposal[] = [
  { id: "proposal-1", jobId: "brand-system", freelancerId: "maya-chen", coverLetter: "Your mission has a strong point of view already. I can turn that clarity into a system your team can use every day.", budget: "$2,800", delivery: "4 weeks", status: "Shortlisted", submitted: "Today" },
  { id: "proposal-2", jobId: "nextjs-marketplace", freelancerId: "ravi-patel", coverLetter: "I have shipped marketplace foundations with the same care for performance, accessibility, and maintainability.", budget: "$62/hr", delivery: "Available in 2 weeks", status: "Pending", submitted: "Yesterday" },
]
export const contracts: Contract[] = [
  { id: "contract-atlas", title: "Atlas product redesign", otherParty: "Northstar Labs", role: "freelancer", budget: "$8,400", startDate: "Jan 12, 2026", status: "Active", progress: 68 },
  { id: "contract-marketlane", title: "Marketlane MVP", otherParty: "Ravi Patel", role: "client", budget: "$12,000", startDate: "Dec 4, 2025", status: "Active", progress: 42 },
  { id: "contract-field-notes", title: "Field Notes brand launch", otherParty: "Maya Chen", role: "client", budget: "$3,600", startDate: "Oct 8, 2025", status: "Completed", progress: 100 },
]
export const getJob = (id: string) => jobs.find((job) => job.id === id)
export const getFreelancer = (id: string) => freelancers.find((freelancer) => freelancer.id === id)
export const getClient = (id: string) => clients.find((client) => client.id === id)