import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for events
const events = [
  { id: 1, title: "Summer Music Festival", date: "2024-07-15", location: "Nairobi, Kenya" },
  { id: 2, title: "Tech Conference 2024", date: "2024-09-22", location: "Mombasa, Kenya" },
  { id: 3, title: "Food & Wine Expo", date: "2024-11-05", location: "Kisumu, Kenya" },
]

export default function SearchEvents() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-2xl">Tikiti-Ke</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/events">
            Events
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/signin">
            Sign In
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/signup">
            Sign Up
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto space-y-8">
          <h1 className="text-3xl font-bold text-center">Search Events</h1>
          <div className="flex gap-4">
            <Input className="flex-1" placeholder="Search events..." type="search" />
            <Button type="submit">Search</Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Date: {event.date}</p>
                  <p>Location: {event.location}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href={`/events/${event.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Tikiti-Ke. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

