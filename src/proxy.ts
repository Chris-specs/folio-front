import { getSessionCookie } from 'better-auth/cookies'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { SESSION_STATUS } from './modules/auth/constants/auth'

export async function proxy(request: NextRequest) {
    const sessionCookie = getSessionCookie(request)

    if (!sessionCookie) {
        return NextResponse.redirect(
            new URL('/sign-in?session=' + SESSION_STATUS.EXPIRED, request.url)
        )
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*']
}
