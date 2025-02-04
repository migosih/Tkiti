import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignIn() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center bg-[#1D1D1F]">
        <div className="w-full max-w-md space-y-8 px-4 py-8 bg-[#1D1D1F] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.7)] border border-[#2D2D2F]">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-white">Sign In</h1>
            <p className="text-gray-500">Enter your credentials to access your account</p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                Email
              </Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                className="bg-[#1D1D1F] border-[#2D2D2F] focus:border-[#3D3D3F] focus:ring-[#3D3D3F] text-white placeholder:text-gray-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-300">
                Password
              </Label>
              <Input
                id="password"
                required
                type="password"
                className="bg-[#1D1D1F] border-[#2D2D2F] focus:border-[#3D3D3F] focus:ring-[#3D3D3F] text-white"
              />
            </div>
            <Button className="w-full bg-white hover:bg-gray-200 text-gray-900 font-medium" type="submit">
              Sign In
            </Button>
          </form>
          <div className="text-center text-sm text-gray-400">
            Don`t have an account?{" "}
            <Link className="text-white hover:text-gray-300 underline underline-offset-4" href="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

