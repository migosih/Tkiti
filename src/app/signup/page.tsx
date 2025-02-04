'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Loader } from "lucide-react"

export default function SignUp() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // console.log('Form submission started')
    // console.log('Form data:', formData)
      
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters long")
      return
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match")
      return
    }
    
    setLoading(true)
    // console.log('Validation passed, sending request')
    
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      })
      // console.log('Response status:', res.status)
      
      const data = await res.json()
      // console.log('Response data:', data)
      
      if (!res.ok) {
        throw new Error(data.error)
      }
      
      toast.success("Account created successfully!")
      router.push('/signin')
    } catch (error) {
      console.error('Error details:', error)
      toast.error(error instanceof Error ? error.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }
  
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center bg-[#1D1D1F]">
        <div className="w-full max-w-md space-y-8 px-4 py-8 bg-[#1D1D1F] rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.7)] border border-[#2D2D2F]">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-white">Create an Account</h1>
            <p className="text-gray-500">Enter your details to create your account</p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300">
                Full Name
              </Label>
              <Input
                id="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
                pattern="[A-Za-z\s]+"
                onKeyPress={(e) => {
                  if (!/[A-Za-z\s]/.test(e.key)) {
                    e.preventDefault()
                  }
                }}
                className="bg-[#1D1D1F] border-[#2D2D2F] focus:border-[#3D3D3F] focus:ring-[#3D3D3F] text-white placeholder:text-gray-600"
              />

            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                Email
              </Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                value={formData.email}
                onChange={handleChange}
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
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                className="bg-[#1D1D1F] border-[#2D2D2F] focus:border-[#3D3D3F] focus:ring-[#3D3D3F] text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-gray-300">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                required
                type="password"
                placeholder="********"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-[#1D1D1F] border-[#2D2D2F] focus:border-[#3D3D3F] focus:ring-[#3D3D3F] text-white"
              />
            </div>
            <Button 
              className="w-full bg-white hover:bg-gray-200 text-gray-900 font-medium" 
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          <div className="text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link className="text-white hover:text-gray-300 underline underline-offset-4" href="/signin">
              Sign In
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
