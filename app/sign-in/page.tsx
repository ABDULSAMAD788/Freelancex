import { SignIn } from "@clerk/nextjs";
import { CheckCircle2 } from "lucide-react";

const featureList = [
  "Discover freelance opportunities",
  "Connect with clients",
  "Manage projects",
];

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-5 py-10 lg:grid-cols-[1fr_1.05fr] lg:px-8">
        <section className="flex h-full flex-col justify-center">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-md border border-border bg-card text-sm font-semibold text-primary">
              FX
            </div>
            <span className="text-lg font-semibold tracking-tight">freelancex</span>
          </div>

          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Marketplace access
          </p>
          <h1 className="mt-5 max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need to grow your freelance business.
          </h1>
          <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
            Streamline outreach, manage active projects, and keep your pipeline moving in one place.
          </p>

          <ul className="mt-8 space-y-4">
            {featureList.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="size-4 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex items-center justify-center">
          <div className="w-full max-w-md rounded-2xl border border-border bg-card p-3 shadow-sm">
            <SignIn
              appearance={{
                elements: {
                  rootBox: "mx-auto w-full max-w-full",
                  card: "shadow-none border-0 bg-transparent",
                },
              }}
              afterSignInUrl="/dashboard"
              afterSignUpUrl="/dashboard"
              path="/sign-in"
              routing="path"
              signUpUrl="/sign-up"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
