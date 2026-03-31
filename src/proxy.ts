import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/signin(.*)","/signup(.*)",]);

const isOrgSelectionRoute = createRouteMatcher(["/organization-selection(.*)"])

export default clerkMiddleware(async (auth, req) => {
    const { userId, orgId } = await auth();
    const url = req.nextUrl;

    if (isPublicRoute(req)) return NextResponse.next();
    if (!userId) { await auth.protect(); }

    if (url.pathname.startsWith("/organization-selection")) {
        return NextResponse.next();
    }

    if (userId && !orgId) {
        url.pathname = "/organization-selection";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}

