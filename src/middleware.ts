import { NextRequest, NextResponse } from "next/server";

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

// import { NextRequest, NextResponse } from "next/server";
// import createMiddleware from "next-intl/middleware";
// import { routing } from "./i18n/routing";

// // Создаем middleware для языка
// const intlMiddleware = createMiddleware(routing);

// export async function middleware(request: NextRequest) {
//   // Сначала обрабатываем перевод
//   const intlResponse = intlMiddleware(request);
//   if (intlResponse instanceof NextResponse) {
//     return intlResponse;
//   }

//   // Потом твоя проверка для /admin
//   const adminToken = request.cookies.get("_token");
//   const isLogin = Boolean(adminToken);

//   if (request.nextUrl.pathname.startsWith("/admin") && !isLogin) {
//     // ⚡ ВАЖНО: редирект должен учитывать язык!
//     const locale = request.nextUrl.pathname.split("/")[1]; // например "en" или "hy"
//     return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
//   }

//   // Всё ок — продолжаем
//   return NextResponse.next();
// }

// // Один правильный matcher
// export const config = {
//   matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
// };
