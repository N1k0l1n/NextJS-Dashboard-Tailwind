import { NextResponse, NextRequest } from "next/server";

export function middleware(request) {
  
  const url = request.nextUrl.clone();

  let isLogin = request.cookies.get("token");

  if (!isLogin) {
    if (request.nextUrl.pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    if (url.pathname === "/") {
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}
