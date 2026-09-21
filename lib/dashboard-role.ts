export type DashboardRole = "client" | "freelancer";

export const DASHBOARD_ROLE_KEY = "freelancex-selected-role";
export const DASHBOARD_ONBOARDING_KEY = "freelancex-onboarding-complete";
export const DASHBOARD_PROFILE_KEY = "freelancex-profile";

export function getStoredDashboardRole(): DashboardRole | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const value = window.localStorage.getItem(DASHBOARD_ROLE_KEY);
    if (value === "client" || value === "freelancer") {
      return value;
    }
  } catch {
    return null;
  }

  return null;
}

export function setStoredDashboardRole(role: DashboardRole) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(DASHBOARD_ROLE_KEY, role);
}

export function getStoredOnboardingStatus() {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    return window.localStorage.getItem(DASHBOARD_ONBOARDING_KEY) === "true";
  } catch {
    return false;
  }
}

export function setStoredOnboardingStatus(value: boolean) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(DASHBOARD_ONBOARDING_KEY, String(value));
}

export function getStoredProfileDraft() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const value = window.localStorage.getItem(DASHBOARD_PROFILE_KEY);
    return value ? JSON.parse(value) : null;
  } catch {
    return null;
  }
}

export function setStoredProfileDraft(profile: Record<string, string>) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(DASHBOARD_PROFILE_KEY, JSON.stringify(profile));
}

export function getDashboardRouteForRole(role: DashboardRole) {
  return role === "client" ? "/dashboard/client" : "/dashboard/freelancer";
}
