import { prisma } from "@/lib/prisma"
import { hash } from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log('API received:', body)
    
    const { name, email, password } = body
    
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }
    
    // Log before database operations
    console.log('Checking for existing host')
    const existingHost = await prisma.host.findUnique({
      where: { email }
    })
    
    if (existingHost) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 400 }
      )
    }
    
    console.log('Creating new host')
    const hashedPassword = await hash(password, 10)
    await prisma.host.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    })
    
    return NextResponse.json({ message: "Host created successfully" })
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    )
  }
}
