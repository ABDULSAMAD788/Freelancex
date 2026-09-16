
Read `AGENTS.md` before starting.

We are building the design system and UI primitive components for the FreelanceX freelancing marketplace.

FreelanceX is a modern, professional, dark-themed full-stack freelancing platform built with Next.js App Router, TypeScript, Tailwind CSS, and shadcn/ui.

The UI must follow the existing FreelanceX design direction defined in `ui-context.md`. Do not introduce light-mode styling or unrelated visual patterns.

## Task

Install and configure `shadcn/ui`.

Before starting:
- Read `AGENTS.md`.
- Read `ui-context.md`.
- Read `architecture.md`.
- Read `code-standards.md`.
- Inspect the existing project structure.
- Do not modify unrelated files.

### Install and configure

1. Install and configure `shadcn/ui` using the existing Next.js project setup.
2. Ensure the configuration is compatible with:
   - Next.js App Router
   - TypeScript
   - Tailwind CSS
   - Existing dark theme
3. Preserve the current project configuration unless a change is required for shadcn/ui.
4. Do not introduce a second styling system.

### Add these shadcn/ui components

Install the following components using the shadcn/ui CLI:

- Button
- Card
- Dialog
- Input
- Tabs
- Textarea
- ScrollArea

Use the official shadcn/ui component implementations.

Do not manually recreate components that are available through the shadcn/ui CLI.

### Component requirements

Each component must:
- Import without errors.
- Follow the existing TypeScript configuration.
- Work with the project's Tailwind setup.
- Support the existing FreelanceX dark theme.
- Preserve accessibility features.
- Avoid unnecessary modifications to generated component source files.

Do not modify the generated `components/ui/*` files after installation unless explicitly required by a future task.

### Install additional dependencies

Install and configure:

- `lucide-react`

Use Lucide React for interface icons throughout FreelanceX.

Icons must:
- Use consistent sizing.
- Follow the existing dark theme.
- Be accessible when used as standalone interactive controls.
- Avoid unnecessary custom SVG implementations when an appropriate Lucide icon exists.

### Create utility helper

Create:

`lib/utils.ts`

Implement a reusable `cn()` helper for merging Tailwind CSS classes.

The helper should:
- Support conditional class names.
- Merge conflicting Tailwind classes correctly.
- Follow the standard shadcn/ui utility approach.
- Be reusable throughout the application.

Do not duplicate `cn()` helpers in individual components.

### Dark theme integration

Ensure all installed components match the existing dark theme in:

`app/globals.css`

Requirements:
- No unexpected white backgrounds.
- No default light-mode styling.
- Consistent background, surface, text, border, and accent colors.
- Use the existing design tokens from `ui-context.md`.
- Do not introduce arbitrary colors that conflict with the FreelanceX design system.
- Ensure focus, hover, disabled, and error states remain visible and accessible.

Do not redesign the entire application during this task.

### Check when done

- All requested shadcn/ui components are installed.
- All components import without TypeScript or module errors.
- `cn()` works properly.
- `lucide-react` is installed and importable.
- Components match the existing FreelanceX dark theme.
- No default light styling appears unexpectedly.
- Existing application pages still work.
- No unrelated files were modified.
- The relevant build and lint checks pass.

### Documentation

After completing the task:
- Update `progress-tracker.md`.
- Record the installed components.
- Record any configuration changes.
- Record any unresolved issues.
- Do not mark the task complete if verification fails.

### Final response

Report:
1. Files created or modified.
2. Components installed.
3. Dependencies installed.
4. Commands executed.
5. Verification results.
6. Any remaining issues.