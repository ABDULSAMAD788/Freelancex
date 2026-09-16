# FreelanceX — Project Overview

## 1. Product Definition

FreelanceX is a full-stack freelancing marketplace built with Next.js, TypeScript, Clerk, Prisma, and PostgreSQL. It connects clients who need work with freelancers who provide professional services.

The product must be a real application with authentication, role-based access, persistent relational data, protected server operations, marketplace workflows, and an administrative area. It must not be developed as a static frontend demo.

The application will use the Next.js App Router. Public pages, authenticated dashboards, server-rendered data, server actions, and route handlers should be organized according to the architecture defined in `architecture.md`.

## 2. Primary User Roles

### Visitor
A visitor can:
- View public landing pages.
- Browse public freelancer profiles.
- Browse public services.
- Browse public projects where allowed.
- Register or log in.

A visitor cannot:
- Access private dashboards.
- Submit proposals.
- Create projects.
- Send private messages.
- Manage orders or reviews.

### Client
A client can:
- Create and manage a client profile.
- Publish, edit, pause, close, and archive eligible projects.
- Browse freelancers and services.
- View proposals received for owned projects.
- Accept an eligible proposal.
- Manage orders/contracts.
- Communicate with the relevant freelancer.
- Review eligible completed work.
- View notifications and activity.

### Freelancer
A freelancer can:
- Create and manage a professional profile.
- Add skills, experience, portfolio items, and service listings.
- Browse and filter projects.
- Submit, edit, or withdraw eligible proposals.
- Track proposal status.
- Manage accepted orders/contracts.
- Communicate with relevant clients.
- Submit work or update work status.
- Receive eligible client reviews.

### Administrator
An administrator can:
- Manage users and roles through protected admin functionality.
- Moderate projects, services, profiles, reviews, and reports.
- Review suspicious or abusive activity.
- Manage categories and platform settings.
- Inspect marketplace records.
- Handle disputes according to a documented policy.

## 3. Core User Journey

1. Visitor opens FreelanceX.
2. Visitor registers or signs in through Clerk.
3. User selects or receives a supported account role.
4. User completes the relevant onboarding profile.
5. Client publishes a project or browses services.
6. Freelancer browses projects or publishes services.
7. Freelancer submits a proposal for an eligible project.
8. Client reviews proposals belonging to their project.
9. Client accepts a proposal.
10. FreelanceX creates an order/contract record.
11. Client and freelancer communicate within the authorized context.
12. Freelancer submits work or marks a work stage for review.
13. Client accepts, requests changes, or follows the defined dispute process.
14. The order is completed according to the lifecycle rules.
15. Eligible users submit reviews.
16. Relevant notifications and activity records are created.

## 4. Initial Feature Modules

### Foundation
- Next.js App Router setup.
- TypeScript strict mode.
- Tailwind CSS and shadcn/ui.
- Environment variable validation.
- Prisma database connection.
- Clerk authentication integration.
- Shared error and response conventions.

### Authentication and Onboarding
- Sign up, sign in, sign out, and password/account recovery through Clerk.
- User synchronization from Clerk to the application database.
- Role-aware onboarding.
- Protected routes.
- Account status handling.
- Unauthorized and forbidden states.

### Profiles
- Client profile.
- Freelancer profile.
- Bio, skills, experience, profile image, and portfolio references.
- Public and private fields.
- Profile editing with ownership checks.

### Services
- Freelancer-created services.
- Title, description, category, skills, pricing, delivery period, and status.
- Draft, published, paused, and archived states.
- Public browsing and filtering.
- Owner-only editing and deletion.

### Projects
- Client-created projects.
- Title, description, category, required skills, budget, deadline, and status.
- Draft, published, paused, closed, and archived states.
- Search and filtering.
- Owner-only project management.

### Proposals
- Freelancer submits a proposal for an eligible project.
- Proposal includes message, proposed price, and estimated delivery period.
- Proposal status is stored explicitly.
- Duplicate active proposals are prevented unless later specified otherwise.
- Only the project owner can view received proposals.
- Acceptance creates or links to an order/contract.

### Orders and Contracts
- Agreement between a client and freelancer.
- Participant references.
- Status transitions.
- Work submission and review states.
- Completion, cancellation, and dispute states only when explicitly defined.
- Server-side validation of every state transition.

### Messaging
- Authorized client-freelancer communication.
- Conversation linked to a project, order, or contract where applicable.
- Private messages cannot be accessed by unrelated users.
- Safe rendering and input validation.
- Reporting and moderation support later.

### Reviews
- Reviews allowed only after eligible completion.
- Review associated with the relevant transaction.
- Duplicate reviews prevented.
- Moderation and editing rules documented before implementation.

### Notifications
- Persistent notifications.
- Read/unread state.
- Notification types represented as explicit values.
- Duplicate event notifications prevented where required.

## 5. MVP Scope

The MVP should include:
1. Project setup and shared UI foundation.
2. Clerk authentication.
3. Database user synchronization.
4. Role-based onboarding and dashboards.
5. Client and freelancer profiles.
6. Project creation and browsing.
7. Proposal submission and review.
8. Basic hiring and order lifecycle.
9. Basic authorized messaging.
10. Basic reviews.
11. Basic administration and moderation.

## 6. Not Included Until Defined

Do not implement these by assumption:
- Escrow.
- Payment processing.
- Refunds.
- Tax calculation.
- Identity verification/KYC.
- Automated hiring decisions.
- AI-generated proposals.
- Freelancer ranking algorithms.
- Subscriptions.
- Multi-currency settlement.
- Native mobile apps.
- Video calls.
- Advanced real-time chat.
- Complex dispute arbitration.
- Public third-party API.

Each additional feature requires a written requirement, data model, authorization rules, UI states, and test plan.

## 7. Completion Criteria

A feature is complete only when:
- Its requirements are documented.
- Its database changes are defined.
- Its UI states are implemented.
- Server-side validation exists.
- Authentication and authorization are enforced.
- Success, loading, empty, and error states are handled.
- The feature is tested.
- Relevant context files are updated.
- `npm run build` passes.
- No unrelated behavior was changed.
