import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUp() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8 px-4 py-8 bg-white shadow-lg rounded-lg">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-black">Create an Account</h1>
            <p className="text-gray-500">Enter your details to create your account</p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" required type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" required type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" required type="password" />
            </div>
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link className="underline" href="/signin">
              Sign In
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

