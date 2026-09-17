Clerk is already installed and connected. Wire it into the existing FreelanceX Next.js app using the current route structure: provider, auth pages, redirects, route protection, and user menu.

Design

Use Clerk’s dark theme from @clerk/ui/themes as the base.

Override Clerk appearance variables using FreelanceX’s existing CSS variables. Do not hardcode colors.

Sign-in and sign-up pages:

large screens: simple two-panel layout

left: FreelanceX logo, tagline, and short text-only feature list

feature list: discover freelance opportunities, connect with clients, manage projects

right: centered Clerk form

small screens: form only

no gradients

no oversized hero sections

no feature cards

no scroll-heavy layouts

Keep the layout minimal, professional, and suitable for a freelancing marketplace.

Implementation

Wrap the root layout in app/layout.tsx with ClerkProvider using Clerk’s dark theme.

Use the existing routes:

app/sign-in/ → Clerk sign-in page

app/sign-up/ → Clerk sign-up page

app/page.tsx → Redirect authenticated users to /dashboard and unauthenticated users to /sign-in

app/dashboard/ → Protected dashboard

components/dashboard/dashboard-navbar.tsx → Add Clerk’s UserButton to the right section

Create proxy.ts at the project root, not middleware.ts.

Use the existing sign-in and sign-up environment variables for public routes. Protect all other routes by default.

Keep Clerk’s default user menu and profile flows intact. Do not rebuild or heavily customize Clerk internals.

Use existing Clerk environment variables. Do not rename or invent new ones.

Dependencies

Install: @clerk/ui.

Check When Done

proxy.ts exists at the root

all routes are protected except public sign-in and sign-up paths

sign-in and sign-up pages follow the FreelanceX design

auth pages use CSS variables with no hardcoded colors

ClerkProvider wraps the root layout

UserButton appears in the dashboard navbar

npm run build passes