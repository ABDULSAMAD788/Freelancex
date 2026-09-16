# FreelanceX — UI Context

## 1. Product Experience

FreelanceX should look like a modern, professional freelancing marketplace. The design must prioritize clarity, trust, discoverability, accessibility, and task completion.

The interface must serve two distinct experiences:

### Client Experience
- Discover freelancers and services.
- Publish projects.
- Review proposals.
- Hire freelancers.
- Track orders.
- Communicate.
- Review completed work.

### Freelancer Experience
- Present skills and experience.
- Publish services.
- Discover projects.
- Submit proposals.
- Manage accepted work.
- Communicate with clients.
- Build reputation.

Public pages should be simple and welcoming. Dashboards should be action-oriented and organized by status.

## 2. Visual Direction

Use a modern dark-first interface with layered surfaces and a vivid but controlled accent color. The final brand identity may be refined later, but all colors must be centralized through design tokens.

Avoid:
- Excessive gradients.
- Unnecessary animation.
- Overloaded dashboards.
- Tiny text.
- Poor contrast.
- Inconsistent card styles.
- Decorative UI that hides primary actions.

## 3. Design Tokens

Define tokens in the global stylesheet. These are initial values and may be revised centrally.

```css
:root {
  --bg-base: #0f1115;
  --bg-surface: #171a21;
  --bg-surface-elevated: #20242d;
  --text-primary: #f4f7fb;
  --text-secondary: #c2c9d4;
  --text-muted: #8e98a8;
  --accent-primary: #6d7cff;
  --accent-primary-hover: #8591ff;
  --border-default: #303746;
  --state-error: #ef6b73;
  --state-success: #45c49a;
  --state-warning: #e8b45d;
  --focus-ring: #9ba6ff;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
}
```

Components must use tokens or the project's approved Tailwind theme values. Do not scatter arbitrary hex values throughout components.

## 4. Typography

Use a readable sans-serif font.

```css
:root {
  --font-sans: Inter, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "SFMono-Regular", Consolas, monospace;
}
```

Typography should provide:
- Clear page titles.
- Readable body text.
- Distinct labels.
- Comfortable line height.
- Visible hierarchy between primary and secondary information.

## 5. Main Layouts

### Public Navigation
- Brand/logo.
- Browse projects or services.
- Search where applicable.
- Sign-in and sign-up actions.
- Responsive mobile navigation.

### Dashboard
- Sidebar or responsive navigation.
- Page title and contextual actions.
- Summary cards only where useful.
- Main content area.
- Status filters.
- Empty and error states.

### Marketplace Listing
- Search input.
- Filter controls.
- Sort control only when a defined sort policy exists.
- Cards or rows with clear metadata.
- Pagination or a documented loading strategy.
- Empty state.

### Detail Page
- Primary information.
- Relevant metadata.
- Clear action area.
- Owner and permission-aware controls.
- Related information.
- Error and not-found states.

### Forms
- Clear labels.
- Helpful descriptions.
- Inline validation errors.
- Disabled/loading submit state.
- Success feedback.
- Preservation of user-entered values after validation failure.

## 6. Responsive Requirements

The application must work on:
- Mobile screens.
- Tablet screens.
- Desktop screens.

Do not assume a desktop-only layout. Sidebars, tables, filters, forms, and cards must have a deliberate mobile behavior.

## 7. Required UI States

Every data-driven page should consider:
- Loading.
- Successful content.
- Empty results.
- Validation error.
- Permission denied.
- Not found.
- Server error.
- Offline or failed request where relevant.
- Disabled action.
- Confirmation for destructive operations.

## 8. Accessibility

- Use semantic HTML.
- Provide labels for all form controls.
- Ensure keyboard navigation.
- Provide visible focus indicators.
- Maintain accessible contrast.
- Do not use color alone to communicate status.
- Use appropriate heading hierarchy.
- Use accessible dialog and menu behavior.
- Ensure buttons and links have meaningful names.
- Do not rely only on hover interactions.

## 9. Core Reusable Components

Create reusable components only when a pattern is repeated or clearly shared:
- Button.
- Input.
- Textarea.
- Select.
- Dialog.
- Dropdown menu.
- Badge.
- Card.
- Table.
- Form field.
- Alert.
- Empty state.
- Loading skeleton.
- Pagination.
- Status badge.
- Navbar.
- Dashboard sidebar.

Use shadcn/ui where appropriate. Do not create a custom version of an existing component without a reason.

## 10. Marketplace Status Presentation

Statuses must have:
- A clear human-readable label.
- Consistent visual treatment.
- Accessible text.
- A documented mapping from domain status to UI appearance.

The UI must not allow users to select or display a status that the server does not recognize.

## 11. UX Invariants

1. Primary actions must be easy to locate.
2. A user must understand why an action failed.
3. Private data must never be shown because of frontend filtering alone.
4. Destructive actions require confirmation when appropriate.
5. Forms must prevent accidental duplicate submissions.
6. Loading states must prevent confusing repeated actions.
7. The interface must not imply that a transaction succeeded before the server confirms it.
8. Every dashboard must handle an empty account state.
