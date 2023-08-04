import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const { pathname } = request.nextUrl

    const allUrls = ['/', '/about', '/about-2']

    allUrls.map((url: string) => {
        if (pathname !== url) {
            return NextResponse.redirect(new URL('/', request.url))
        }
        return NextResponse.next()
    })

    if (pathname == '/about') {
        if (!request.cookies.has('nextjs')) {
            return NextResponse.redirect(new URL('/sobre', request.url))
        }
        return NextResponse.next()
    }

    if (pathname == '/contact') {
        if (!request.cookies.has('nextjs')) {
            return NextResponse.redirect(new URL('/', request.url))
        }
        return NextResponse.next()
    }

}