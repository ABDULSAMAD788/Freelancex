import { PublicShell } from "@/components/layout/public-shell"
import { PageContainer, PageHeader } from "@/components/shared/page-primitives"
import { CategoryBrowser } from "@/components/categories/category-browser"

export default function CategoriesPage() {
  return <PublicShell><PageContainer><PageHeader eyebrow="Explore" title="Find your corner of the marketplace." description="Browse categories to find projects, specialists, and new possibilities." /><CategoryBrowser /></PageContainer></PublicShell>
}
