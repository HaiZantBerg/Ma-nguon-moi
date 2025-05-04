import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// const publicRoutes = ["/login", "/register", "/"];

export default async function middleware() {
    //request: NextRequest
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
