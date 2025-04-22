import { NextRequest, NextResponse } from "next/server";

// function adminMidleware(request: NextRequest) {
//   console.log(request);
//   return NextResponse.next();
// }

export async function middleware(request: NextRequest) {
  const adminToken = request.cookies.get("_token");
  const isLogin = Boolean(adminToken);

  if (request.nextUrl.pathname.startsWith("/admin") && !isLogin) {
    return NextResponse.redirect(new URL("/login", request.url)); // url  changING
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
