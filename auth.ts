import { getServerSession, type NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { DF_EXAM_URL } from "./shared/config"
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const url = DF_EXAM_URL + "/auth/login"

        const response = await fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
          headers: { "Content-Type": "application/json" },
        })

        const user = await response.json()

        if (!response.ok || !user) {
          // If email not found, throw an error
          throw new Error(user.message)
        }

        if (response.ok && user) {
          return user
        }

        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
    maxAge: 30 * 60, // 30 minutes
    updateAge: 25 * 60, // Update session every 25 minutes
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Add custom user data to the JWT
        token.user = user
      }

      return token
    },
    async session({ session, token }: any) {
      session.user = token.user

      return session
    },
  },
}

export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions)
}
