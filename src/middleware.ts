import { NextRequest, NextResponse } from "next/server";

// function adminMidleware(request: NextRequest) {
//   console.log(request);
//   return NextResponse.next();
// }

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/admin/blog", request.url)); // url  changING
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin"],
};
