"use client";

import { useEffect, useState, type ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { BriefcaseBusiness, Camera, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  getDashboardRouteForRole,
  getStoredDashboardRole,
  setStoredOnboardingStatus,
  setStoredProfileDraft,
  type DashboardRole,
} from "@/lib/dashboard-role";

type ClientState = {
  fullName: string;
  photoUrl: string;
  companyName: string;
  description: string;
};

type FreelancerState = {
  fullName: string;
  photoUrl: string;
  professionalTitle: string;
  skills: string;
  bio: string;
};

const emptyClientState: ClientState = {
  fullName: "",
  photoUrl: "",
  companyName: "",
  description: "",
};

const emptyFreelancerState: FreelancerState = {
  fullName: "",
  photoUrl: "",
  professionalTitle: "",
  skills: "",
  bio: "",
};

export function ProfileOnboardingForm() {
  const router = useRouter();
  const [role, setRole] = useState<DashboardRole | null>(null);
  const [form, setForm] = useState<ClientState | FreelancerState>(emptyClientState);

  useEffect(() => {
    const savedRole = getStoredDashboardRole();

    if (!savedRole) {
      router.replace("/dashboard/role-selection");
      return;
    }

    setRole(savedRole);
    setForm(savedRole === "client" ? emptyClientState : emptyFreelancerState);
  }, [router]);

  const handleFieldChange =
    (field: string) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((current) => ({
        ...current,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!role) {
      return;
    }

    const profile = {
      ...(form as Record<string, string>),
      role,
    };

    setStoredProfileDraft(profile);
    setStoredOnboardingStatus(true);
    router.replace(getDashboardRouteForRole(role));
  };

  if (!role) {
    return null;
  }

  const isClient = role === "client";

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {isClient ? <BriefcaseBusiness className="size-3.5" /> : <UserRound className="size-3.5" />}
          {isClient ? "Client onboarding" : "Freelancer onboarding"}
        </p>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          Tell people a little about you
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This profile is kept in frontend state for now and will connect to the database later.
        </p>
      </div>

      <Card>
        <CardContent className="p-6 sm:p-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex items-center gap-4">
              <div className="flex size-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Camera className="size-6" />
              </div>
              <div>
                <p className="text-sm font-medium">Profile photo</p>
                <p className="text-xs text-muted-foreground">Optional for now</p>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2 sm:col-span-2">
                <label className="text-sm font-medium" htmlFor="full-name">
                  Full name
                </label>
                <Input
                  id="full-name"
                  onChange={handleFieldChange("fullName")}
                  placeholder="Your full name"
                  value={(form as Record<string, string>).fullName ?? ""}
                />
              </div>

              {isClient ? (
                <>
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium" htmlFor="company-name">
                      Company or individual name
                    </label>
                    <Input
                      id="company-name"
                      onChange={handleFieldChange("companyName")}
                      placeholder="Brand or business name"
                      value={(form as ClientState).companyName ?? ""}
                    />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium" htmlFor="company-photo">
                      Profile photo URL
                    </label>
                    <Input
                      id="company-photo"
                      onChange={handleFieldChange("photoUrl")}
                      placeholder="https://example.com/profile.jpg"
                      type="url"
                      value={(form as ClientState).photoUrl ?? ""}
                    />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium" htmlFor="description">
                      Short description
                    </label>
                    <Textarea
                      id="description"
                      minLength={20}
                      onChange={handleFieldChange("description")}
                      placeholder="Tell people what you need from the marketplace."
                      value={(form as ClientState).description ?? ""}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium" htmlFor="title">
                      Professional title
                    </label>
                    <Input
                      id="title"
                      onChange={handleFieldChange("professionalTitle")}
                      placeholder="Product designer"
                      value={(form as FreelancerState).professionalTitle ?? ""}
                    />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium" htmlFor="photo-url">
                      Profile photo URL
                    </label>
                    <Input
                      id="photo-url"
                      onChange={handleFieldChange("photoUrl")}
                      placeholder="https://example.com/profile.jpg"
                      type="url"
                      value={(form as FreelancerState).photoUrl ?? ""}
                    />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium" htmlFor="skills">
                      Skills
                    </label>
                    <Input
                      id="skills"
                      onChange={handleFieldChange("skills")}
                      placeholder="Product design, UX writing, Figma"
                      value={(form as FreelancerState).skills ?? ""}
                    />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium" htmlFor="bio">
                      Short bio
                    </label>
                    <Textarea
                      id="bio"
                      minLength={20}
                      onChange={handleFieldChange("bio")}
                      placeholder="Share a concise summary of your expertise and approach."
                      value={(form as FreelancerState).bio ?? ""}
                    />
                  </div>
                </>
              )}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <Button
                onClick={() => router.push("/dashboard/role-selection")}
                type="button"
                variant="outline"
              >
                Back
              </Button>
              <Button type="submit">Continue to dashboard</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
