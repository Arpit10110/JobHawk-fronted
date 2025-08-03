// middleware.ts
import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  // Only run auth logic on specific routes that need protection
  const { pathname } = req.nextUrl
  
  // Define routes that need authentication
  const protectedRoutes = ['/dashboard', '/profile', '/admin']
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route))
  
  if (isProtectedRoute && !req.auth) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
  
  return NextResponse.next()
})

export const config = {
  matcher: [
    // Match specific routes instead of all routes
    '/dashboard/:path*',
    '/profile/:path*',
    '/admin/:path*'
  ]
}
