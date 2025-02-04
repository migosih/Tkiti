import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcryptjs"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        
        const host = await prisma.host.findUnique({
          where: { email: credentials.email }
        })
        
        if (!host) {
          return null
        }
        
        const isValid = await compare(credentials.password, host.password)
        
        if (!isValid) {
          return null
        }
        
        return {
          id: host.id,
          email: host.email,
          name: host.name
        }
      }
    })
  ]
}
