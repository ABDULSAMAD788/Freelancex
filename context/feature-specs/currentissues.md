FreelanceX Dashboard and Onboarding Refinement

Resolve the confusion between client and freelancer experiences, and replace mock profile data with a first-time onboarding flow.

1. Role Selection and Dashboard Routing

After the first successful sign-up, ask the user to select a role: Client or Freelancer.

Do not automatically assign or display a Client Dashboard.

Store the selected role temporarily in frontend state until database integration is implemented.

Redirect users based on their selected role:

Client → Client Dashboard

Freelancer → Freelancer Dashboard

Ensure both dashboards have clear navigation to their respective features.

Clients can access Discover Freelancers to browse freelancer profiles.

Freelancers can access job discovery and proposal-related pages.

Do not restrict Discover Freelancers to the wrong role.

Update dashboard titles, sidebar links, and navigation labels to reflect the selected role consistently.

2. First-Time Profile Onboarding

After the first sign-up and role selection, display a profile onboarding form.

Do not populate the form or dashboard with fabricated or mock data.

For Client:

Full name

Profile photo (optional)

Company or individual name

Short description

For Freelancer:

Full name

Profile photo (optional)

Professional title

Skills

Short bio

Keep the form ready for future Prisma and PostgreSQL integration.

Until database implementation is complete, store data temporarily in frontend state only.

Returning users should not be forced through onboarding repeatedly during the same session.

Display clean empty states when real data is unavailable.

Check When Done

First-time users select Client or Freelancer after sign-up.

Dashboard content and navigation match the selected role.

Clients can open Discover Freelancers.

No mock data appears in the dashboard or profile.

Profile onboarding collects explicit user information.

Existing Clerk authentication remains functional.

No existing UI components or routes are unnecessarily removed.

npm run dev works without errors.