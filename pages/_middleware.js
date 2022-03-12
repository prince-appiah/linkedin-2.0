import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export async function middleware(req, res, ev) {
  if (req.nextUrl.pathname === "/") {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });

    if (!session) return NextResponse.redirect("/hom");
  }
}
