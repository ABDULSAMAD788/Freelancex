import { Button } from "@/components/ui/button";
export default function Home() {

  return (
    <main className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="text-4xl font-semibold tracking-tight sm:text-6xl">
        freelancex
        <Button>Click me</Button>
      </div>
    </main>
  );
}
