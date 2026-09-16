We need to lay the foundational UI structure for FreelanceX — the shared dashboard shell that will frame the client and freelancer experience. This is a freelancing marketplace, so do not create any document/editor-style UI or project creation workspace.

### Dashboard Navbar

Create `components/dashboard/dashboard-navbar.tsx`.

Requirements:
- Fixed-height top navbar.
- Left section: sidebar toggle using `PanelLeftOpen` / `PanelLeftClose`.
- Center section: FreelanceX branding or current dashboard title.
- Right section: keep an empty placeholder for future user actions/notifications.
- Dark background with a subtle bottom border.
- Responsive across desktop and mobile.
- Use shadcn/ui and Lucide icons where appropriate.

### Dashboard Sidebar

Create `components/dashboard/dashboard-sidebar.tsx`.

Requirements:
- Fixed/overlay sidebar that sits above the dashboard content.
- Opening/closing the sidebar must not permanently push the main content.
- Slide in/out from the left.
- Accept `isOpen` and `onClose` props.
- Include a FreelanceX/dashboard header and close button.
- Create the navigation structure for the marketplace dashboard.
- Keep navigation items role-aware so client and freelancer sections can be extended later.
- Do NOT add `My Projects`, `Shared`, `New Project`, document editor controls, or any document-creation UI.

### Dashboard Layout

Create the shared dashboard layout that combines:
- Dashboard Navbar
- Dashboard Sidebar
- Main content area

Requirements:
- Main content remains responsive when the sidebar opens/closes.
- Consistent spacing and viewport height.
- Sidebar and navbar remain available across dashboard pages.
- Keep business logic out of these foundational components.

### Dialog Pattern

Establish the reusable shadcn/ui dialog pattern using the existing `globals.css` color tokens.

Requirements:
- Support title, description, content, and footer actions.
- Responsive dialog behavior.
- No actual marketplace forms yet.
- This pattern will later be reused for actions such as posting a job, editing a profile, submitting proposals, etc.

### Check when done

- Run the development server and verify the dashboard shell renders correctly.
- Verify sidebar open/close behavior.
- Verify responsive behavior.
- Run lint/type checks.
- No document/editor-specific UI should exist in this foundation.