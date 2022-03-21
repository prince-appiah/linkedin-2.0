import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const dev = process.env.NODE_ENV === "development";

export const baseUrl = dev
  ? "http://localhost:3000"
  : "https://linkedin-clone.vercel.app";

export async function middleware(req) {
  if (req.nextUrl.pathname === "/") {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    console.log("🚀 ~ session", session);

    const url = req.nextUrl.clone();
    url.pathname = "/home";

    if (!session) return NextResponse.redirect(url);
    // if (!session) return NextResponse.redirect(`${baseUrl}/home`);
  }
}
