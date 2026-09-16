"use client"

import Link from "next/link"
import {
  BriefcaseBusiness,
  Compass,
  FolderKanban,
  LayoutDashboard,
  MessageSquare,
  Settings,
  Sparkles,
  UserRound,
  X,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type DashboardRole = "client" | "freelancer"

type DashboardSidebarProps = {
  isOpen: boolean
  onClose: () => void
  role?: DashboardRole
}

const sharedNavigation = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  { label: "Profile", href: "/dashboard/profile", icon: UserRound },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
]

const roleNavigation: Record<DashboardRole, typeof sharedNavigation> = {
  client: [
    { label: "Discover freelancers", href: "/freelancers", icon: Compass },
    { label: "My jobs", href: "/dashboard/client/jobs", icon: FolderKanban },
  ],
  freelancer: [
    { label: "Find jobs", href: "/jobs", icon: Compass },
    { label: "Saved jobs", href: "/dashboard/freelancer/saved-jobs", icon: BriefcaseBusiness },
  ],
}

export function DashboardSidebar({
  isOpen,
  onClose,
  role = "client",
}: DashboardSidebarProps) {
  return (
    <>
      <button
        aria-label="Close dashboard navigation"
        className={cn(
          "fixed inset-0 top-16 z-40 bg-black/50 transition-opacity md:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
        type="button"
      />
      <aside
        aria-label="Dashboard navigation"
        className={cn(
          "fixed inset-y-0 left-0 top-16 z-50 w-[min(19rem,calc(100vw-2rem))] border-r border-border bg-sidebar text-sidebar-foreground shadow-2xl transition-transform duration-200 ease-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-sidebar-border px-5 py-4">
            <div>
              <p className="text-sm font-semibold tracking-tight">freelancex</p>
              <p className="mt-1 text-xs text-muted-foreground">{role} dashboard</p>
            </div>
            <Button
              aria-label="Close dashboard navigation"
              onClick={onClose}
              size="icon-sm"
              variant="ghost"
            >
              <X />
            </Button>
          </div>

          <nav className="flex-1 space-y-6 overflow-y-auto p-4">
            <div>
              <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Workspace
              </p>
              <div className="space-y-1">
                {roleNavigation[role].map((item) => (
                  <DashboardNavigationLink key={item.href} item={item} onNavigate={onClose} />
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Account
              </p>
              <div className="space-y-1">
                {sharedNavigation.map((item) => (
                  <DashboardNavigationLink key={item.href} item={item} onNavigate={onClose} />
                ))}
              </div>
            </div>
          </nav>

          <div className="border-t border-sidebar-border p-4">
            <div className="flex items-center gap-3 rounded-lg bg-sidebar-accent px-3 py-3">
              <Sparkles className="size-4 text-primary" />
              <p className="text-xs text-muted-foreground">Your marketplace workspace</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

type DashboardNavigationItem =
  | (typeof sharedNavigation)[number]
  | (typeof roleNavigation.client)[number]

function DashboardNavigationLink({
  item,
  onNavigate,
}: {
  item: DashboardNavigationItem
  onNavigate: () => void
}) {
  const Icon = item.icon

  return (
    <Link
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
      href={item.href}
      onClick={onNavigate}
    >
      <Icon className="size-4" />
      <span>{item.label}</span>
    </Link>
  )
}