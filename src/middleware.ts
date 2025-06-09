import { NextRequest, NextResponse } from "next/server";
import {
    getUserFromSession,
    updateUserSessionExpiration,
} from "./auth/core/session";

const privateRoutes = /^\/(?:khoi\d+\/chuong\d+|home|setting)$/;
const notAuthRoutes = ["/", "/sign-in", "/sign-up", "/reset-password"];

export default async function middleware(request: NextRequest) {
    const response = (await middlewareAuth(request)) ?? NextResponse.next();

    await updateUserSessionExpiration({
        set: (key, value, options) => {
            response.cookies.set({ name: key, value, ...options });
        },
        get: (key) => request.cookies.get(key),
    });

    return response;
}

async function middlewareAuth(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    if (notAuthRoutes.includes(pathname)) {
        const user = await getUserFromSession(request.cookies);

        if (user) return NextResponse.redirect(new URL("/home", request.url));
    }

    if (privateRoutes.test(pathname)) {
        const user = await getUserFromSession(request.cookies);

        if (user === null)
            return NextResponse.redirect(new URL("/sign-in", request.url));
    }
}

export const config = {
    matcher: [
        "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    ],
};
