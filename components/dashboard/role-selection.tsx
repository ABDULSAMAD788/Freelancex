"use client";

import { useRouter } from "next/navigation";
import { BriefcaseBusiness, Sparkles, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  getStoredDashboardRole,
  setStoredDashboardRole,
  setStoredOnboardingStatus,
  type DashboardRole,
} from "@/lib/dashboard-role";

const options: Array<{
  role: DashboardRole;
  title: string;
  description: string;
  icon: typeof BriefcaseBusiness;
  highlight: string;
}> = [
  {
    role: "client",
    title: "Client",
    description: "Post work, manage hiring, and discover the right freelance talent.",
    icon: BriefcaseBusiness,
    highlight: "Hire and manage work",
  },
  {
    role: "freelancer",
    title: "Freelancer",
    description: "Find jobs, submit proposals, and manage your active client work.",
    icon: Users,
    highlight: "Find work and proposals",
  },
];

export function RoleSelection() {
  const router = useRouter();

  const handleSelect = (role: DashboardRole) => {
    const savedRole = getStoredDashboardRole();
    setStoredDashboardRole(role);
    setStoredOnboardingStatus(false);

    if (savedRole !== role) {
      window.localStorage.removeItem("freelancex-profile");
    }

    router.push("/dashboard/onboarding");
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          <Sparkles className="size-3.5" />
          Choose your path
        </p>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          Welcome to FreelanceX
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Select the role that best matches how you want to use the platform.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {options.map(({ role, title, description, icon: Icon, highlight }) => (
          <Card key={role} className="border-border bg-card">
            <CardContent className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <Icon className="size-5" />
                </span>
                <span className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {highlight}
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-semibold tracking-tight">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>

              <div className="mt-6 flex-1" />

              <Button className="w-full" onClick={() => handleSelect(role)} size="lg" type="button">
                Continue as {title}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
