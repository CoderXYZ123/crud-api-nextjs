import type { Metadata } from "next"

export const metadata: Metadata ={
  title: "Landing page",
  description: "This is description"
}

export default function LandingPage() {
    return <h1 className="text-2xl bg-red-400">Hello Landing Page</h1>
  }