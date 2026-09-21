# FreelanceX Remaining Work Checklist

This document is the handoff checklist after the mock marketplace UI implementation. Work in order. Keep the frontend mock-only until the product decisions and backend foundation are approved.

## Working Rules

- Do not commit or push until the selected work unit is complete and verified.
- Keep Clerk, Prisma, PostgreSQL, payments, and persistent API work out of the remaining UI cleanup.
- Preserve the existing dark design tokens and shared components.
- Use mock data only for UI-only tasks.
- Run TypeScript, ESLint, and the production build after each unit.
- Record completed work and failed checks in `context/progress-tracker.md`.
- Do not claim a checklist item is complete without testing its success, empty, invalid, and responsive states where applicable.

## UI Audit Before Backend

### 1. Job Listing Completion

- [ ] Add pagination or a documented load-more interaction to `app/jobs/page.tsx` and `components/jobs/job-list.tsx`.
- [ ] Preserve active search and filter state while changing pages.
- [ ] Verify empty results after every filter combination.
- [ ] Add a visible loading state during the interaction if the list becomes asynchronous.

Acceptance criteria:
- The user can reach jobs beyond the first visible batch.
- Search and filters still produce deterministic mock results.
- Empty and loading states remain accessible on mobile.

### 2. Client Proposal Actions

- [ ] Add local Shortlist, Reject, and Start Hiring actions to `components/dashboard/proposal-workspace.tsx`.
- [ ] Add confirmation UI for Reject and Start Hiring.
- [ ] Show local status changes with `StatusBadge`.
- [ ] Keep Start Hiring clearly labeled as a future placeholder; do not create an order or contract.

Acceptance criteria:
- Every proposal action gives immediate local feedback.
- Destructive or consequential actions require confirmation.
- Refreshing the page does not imply persistence.

### 3. Notifications Coverage

- [ ] Extend the mock notification records to include proposal update, job update, message, contract update, and platform notification types.
- [ ] Extract a reusable notification item component.
- [ ] Add local type filtering and an empty filtered state.
- [ ] Keep read and unread styles distinguishable without relying on color alone.

Acceptance criteria:
- Each required notification type is represented.
- Mark as Read and Mark All as Read work locally.
- Filtering and empty states are keyboard accessible.

### 4. Activity Component

- [ ] Extract the repeated activity row from `app/dashboard/activity/page.tsx` into a reusable activity item component.
- [ ] Define typed activity records for job, proposal, contract, and message events.
- [ ] Add an empty activity state.

Acceptance criteria:
- Activity records are typed and rendered through one shared component.
- Event type, icon, text, and timestamp are visually distinguishable.
- The empty state renders without layout collapse.

### 5. Profile and Settings Completion

- [ ] Add editable portfolio item fields to the profile form.
- [ ] Add the Security placeholder section to `app/dashboard/settings/page.tsx`.
- [ ] Use the shared Tabs primitive or a clearly responsive settings navigation for all settings sections.
- [ ] Verify validation messages for profile fields on mobile.

Acceptance criteria:
- Profile includes image placeholder, name, title, about, skills, location, rate, availability, and portfolio items.
- Settings includes Account, Notifications, Privacy, Appearance, and Security.
- Save feedback remains local and cannot imply persistence.

### 6. Messaging Component Integration

- [ ] Replace the inline conversation markup in `components/dashboard/proposal-workspace.tsx` with the named components in `components/messages/`.
- [ ] Add an explicit empty conversation state.
- [ ] Add mobile conversation selection behavior.
- [ ] Keep sending local-only.

Acceptance criteria:
- Conversation list, chat window, message bubble, and message input are all used.
- The layout is usable at mobile and desktop widths.
- No WebSocket or database code is introduced.

### 7. Navigation and Accessibility Sweep

- [ ] Test every public and dashboard navigation destination.
- [ ] Replace any invalid or placeholder links with an implemented route or an explicitly disabled future action.
- [ ] Verify icon-only buttons have accessible names.
- [ ] Verify every form input has a label and every status has text in addition to color.
- [ ] Check keyboard focus, dialog dismissal, and mobile sidebar behavior.

Acceptance criteria:
- No planned navigation link returns an unintended 404.
- No major horizontal overflow exists at mobile, tablet, or desktop widths.
- Focus states are visible and interactive controls are keyboard reachable.

## Backend Foundation After UI Audit

Do not begin these units until the product open questions in `context/progress-tracker.md` are resolved where they affect the data model or lifecycle.

### 8. Environment Foundation

- [ ] Create `.env.example` with documented Clerk and PostgreSQL variable names.
- [ ] Add environment parsing and validation with Zod.
- [ ] Keep real secrets out of source control.
- [ ] Document local setup and required services.

### 9. Clerk Authentication

- [ ] Install and configure Clerk.
- [ ] Add the provider at the correct App Router boundary.
- [ ] Implement sign-in and sign-up routes.
- [ ] Protect dashboard routes on the server.
- [ ] Test unauthenticated redirect and authenticated access.

### 10. User Synchronization and Roles

- [ ] Define the application user record linked to the Clerk user ID.
- [ ] Prevent duplicate synchronization.
- [ ] Define client/freelancer role policy before storing role state.
- [ ] Add onboarding and server-side role checks.
- [ ] Test wrong-role and unauthorized access.

### 11. Profiles and Projects

- [ ] Define Prisma models and migrations for users, profiles, skills, categories, and projects.
- [ ] Add ownership policies and server-side validation.
- [ ] Replace mock profile and job reads with repository/service calls.
- [ ] Implement project lifecycle statuses only after status transitions are decided.
- [ ] Test invalid input, missing records, ownership, and duplicate actions.

### 12. Proposals and Contracts

- [ ] Define proposal statuses and valid transitions.
- [ ] Enforce duplicate active proposal prevention at the service and database layers.
- [ ] Define whether hiring creates an order, contract, or combined entity.
- [ ] Add participant authorization for contracts.
- [ ] Replace local proposal and contract state only after server operations are tested.

### 13. Messaging, Reviews, and Notifications

- [ ] Decide whether conversations belong to projects, contracts, or both.
- [ ] Add private participant authorization before exposing messages.
- [ ] Define review eligibility, editing, and duplicate rules.
- [ ] Persist notification types and read state.
- [ ] Test unauthorized access and invalid lifecycle states.

### 14. Administration and Operations

- [ ] Define administrator authorization.
- [ ] Add moderation views for users, projects, profiles, reviews, and reports.
- [ ] Add report handling and operational visibility.
- [ ] Record audit events where required.

## Verification Checklist

Run from the repository root:

```text
npm run lint
npm run build
npx tsc --noEmit
```

For each completed unit, also verify:

- [ ] Valid interaction path.
- [ ] Invalid input path.
- [ ] Empty state.
- [ ] Loading state where applicable.
- [ ] Unauthenticated path once Clerk exists.
- [ ] Unauthorized or wrong-owner path once persistence exists.
- [ ] Mobile layout.
- [ ] Keyboard navigation.

## Definition Of Done

The UI audit is complete when all items in sections 1 through 7 are checked, the final route smoke test passes, and `context/progress-tracker.md` records the exact commands and results.

The project backend is complete only when the relevant authentication, validation, authorization, persistence, and invalid-state tests pass. A polished mock screen is not a substitute for those server guarantees.
