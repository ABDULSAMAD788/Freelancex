"use client"

import { UserButton } from "@clerk/nextjs"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

import { Button } from "@/components/ui/button"

type DashboardNavbarProps = {
  isSidebarOpen: boolean
  onToggleSidebar: () => void
}

export function DashboardNavbar({
  isSidebarOpen,
  onToggleSidebar,
}: DashboardNavbarProps) {
  const ToggleIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-16 border-b border-border bg-background/95 backdrop-blur">
      <div className="relative flex h-full items-center justify-between px-4 sm:px-6">
        <Button
          aria-label={isSidebarOpen ? "Close dashboard navigation" : "Open dashboard navigation"}
          onClick={onToggleSidebar}
          size="icon"
          variant="ghost"
        >
          <ToggleIcon />
        </Button>

        <div className="absolute left-1/2 -translate-x-1/2 text-sm font-semibold tracking-tight text-foreground sm:text-base">
          freelancex
        </div>

        <div className="flex items-center justify-end gap-3">
          <UserButton />
        </div>
      </div>
    </header>
  )
}