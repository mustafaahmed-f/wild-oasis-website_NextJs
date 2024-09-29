import { NextRequest, NextResponse } from "next/server.js";
import { auth } from "./app/_lib/auth";
// export function middleware(request: NextRequest) {
//   console.log(request);
//   return NextResponse.redirect(new URL("/account", "http://localhost:3000"));
// }

export const middleware = auth;

export const config = {
  matcher: ["/account"],
};
