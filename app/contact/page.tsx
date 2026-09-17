import { PublicShell } from "@/components/layout/public-shell"
import { PageContainer, PageHeader } from "@/components/shared/page-primitives"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
export default function ContactPage() { return <PublicShell><PageContainer><PageHeader eyebrow="Contact" title="Tell us what is on your mind." description="This form is a preview for the future support workflow." /><Card className="max-w-2xl"><CardContent className="space-y-5 p-6"><div><label className="text-sm font-medium" htmlFor="contact-name">Name</label><Input className="mt-2" id="contact-name" /></div><div><label className="text-sm font-medium" htmlFor="contact-email">Email</label><Input className="mt-2" id="contact-email" type="email" /></div><div><label className="text-sm font-medium" htmlFor="contact-message">Message</label><Textarea className="mt-2 min-h-32" id="contact-message" /></div><Button>Send message</Button></CardContent></Card></PageContainer></PublicShell> }