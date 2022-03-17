import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const dev = process.env.NODE_ENV === "development";

export const baseUrl = dev
  ? "http://localhost:3000"
  : "https://linkedin-clone.vercel.app";

export async function middleware(req) {
  console.log("🚀 ~ req.nextUrl.pathname", req.nextUrl.pathname);
  if (req.nextUrl.pathname === "/") {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });

    if (!session) return NextResponse.redirect("/home");
    // if (!session) return NextResponse.redirect(`${baseUrl}/`);
  }
}
