"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { getStoredDashboardRole, getStoredOnboardingStatus, getDashboardRouteForRole } from "@/lib/dashboard-role"

export default function DashboardPage() {
  const router = useRouter()

  useEffect(() => {
    const role = getStoredDashboardRole()

    if (!role) {
      router.replace("/dashboard/role-selection")
      return
    }

    if (!getStoredOnboardingStatus()) {
      router.replace("/dashboard/onboarding")
      return
    }

    router.replace(getDashboardRouteForRole(role))
  }, [router])

  return null
}
