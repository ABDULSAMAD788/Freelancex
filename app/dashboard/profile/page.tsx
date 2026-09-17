import { PageContainer, PageHeader } from "@/components/shared/page-primitives"
import { ProfileForm } from "@/components/forms/profile-form"

export default function ProfilePage() {
  return <PageContainer><PageHeader eyebrow="Account" title="Your profile" description="Show the people you work with what you care about and where you are strongest." /><ProfileForm /></PageContainer>
}
