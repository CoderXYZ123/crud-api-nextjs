import type { Metadata } from "next"
import getAllUsers from "@/lib/getAllUser"
import Link from "next/link"

export const metadata: Metadata ={
  title: "About page",
  description: "This is description"
}

export default async function AboutPage() {
  // throw new Error("Not today")
  const usersData: Promise<User[]> = getAllUsers()

  const users = await usersData 

  const content = (
    <section>
      <h2>
        <Link href='/'>
          Back to Home
        </Link>
        <br />

        {users.map(user => {
          return (
            <>
              <p key={user.id}>
                  <Link href={`/about/users/${user.id}`}>
                    {user.name}
                  </Link>
              </p>
              <br />
            </>
          )
        })}

      </h2>
    </section>
  )
    return content
  }