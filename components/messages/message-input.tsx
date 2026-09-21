"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
export function MessageInput({ onSend }: { onSend: (message: string) => void }) { const [message, setMessage] = useState(""); return <form className="flex gap-2 border-t border-border p-4" onSubmit={(event) => { event.preventDefault(); if (message.trim()) { onSend(message.trim()); setMessage("") } }}><Input aria-label="Message" onChange={(event) => setMessage(event.target.value)} placeholder="Write a message..." value={message} /><Button type="submit">Send</Button></form> }