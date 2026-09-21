import { PageContainer, PageHeader } from "@/components/shared/page-primitives"
import { ProfileForm } from "@/components/forms/profile-form"

export default function ProfilePage() {
  return (
    <PageContainer>
      <PageHeader
        eyebrow="Account"
        title="Your profile"
        description="Add the details that help clients or collaborators understand your work."
      />
      <ProfileForm />
    </PageContainer>
  )
}
