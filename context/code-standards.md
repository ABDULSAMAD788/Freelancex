# FreelanceX — Code Standards

## 1. General Rules

1. Use TypeScript throughout the application.
2. Keep modules small and single-purpose.
3. Prefer clear code over clever abstractions.
4. Fix root causes instead of adding temporary workarounds.
5. Do not mix unrelated features in one change.
6. Reuse existing utilities and components.
7. Do not add dependencies without a documented reason.
8. Preserve existing behavior unless the task explicitly changes it.
9. Never invent requirements that are not in the context files.
10. Make the smallest complete implementation that can be verified.

## 2. TypeScript

- Strict mode is required.
- Avoid `any`.
- Use explicit types for domain objects and function boundaries.
- Prefer discriminated unions for status and result types.
- Validate unknown external data with Zod.
- Do not use type assertions to hide uncertain data.
- Use typed error objects where appropriate.
- Keep database types separate from public response types when needed.
- Do not expose internal database models directly to every UI component.

## 3. Next.js Rules

- Use the App Router.
- Prefer Server Components by default.
- Add `"use client"` only when browser interactivity or client state requires it.
- Do not import server-only modules into client components.
- Keep route handlers focused on request parsing, authorization delegation, and response formatting.
- Use loading and error boundaries for meaningful route segments.
- Use server actions for suitable mutations.
- Avoid unnecessary client-side fetching when server rendering is appropriate.
- Revalidate data after successful mutations.
- Never assume a hidden button provides security.

## 4. Clerk Rules

- Use Clerk for authentication.
- Verify authentication in every protected server operation.
- Synchronize the application user record using a secure, documented flow.
- Verify webhook signatures.
- Do not store passwords or session secrets in the application database.
- Do not trust a role supplied by the browser.
- Keep Clerk identity and application authorization clearly separated.

## 5. Prisma and Database Rules

- Use Prisma for normal database access.
- Keep the Prisma schema readable and documented.
- Use migrations for schema changes.
- Add unique constraints for business rules that must be enforced at the database level.
- Add indexes based on expected queries.
- Use transactions for operations that require multiple writes to remain consistent.
- Avoid N+1 queries.
- Select only the fields required by the operation.
- Do not expose private records through broad queries.
- Handle missing records explicitly.
- Define deletion and archival behavior before implementing destructive operations.

## 6. Validation and Authorization

Every mutation must validate:
- Required fields.
- Types.
- Length limits.
- Allowed enum values.
- Numeric ranges.
- Date rules.
- Ownership.
- Current resource status.
- Duplicate constraints.
- Role permissions.

Validation, authentication, and authorization are separate responsibilities. All three must be handled where applicable.

## 7. Server Action Result Convention

Use a predictable result shape such as:

```ts
type ActionResult<T> =
  | {
      success: true;
      data: T;
      message?: string;
    }
  | {
      success: false;
      error: {
        code: string;
        message: string;
        fieldErrors?: Record<string, string[]>;
      };
    };
```

Do not expose stack traces, SQL statements, environment variables, internal filesystem paths, or sensitive details to the browser.

## 8. React and UI Rules

- Use semantic HTML.
- Every form control must have an accessible label.
- Use reusable form components.
- Handle loading, success, error, and empty states.
- Avoid unnecessary state duplication.
- Keep interactive components focused.
- Use keyboard-accessible controls.
- Provide visible focus states.
- Avoid clickable `div` elements.
- Use meaningful button labels.
- Do not place business authorization logic only in React.

## 9. Styling Rules

- Use Tailwind CSS and the tokens defined in `ui-context.md`.
- Avoid random hardcoded colors.
- Use consistent spacing, typography, borders, and radii.
- Keep responsive behavior deliberate.
- Ensure accessible contrast.
- Define hover, focus, disabled, loading, success, and error states.
- Use shadcn/ui components where suitable.
- Do not edit generated or third-party component internals without a clear reason.

## 10. Naming

Use:
- `PascalCase` for React components and classes.
- `camelCase` for variables and functions.
- `kebab-case` for route segments where appropriate.
- Descriptive names for domain services.
- Consistent status constants.
- Feature-oriented file names.

Avoid:
- `temp`, `data`, `helper`, or `process` as important names.
- Huge components.
- Hidden side effects in utility functions.
- Generic catch-all files.

## 11. Testing

For every feature, test:
- Valid input.
- Invalid input.
- Unauthenticated access.
- Unauthorized access.
- Incorrect ownership.
- Duplicate actions.
- Invalid status transitions.
- Empty states.
- Loading and error states.
- Mobile layout.
- Regression behavior.

Run the available checks before marking a unit complete. At minimum, use the project's configured lint, type-check, test, and build commands. Do not claim a command passed unless it was actually run.

## 12. AI Implementation Rules

Before writing code, the AI assistant must:
1. Read the relevant context files.
2. Read `progress-tracker.md`.
3. Identify the exact feature unit.
4. List files to create or modify.
5. Identify database and authorization implications.
6. Identify assumptions and open questions.

During implementation:
1. Change only the required scope.
2. Follow existing conventions.
3. Do not overwrite files blindly.
4. Do not add undocumented features.
5. Keep the application buildable.

After implementation:
1. Explain the changed files.
2. Explain how to test the feature.
3. Report commands actually executed.
4. Record unresolved issues.
5. Update `progress-tracker.md`.
6. Update architecture or UI documentation if a decision changed.

## 13. Protected Files

Do not modify:
- `.env` or production secrets.
- `node_modules/`.
- `.next/`.
- Generated Prisma migration files that have already been applied, except through a deliberate migration process.
- Third-party library internals.
- Unrelated working features.
