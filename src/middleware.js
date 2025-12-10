import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const protectedRoutes = ['/admin']
const publicRoutes = ['/login', '/']

export default async function middleware(req) {
  const cookieStore = await cookies()
  const admin = cookieStore.get('admin')
  const fakeFlag = cookieStore.get('fake_flag')

  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)

  if (path === '/' && !admin && !fakeFlag) {
    const res = NextResponse.next()
    res.cookies.set('cookie', process.env.FLAG, {
      path: '/',
      httpOnly: false,  
      secure: false,
      sameSite: 'lax'
    })
    return res
  }

  // === 2. Proteksi route admin ===
  if (isProtectedRoute && admin?.value !== process.env.ADMIN_MAGIC) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
