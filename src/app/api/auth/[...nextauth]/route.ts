import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { compare } from "bcryptjs"
import { authOptions } from "@/lib/auth"
import NextAuth from "next-auth/next"
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }