import Link from "next/link"

export default function LandingLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        <nav className="p-2 flex justify-between">
           Landing page Navbar

           <Link className="px-5 py-2 bg-green-200 rounded-md text-black" href="/about">About</Link>
        </nav>
        <body>{children}</body>
        </>
    )
  }
  