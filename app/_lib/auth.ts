import { NextRequest } from "next/server.js";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

// Extend the Session and User types
declare module "next-auth" {
  interface Session {
    user: {
      guestId?: string;
      image: any;
      name: string;
      email: string;
    };
  }

  interface User {
    guestId?: string;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ request, auth }: { request: NextRequest; auth: any }) {
      return !!auth?.user;
    },
    async signIn({ user, profile, account }) {
      try {
        const guest = await getGuest(user?.email!);
        if (!guest) {
          await createGuest({
            name: user.name,
            email: user.email,
          });
        }

        return true;
      } catch (error) {
        return false;
      }
    },
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
