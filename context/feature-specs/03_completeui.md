FREELANCEX — COMPLETE UI DESIGN IMPLEMENTATION PLAN

Current Progress:
- Next.js App Router + TypeScript configured.
- Tailwind CSS and shadcn/ui configured.
- Dashboard Navbar implemented.
- Dashboard Sidebar implemented.
- Foundational dashboard layout implemented.

Goal:
Complete the entire FreelanceX marketplace frontend before starting Clerk authentication and database integration.

FreelanceX is a freelancing marketplace:
- Clients publish jobs and hire freelancers.
- Freelancers browse jobs and submit proposals.
- Users manage profiles, applications, contracts, messages, and notifications.
- Do not create document editors or workspace-style project creation interfaces.
- Use mock data until authentication and database development begins.

Follow the existing architecture, UI tokens, code standards, and component conventions.
PHASE 1 — Global UI Foundation
### Global Application Structure

Review the existing dashboard navbar, sidebar, and layout components.

Requirements:
- Ensure consistent layout across public pages and dashboard pages.
- Separate public navigation from authenticated dashboard navigation.
- Create reusable page header, section header, empty state, loading state, and error state components.
- Create reusable responsive container and content wrapper components.
- Use shadcn/ui components wherever applicable.
- Use existing globals.css color tokens.
- Avoid hardcoded colors and duplicated layout styles.
- Ensure desktop, tablet, and mobile responsiveness.

Suggested structure:
- `components/layout/`
- `components/shared/`
- `components/navigation/`
- `components/dashboard/`

Check when done:
- All layouts compile.
- No duplicated navbar/sidebar logic.
- Existing dashboard UI remains functional.
- Run lint and build checks.
PHASE 2 — Public Landing Page
### Landing Page

Create or update `app/page.tsx`.

Requirements:
- Design a professional FreelanceX landing page.
- Include a responsive public navbar.
- Add FreelanceX branding and navigation links.
- Add a hero section explaining the marketplace.
- Include separate calls to action for:
  - Find Freelance Work
  - Hire Freelancers
- Add a job search interface.
- Add popular service/category cards.
- Add how FreelanceX works section.
- Add separate client and freelancer benefit sections.
- Add platform trust and safety section.
- Add footer with navigation and legal links.
- Use realistic mock content.
- Buttons should navigate to existing or planned routes.
- Do not connect authentication yet.

Check when done:
- Landing page is responsive.
- Navigation links work or point to planned routes.
- No broken images or placeholder layout defects.
- Run lint and build checks.
PHASE 3 — Public Marketplace Pages
### Browse Jobs Page

Create `app/jobs/page.tsx`.

Requirements:
- Display available freelance jobs using mock data.
- Add search input.
- Add category filter.
- Add budget filter.
- Add experience-level filter.
- Add project type filter.
- Add sorting options.
- Create reusable job cards.
- Display title, description preview, budget, skills, posted date, and proposal count.
- Add pagination or load-more UI.
- Include loading, empty, and error states.
- Make filters responsive on mobile.

Create:
- `components/jobs/job-card.tsx`
- `components/jobs/job-filters.tsx`
- `components/jobs/job-list.tsx`

Check when done:
- Search and filters update the mock UI.
- Job cards link to job details.
- Responsive layout works correctly.
### Job Details Page

Create `app/jobs/[jobId]/page.tsx`.

Requirements:
- Display complete job information using mock data.
- Include job title, description, budget, duration, skills, experience level, and posting date.
- Display client summary card.
- Add proposal count and job status.
- Add related jobs section.
- Add Save Job button.
- Add Submit Proposal button as a visual interaction only.
- Show an appropriate message when the job ID is invalid.
- Keep proposal submission functionality for the later backend phase.

Check when done:
- Dynamic job route works.
- Invalid job state is handled.
- Save and proposal buttons have clear UI behavior.
- No database calls are implemented.
### Categories and Services Page

Create `app/categories/page.tsx`.

Requirements:
- Display major freelancing categories.
- Include programming, design, writing, marketing, data, video, and business categories.
- Create reusable category cards.
- Add category search.
- Add links to filtered job listings.
- Include responsive grid layout.
- Use icons from Lucide React.
- Use mock category data.

Check when done:
- Categories are visually consistent.
- Category links navigate to the jobs page with a category query.
PHASE 4 — Public User Profiles
### Freelancer Profile Page

Create `app/freelancers/[freelancerId]/page.tsx`.

Requirements:
- Display freelancer profile using mock data.
- Include profile image placeholder, name, title, location, and rating.
- Display overview/about section.
- Display skills.
- Display portfolio projects.
- Display work history.
- Display reviews.
- Display hourly rate and availability.
- Add Contact button as a future functionality placeholder.
- Add Hire button as a future functionality placeholder.
- Include an appropriate empty state for missing portfolio or reviews.

Create reusable components:
- `components/profile/profile-header.tsx`
- `components/profile/skills-list.tsx`
- `components/profile/portfolio-grid.tsx`
- `components/profile/reviews-list.tsx`

Check when done:
- Profile page is responsive.
- Sections are reusable.
- No real messaging or hiring functionality is connected.
### Client Profile Page

Create `app/clients/[clientId]/page.tsx`.

Requirements:
- Display client profile using mock data.
- Include company/client name and profile summary.
- Display location, member-since information, and verification placeholder.
- Display hiring history summary.
- Display active and completed job statistics.
- Display jobs posted by the client.
- Add appropriate empty states.
- Use the existing profile components where possible.

Check when done:
- Client profile has a different presentation from freelancer profile.
- Shared components are reused without unnecessary duplication.
PHASE 5 — Authentication-Independent Dashboard UI
### Dashboard Overview

Create the dashboard overview page.

Suggested route:
`app/dashboard/page.tsx`

Requirements:
- Use the existing dashboard layout.
- Display a personalized mock greeting.
- Display summary cards that change based on mock user role.
- Include recent activity section.
- Include recommended jobs for freelancers.
- Include recent job activity for clients.
- Include quick-action cards.
- Include loading and empty states.
- Do not implement actual role detection yet.
- Use a temporary mock role configuration.

Check when done:
- Dashboard renders correctly inside the existing shell.
- Client and freelancer dashboard content can be separated cleanly.
### Freelancer Dashboard

Create the freelancer dashboard UI.

Suggested route:
`app/dashboard/freelancer/page.tsx`

Requirements:
- Add overview statistics.
- Add recommended jobs section.
- Add submitted proposals summary.
- Add active contracts summary.
- Add earnings placeholder.
- Add saved jobs section.
- Add profile completion indicator.
- Add navigation links to relevant pages.
- Use mock data only.

Suggested navigation:
- Overview
- Find Jobs
- Saved Jobs
- My Proposals
- Active Contracts
- Messages
- Notifications
- Profile
- Settings

Check when done:
- All sections are responsive.
- Navigation links are consistent with the sidebar.
- No financial or contract data is persisted.
### Client Dashboard

Create the client dashboard UI.

Suggested route:
`app/dashboard/client/page.tsx`

Requirements:
- Add overview statistics.
- Add posted jobs summary.
- Add active contracts summary.
- Add received proposals summary.
- Add recommended freelancers section.
- Add recent activity.
- Add a Post a Job call-to-action.
- Use mock data only.

Suggested navigation:
- Overview
- Post a Job
- My Jobs
- Proposals
- Active Contracts
- Messages
- Notifications
- Profile
- Settings

Check when done:
- Client navigation is separate from freelancer navigation.
- All buttons have correct future routes.
- No database or authentication logic is added.
PHASE 6 — Client Job Management UI
### Post a Job Page

Create `app/dashboard/client/jobs/new/page.tsx`.

Requirements:
- Build a complete responsive job posting form UI.
- Include:
  - Job title
  - Category
  - Description
  - Required skills
  - Budget type
  - Minimum and maximum budget
  - Project duration
  - Experience level
  - Attachments placeholder
- Use React Hook Form and Zod for client-side validation.
- Display validation messages.
- Add Save Draft and Preview buttons as mock interactions.
- Add Cancel button.
- Do not submit data to a backend.
- Do not create Prisma models yet.

Check when done:
- Required fields have validation.
- Form works on mobile.
- Validation errors are clearly displayed.
- No real job is persisted.
### My Jobs Page

Create `app/dashboard/client/jobs/page.tsx`.

Requirements:
- Display the client's mock job listings.
- Add tabs or filters for:
  - All
  - Active
  - Drafts
  - Closed
- Display job title, status, budget, proposals, and posted date.
- Add actions:
  - View
  - Edit
  - Close
- Use confirmation dialog UI for closing a job.
- Use mock state only.
- Include empty and loading states.

Check when done:
- Job status filters work locally.
- Actions display appropriate UI feedback.
- No backend mutation is implemented.
### Received Proposals Page

Create `app/dashboard/client/proposals/page.tsx`.

Requirements:
- Display received proposals grouped by job.
- Create proposal cards containing:
  - Freelancer summary
  - Cover letter preview
  - Proposed budget
  - Delivery estimate
  - Freelancer rating
- Add actions:
  - View Proposal
  - Shortlist
  - Reject
  - Start Hiring
- Use confirmation dialogs where appropriate.
- Keep hiring functionality as a future placeholder.
- Use mock state only.

Check when done:
- Proposal cards are reusable.
- Different proposal states are visually distinct.
- No real hiring action is performed.
PHASE 7 — Freelancer Work UI
### Saved Jobs Page

Create `app/dashboard/freelancer/saved-jobs/page.tsx`.

Requirements:
- Display saved jobs using mock data.
- Reuse the existing job card component.
- Add remove-from-saved interaction using local state.
- Include empty state with a Browse Jobs button.
- Add responsive layout.

Check when done:
- Saved jobs can be removed locally.
- Browse Jobs navigation works.
### My Proposals Page

Create `app/dashboard/freelancer/proposals/page.tsx`.

Requirements:
- Display submitted proposals using mock data.
- Add filters:
  - All
  - Pending
  - Shortlisted
  - Accepted
  - Rejected
- Display job title, submitted date, proposed budget, and status.
- Add View Job and View Proposal actions.
- Include empty state.
- Use reusable status badges.
- Do not implement actual proposal submission or database updates.

Check when done:
- Proposal filtering works locally.
- Status badges use consistent design tokens.
### Submit Proposal Page

Create `app/jobs/[jobId]/proposal/page.tsx`.

Requirements:
- Build a proposal submission form UI.
- Include:
  - Cover letter
  - Proposed price
  - Estimated delivery time
  - Relevant skills or experience
  - Optional questions section
- Use React Hook Form and Zod for client-side validation.
- Display the related job summary.
- Add Preview and Submit buttons.
- Submit should only show a temporary success state.
- Do not persist the proposal.
- Handle invalid job IDs.

Check when done:
- Form validation works.
- The page is responsive.
- No backend functionality is added.
PHASE 8 — Contracts and Work Management UI
### Active Contracts Page

Create reusable contract UI and pages for both roles.

Suggested routes:
- `app/dashboard/freelancer/contracts/page.tsx`
- `app/dashboard/client/contracts/page.tsx`

Requirements:
- Display mock active and completed contracts.
- Include:
  - Contract title
  - Other party
  - Budget
  - Start date
  - Status
  - Progress placeholder
- Add tabs for Active and Completed.
- Create reusable contract cards.
- Add View Contract action.
- Do not implement payments, legal agreements, or database persistence.

Check when done:
- Both dashboards reuse the same contract components.
- Contract status is visually clear.
### Contract Details Page

Create `app/dashboard/contracts/[contractId]/page.tsx`.

Requirements:
- Display contract overview.
- Include client and freelancer summaries.
- Display budget, timeline, status, and milestones placeholder.
- Add project communication placeholder.
- Add report issue and close contract buttons as future actions.
- Handle invalid contract IDs.
- Use mock data only.

Check when done:
- Dynamic route works.
- No payment or contract mutation functionality is implemented.
PHASE 9 — Messaging UI
### Messaging Interface

Create `app/dashboard/messages/page.tsx`.

Requirements:
- Design a responsive messaging interface.
- Include conversation list.
- Include search conversations input.
- Include active conversation panel.
- Display message bubbles using mock data.
- Add message input and send button.
- Sending a message should update local UI state only.
- Include empty conversation state.
- Add mobile-friendly conversation navigation.
- Do not connect WebSockets or a database yet.

Create:
- `components/messages/conversation-list.tsx`
- `components/messages/chat-window.tsx`
- `components/messages/message-bubble.tsx`
- `components/messages/message-input.tsx`

Check when done:
- Messages display correctly.
- Local message sending works.
- Desktop and mobile layouts are usable.
PHASE 10 — Notifications and Activity
### Notifications Page

Create `app/dashboard/notifications/page.tsx`.

Requirements:
- Display mock notifications.
- Include notification types:
  - Proposal update
  - Job update
  - Message
  - Contract update
  - Platform notification
- Add unread and read visual states.
- Add Mark as Read interaction using local state.
- Add Mark All as Read button.
- Include empty state.
- Add notification filtering if appropriate.

Check when done:
- Read/unread state works locally.
- Notification components are reusable.
### Activity Page

Create `app/dashboard/activity/page.tsx`.

Requirements:
- Display a chronological mock activity timeline.
- Include job, proposal, contract, and message events.
- Add activity icons and timestamps.
- Create reusable activity item component.
- Include empty state.
- Ensure the layout is responsive.

Check when done:
- Timeline has consistent spacing.
- Different activity types are visually distinguishable.
PHASE 11 — Profile and Settings UI
### Profile Management Page

Create `app/dashboard/profile/page.tsx`.

Requirements:
- Build a profile management interface.
- Include:
  - Profile image placeholder
  - Name
  - Professional title
  - About section
  - Skills
  - Location
  - Hourly rate
  - Availability
  - Portfolio items
- Use editable form components.
- Use React Hook Form and Zod for client-side validation.
- Add Save Changes button with local success feedback.
- Use mock initial values.
- Do not persist profile data.

Check when done:
- Form validation works.
- Editable sections are responsive.
- No authentication or database code is included.
### Settings Page

Create `app/dashboard/settings/page.tsx`.

Requirements:
- Create a settings layout with sections:
  - Account
  - Notifications
  - Privacy
  - Appearance
  - Security placeholder
- Use shadcn/ui tabs or a responsive settings navigation.
- Add switches and select controls where appropriate.
- Save changes locally.
- Do not implement real account security or authentication settings yet.
- Use existing design tokens.

Check when done:
- Settings navigation works.
- Controls are accessible and responsive.
PHASE 12 — Supporting Pages
### Supporting Pages

Create the following pages using consistent FreelanceX styling:

- `app/about/page.tsx`
- `app/how-it-works/page.tsx`
- `app/help/page.tsx`
- `app/contact/page.tsx`
- `app/terms/page.tsx`
- `app/privacy/page.tsx`
- `app/not-found.tsx`

Requirements:
- Use reusable public navbar and footer.
- Provide meaningful page content and proper headings.
- Add responsive layouts.
- Use mock contact/help form UI where necessary.
- Forms should not send real data.
- Add navigation back to the landing page.
- Create a consistent 404 page for invalid routes.

Check when done:
- All pages render without errors.
- Links do not lead to undefined routes.
- Accessibility and responsive behavior are checked.
PHASE 13 — Shared Components and UI Consistency
### Shared Component Review

Review the complete frontend and extract repeated UI patterns.

Requirements:
- Reuse shadcn/ui components.
- Create shared components for:
  - Buttons
  - Page headers
  - Search bars
  - Filter controls
  - Status badges
  - Cards
  - Empty states
  - Loading skeletons
  - Confirmation dialogs
  - Form fields
  - Pagination
- Avoid unnecessary component duplication.
- Keep business-specific components inside their relevant folders.
- Use TypeScript interfaces for mock data.
- Keep components small and single-purpose.
- Do not use `any`.
- Use existing CSS variables and design tokens.
- Ensure keyboard accessibility for interactive elements.

Check when done:
- Repeated UI patterns are consolidated.
- Components have clear responsibilities.
- Existing pages remain functional.
PHASE 14 — Responsive and Accessibility Review
### Responsive Design Audit

Review every completed page.

Requirements:
- Test desktop, tablet, and mobile layouts.
- Check navbar and sidebar behavior.
- Check forms and dialogs on small screens.
- Prevent horizontal overflow.
- Ensure cards and tables adapt to mobile.
- Ensure text remains readable.
- Add appropriate focus states.
- Add labels to form inputs.
- Add accessible names to icon-only buttons.
- Verify sufficient contrast using existing design tokens.
- Ensure keyboard navigation works.

Check when done:
- No major layout overflow.
- Navigation works on mobile.
- Interactive elements have visible focus states.
- All important form controls have labels.
PHASE 15 — Mock Data and Frontend State
### Mock Data Architecture

Create a temporary mock data structure for frontend development.

Suggested folders:
- `lib/mock-data/`
- `types/`

Requirements:
- Define TypeScript types for:
  - User
  - Freelancer
  - Client
  - Job
  - Proposal
  - Contract
  - Message
  - Notification
  - Review
  - Portfolio item
- Create realistic mock records.
- Use mock data consistently across pages.
- Do not duplicate mock objects inside multiple components.
- Separate UI state from mock data.
- Clearly mark mock data as temporary.
- Do not create Prisma models yet.

Check when done:
- Pages use shared types.
- Mock data is consistent across related pages.
- No API or database calls are required.
PHASE 16 — Routing and Final UI Verification
### Complete Frontend Routing Review

Review all FreelanceX routes.

Requirements:
- Verify public routes.
- Verify job browsing and job detail routes.
- Verify freelancer and client profile routes.
- Verify dashboard routes.
- Verify proposal routes.
- Verify contract routes.
- Verify messaging and notification routes.
- Verify settings and supporting pages.
- Remove broken links.
- Add appropriate loading and not-found states.
- Ensure route naming is consistent.
- Do not implement authentication middleware yet.
- Do not implement database operations yet.

Check when done:
- Every implemented navigation link works.
- Dynamic routes handle invalid IDs.
- No page contains unfinished editor/document functionality.
- Run `npm run lint`.
- Run `npm run build`.
- Resolve all TypeScript and build errors.
Final completion instruction
### Final UI Completion Audit

The complete FreelanceX frontend should now be designed before beginning authentication and database development.

Verify that the following are complete:
- Public landing page
- Public navbar and footer
- Job browsing
- Job details
- Categories
- Freelancer profiles
- Client profiles
- Client dashboard
- Freelancer dashboard
- Job posting form
- Client job management
- Proposal browsing
- Proposal submission form
- Saved jobs
- Contracts
- Messaging interface
- Notifications
- Activity timeline
- Profile management
- Settings
- Help, contact, privacy, and terms pages
- Loading, empty, error, and not-found states
- Responsive layouts
- Shared components
- Mock data and TypeScript types
- Navigation and routing

Important:
- Do not start Clerk authentication.
- Do not create Prisma schema.
- Do not connect PostgreSQL.
- Do not create API routes for persistent data.
- Do not implement payment processing.
- Do not implement real-time messaging.
- Do not add document editor or workspace functionality.

Final checks:
- `npm run lint`
- `npm run build`
- Verify all pages manually in the browser.
- Update `progress-tracker.md` with completed UI work and remaining backend tasks.