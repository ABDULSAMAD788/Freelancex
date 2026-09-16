# FreelanceX — Progress Tracker

## 1. Current Phase

**Phase:** Planning and architecture

**Status:** Not started

## 2. Current Goal

Establish the Next.js application foundation and verify:
- Next.js App Router setup.
- TypeScript strict mode.
- Tailwind CSS.
- shadcn/ui foundation.
- Clerk configuration.
- Prisma configuration.
- PostgreSQL connection.
- Environment variable validation.
- Basic project folder structure.
- Initial build and lint checks.

## 3. Completed

- [x] Product direction changed from WordPress to standard Next.js.
- [x] Clerk selected for authentication.
- [x] Prisma selected as ORM.
- [x] PostgreSQL selected as database.
- [x] TypeScript selected as application language.
- [x] Tailwind CSS and shadcn/ui selected for UI.
- [x] Six context files created for AI-assisted development.

No application code has been marked as implemented by this tracker.

## 4. In Progress

- [ ] Confirm local development environment.
- [ ] Confirm Node.js and npm versions.
- [ ] Create or verify the Next.js application.
- [ ] Configure environment variables.
- [ ] Configure Clerk.
- [ ] Configure Prisma and PostgreSQL.
- [ ] Establish initial shared UI tokens.

## 5. Next Up

### Unit 1 — Environment and Application Foundation

Deliverables:
- Working Next.js App Router project.
- TypeScript configuration.
- Tailwind configuration.
- Basic folder structure.
- `.env.example`.
- Successful lint and build checks.

### Unit 2 — Clerk Authentication

Deliverables:
- Clerk provider.
- Sign-in page.
- Sign-up page.
- Protected dashboard route.
- Unauthenticated redirect behavior.
- Authentication test checklist.

### Unit 3 — Application User Synchronization

Deliverables:
- Application user model.
- Clerk user ID mapping.
- Secure synchronization flow.
- Duplicate prevention.
- Failure handling.

### Unit 4 — Roles and Onboarding

Deliverables:
- Client and freelancer role model.
- Role selection policy.
- Onboarding screens.
- Server-side role checks.
- Role-aware dashboard routing.

### Unit 5 — Profiles

Deliverables:
- Client profile model.
- Freelancer profile model.
- Profile create/edit flow.
- Public profile page.
- Ownership checks.

### Unit 6 — Projects

Deliverables:
- Project schema.
- Project creation form.
- Project listing.
- Project detail page.
- Project status rules.

### Unit 7 — Proposals

Deliverables:
- Proposal schema.
- Proposal submission.
- Duplicate prevention.
- Client proposal review.
- Proposal status transitions.

### Unit 8 — Orders and Contracts

Deliverables:
- Order/contract schema.
- Proposal acceptance.
- Participant authorization.
- Basic lifecycle states.

### Unit 9 — Messaging

Deliverables:
- Conversation model.
- Participant authorization.
- Message creation and retrieval.
- Private access checks.

### Unit 10 — Reviews and Notifications

Deliverables:
- Review eligibility rules.
- Review creation.
- Notification model.
- Read/unread behavior.

### Unit 11 — Administration

Deliverables:
- Admin access checks.
- Moderation views.
- Report handling foundation.
- Operational visibility.

## 6. Open Questions

These must be resolved before the affected feature is implemented:

1. Should a user be allowed to act as both client and freelancer under one account?
2. Can a user change their role after onboarding?
3. Should projects and services use fixed categories, administrator-managed categories, or both?
4. Should freelancers offer fixed-price services, custom proposals, or both?
5. What exact statuses and transitions are required for projects?
6. What exact statuses and transitions are required for proposals?
7. Should hiring create an order, a contract, or a combined entity?
8. Will payment processing be included in the MVP?
9. If payments are included, which provider and settlement model will be used?
10. Will milestones be supported?
11. What is the cancellation and dispute policy?
12. Should messaging be tied to projects, orders, or both?
13. What are the review eligibility and editing rules?
14. What file storage provider will be used for profile and portfolio uploads?
15. Which search strategy is required: database filtering first, full-text search, or an external search service?
16. Which deployment provider will be used?
17. What is the Jenkins deployment responsibility and target environment?
18. Which automated testing framework will be selected?

## 7. Architecture Decisions

| Decision | Reason |
|---|---|
| Next.js App Router | Full-stack React framework with server rendering and server-side capabilities |
| Clerk | Dedicated authentication and identity management |
| PostgreSQL | Relational data model suitable for marketplace relationships |
| Prisma | Typed database access and migration workflow |
| Zod | Runtime validation at system boundaries |
| Tailwind CSS | Consistent utility-based styling |
| shadcn/ui | Reusable accessible UI foundation |
| Domain services | Keep business logic separate from UI and request handlers |
| Server-side authorization | Prevent client-side permission bypasses |

## 8. Session Notes

At the start of every new AI coding session:
1. Read all six context files.
2. Read the current progress tracker.
3. Confirm the active feature unit.
4. Inspect the existing code before making changes.
5. Continue only within the documented scope.

Record:
- What was changed.
- Which commands were run.
- Which checks passed.
- Which checks failed.
- Any decisions made.
- The next feature unit.
