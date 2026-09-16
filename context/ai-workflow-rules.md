# FreelanceX — AI Workflow Rules

## 1. Purpose

These rules control how AI assistants work on FreelanceX. The assistant must treat the context files as the project's source of truth.

The assistant must not infer major product behavior from general freelancing-platform patterns. If a requirement is missing or ambiguous, it must be recorded as an open question before implementation continues.

## 2. Required Context Reading

Before implementing a feature, read:
1. `project-overview.md`
2. `architecture.md`
3. `code-standards.md`
4. `ui-context.md`
5. `progress-tracker.md`

Then identify which sections are relevant to the requested feature.

## 3. Feature Unit Rule

Work on one feature unit at a time.

A feature unit should be small enough to:
- Understand completely.
- Implement without unrelated changes.
- Test quickly.
- Review in one session.
- Roll back without damaging other features.

Examples of valid feature units:
- Configure Prisma and verify database connection.
- Add Clerk provider and protected route test.
- Synchronize a Clerk user into the application database.
- Create the freelancer profile schema.
- Implement freelancer profile creation.
- Display a public freelancer profile.
- Create a project form.
- Display a project listing.
- Submit a proposal with authorization checks.

Do not combine unrelated modules in one step.

## 4. Before Coding

The assistant must provide:
- Feature name.
- Objective.
- Relevant requirements.
- Files it will inspect.
- Files it plans to create or modify.
- Database impact.
- Authentication and authorization impact.
- Validation requirements.
- Test plan.
- Open questions or assumptions.

If the feature cannot be implemented safely because a requirement is missing, update the open questions section of `progress-tracker.md` and ask for clarification.

## 5. Implementation Rules

- Inspect existing code before editing.
- Do not overwrite files blindly.
- Do not create duplicate utilities.
- Do not change unrelated features.
- Use Clerk for authentication.
- Use Prisma for database access.
- Use Zod at external input boundaries.
- Use server-side authorization for all protected operations.
- Keep business logic outside UI components.
- Follow the existing folder structure.
- Preserve strict TypeScript.
- Use the existing design tokens.
- Do not add payments, escrow, AI hiring, or other unapproved features.

## 6. Database Change Procedure

When a feature changes the database:
1. Explain the entities and relationships.
2. Update `schema.prisma`.
3. Review required indexes and constraints.
4. Create a migration using the appropriate Prisma command.
5. Run the migration in the intended environment.
6. Update relevant service and validation code.
7. Test valid and invalid operations.
8. Document the decision in `progress-tracker.md`.

Do not manually modify an already-applied migration to change production history.

## 7. Security Procedure

For every protected mutation:
1. Verify the Clerk-authenticated user.
2. Parse and validate input.
3. Retrieve the target resource.
4. Check role and ownership.
5. Check the current resource state.
6. Perform the operation.
7. Return a safe result.
8. Revalidate affected UI data.

Do not trust user IDs, role names, ownership IDs, or status values supplied by the browser.

## 8. Testing Procedure

Before marking a unit complete, test:
- Expected success path.
- Missing required input.
- Invalid input.
- Unauthenticated request.
- Authenticated but unauthorized request.
- Wrong ownership.
- Duplicate action.
- Invalid state transition.
- Empty data state.
- Relevant responsive UI state.

Run the configured commands, such as:
- `npm run lint`
- `npm run typecheck` if configured
- `npm test` if configured
- `npm run build`

Only report commands that were actually executed.

## 9. Progress Tracking

After every meaningful implementation change:
- Update `progress-tracker.md`.
- Move the feature between Next Up, In Progress, and Completed.
- Record tests that actually passed or failed.
- Record unresolved bugs.
- Record architecture decisions.
- Record the next recommended unit.

Do not mark a feature complete if only the UI has been created while the server behavior is missing.

## 10. Handling Errors

When a build or test fails:
1. Report the actual error.
2. Identify the likely affected layer.
3. Fix the root cause.
4. Re-run the relevant check.
5. Do not hide the failure by disabling validation or weakening types.
6. Record unresolved failures in the progress tracker.

## 11. Output Format for AI Coding Sessions

The assistant should organize its response as:

### Feature
What is being implemented.

### Plan
Small implementation steps.

### Files
Files to inspect, create, or modify.

### Implementation
Code changes, with complete file paths.

### Verification
Commands and manual checks.

### Documentation
Changes made to context files.

### Next Unit
The next smallest logical feature.

## 12. Scope Control

The assistant must stop and ask for clarification when:
- Two requirements conflict.
- A security rule is unclear.
- A database relationship is ambiguous.
- A feature requires a policy that has not been decided.
- A requested change would affect multiple unrelated modules.
- The implementation would require inventing product behavior.

## 13. Completion Gate

Do not move to the next feature unit until:
1. The current unit works within its defined scope.
2. Relevant architecture invariants are preserved.
3. Authentication and authorization have been tested where applicable.
4. `progress-tracker.md` is updated.
5. Relevant checks pass.
6. Known limitations are documented.
