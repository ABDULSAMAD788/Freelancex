# FreelanceX — Architecture Context

## 1. Core Architecture

FreelanceX is a full-stack Next.js application using the App Router.

The application follows a modular architecture:
- Next.js handles routing, rendering, server actions, and route handlers.
- Clerk handles authentication and identity.
- PostgreSQL stores application data.
- Prisma provides typed database access and schema migrations.
- Zod validates external input at server boundaries.
- Tailwind CSS and shadcn/ui provide the UI foundation.

Business logic must not be scattered across page components. Domain operations should be placed in dedicated server-side modules.

## 2. Technology Stack

| Layer | Technology | Responsibility |
|---|---|---|
| Framework | Next.js App Router | Routing, rendering, server operations |
| Language | TypeScript | Application code |
| UI | React | Interactive components |
| Styling | Tailwind CSS | Layout and styling |
| Component library | shadcn/ui | Reusable accessible components |
| Authentication | Clerk | Identity, sessions, sign-in/sign-up |
| Database | PostgreSQL | Persistent relational data |
| ORM | Prisma | Schema, queries, migrations |
| Validation | Zod | Runtime input validation |
| Forms | React Hook Form | Form state and client UX |
| File storage | TBD | Portfolio and attachment files |
| Testing | TBD | Unit, integration, and end-to-end tests |
| DevOps | Docker/Jenkins later | Reproducible deployment pipeline |

## 3. Target Folder Structure

```text
freelancex/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx
│   │   ├── about/
│   │   └── pricing/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── (marketplace)/
│   │   ├── freelancers/
│   │   ├── services/
│   │   └── projects/
│   ├── dashboard/
│   │   ├── client/
│   │   ├── freelancer/
│   │   └── layout.tsx
│   ├── admin/
│   ├── api/
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── error.tsx
├── components/
│   ├── ui/
│   ├── layout/
│   ├── forms/
│   ├── marketplace/
│   └── dashboard/
├── lib/
│   ├── auth/
│   ├── db/
│   ├── validations/
│   ├── permissions/
│   ├── errors/
│   ├── utils/
│   └── constants/
├── server/
│   ├── services/
│   ├── repositories/
│   ├── actions/
│   └── policies/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── public/
├── tests/
├── docs/
├── middleware.ts
├── package.json
├── tsconfig.json
├── next.config.ts
└── .env.example
```

This is a target structure. Do not create every directory before it is needed.

## 4. Responsibility Boundaries

### App Router
Owns:
- Route-level pages.
- Layouts.
- Loading, error, and not-found states.
- Route handlers.
- Server actions where appropriate.
- Page-level data composition.

### Components
Own:
- Reusable presentation.
- Forms and interaction.
- Loading and empty states.
- Accessible UI patterns.

Components should not independently implement sensitive business rules.

### `lib`
Owns:
- Database client setup.
- Authentication helpers.
- Validation schemas.
- Permission helpers.
- Shared utilities.
- Constants and typed errors.

### `server/services`
Owns:
- Domain operations.
- Proposal lifecycle.
- Project lifecycle.
- Order lifecycle.
- Profile operations.
- Notification creation.
- Business invariants.

### `server/repositories`
Owns:
- Database queries.
- Data retrieval and persistence.
- Query composition.
- Repository-specific mapping.

Repositories should not decide whether a user is allowed to perform a business operation. Authorization belongs in policy/service layers.

### Prisma
Owns:
- Data schema.
- Migrations.
- Typed database access.
- Relations and indexes.

## 5. Database Strategy

Use PostgreSQL with Prisma.

Initial entities to design:
- UserProfile.
- ClientProfile.
- FreelancerProfile.
- Skill.
- Category.
- Service.
- Project.
- Proposal.
- Order or Contract.
- Conversation.
- ConversationParticipant.
- Message.
- Review.
- Notification.
- Report.
- AuditEvent, if required.

Do not finalize every field without considering:
- Ownership.
- Relationships.
- Status values.
- Required versus optional fields.
- Indexes.
- Unique constraints.
- Deletion behavior.
- Timestamps.
- Privacy.
- Migration safety.

Clerk remains the source of truth for authentication identity. The application database stores the application profile and marketplace information linked to the Clerk user ID.

## 6. Authentication and Authorization

Clerk handles:
- Sign-up.
- Sign-in.
- Sessions.
- Authentication state.
- Account recovery.

The database stores a local application user record linked to the Clerk user ID.

Rules:
- Every protected server operation must verify authentication.
- Authentication does not automatically grant marketplace permissions.
- Role and ownership checks must run on the server.
- Client users can modify only their own client-owned resources.
- Freelancers can modify only their own freelancer-owned resources.
- Users cannot set their own user ID, owner ID, or participant ID through untrusted input.
- Admin operations require explicit administrator authorization.
- Client-side route hiding is not sufficient security.
- Server actions and route handlers must enforce the same rules.

## 7. Server Actions and Route Handlers

Use server actions for appropriate form-driven mutations within the application.

Use route handlers for:
- External integrations.
- Webhooks.
- API-like endpoints.
- Requests requiring a defined HTTP interface.

Every mutation must:
1. Verify the authenticated user.
2. Validate input with Zod.
3. Load the relevant resource.
4. Check role, ownership, and current state.
5. Execute the domain operation.
6. Return a predictable success or error result.
7. Revalidate affected UI data where necessary.

Clerk webhooks must verify their signatures before processing user synchronization events.

## 8. Data Privacy

- Private messages are accessible only to authorized participants and administrators with a defined reason.
- Proposal information is visible only to the project owner, proposal owner where appropriate, and authorized administrators.
- Private profile fields must not appear in public queries.
- Do not expose database IDs or internal details unnecessarily.
- Do not log passwords, tokens, private message contents, or sensitive personal information.
- Use server-side filtering rather than hiding private records only in the UI.

## 9. Architectural Invariants

1. Do not use WordPress or a WordPress plugin.
2. Do not introduce a second authentication system alongside Clerk.
3. Do not access Prisma directly from arbitrary client components.
4. Do not trust client-provided ownership or role fields.
5. Do not perform sensitive mutations without authorization checks.
6. Do not place business logic only inside a UI component.
7. Do not use raw SQL when Prisma is sufficient; if raw SQL is necessary, parameterize it and document why.
8. Do not change the schema without a migration.
9. Do not commit `.env` files or secrets.
10. Do not claim a feature is complete without testing its unauthorized and invalid-input paths.
11. Do not make payment or escrow assumptions.
12. Keep the application buildable after each implementation unit.
