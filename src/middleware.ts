import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname.startsWith('/proxy/google')) {
    const url = new URL('/api/proxy', request.url)
    url.searchParams.set(
      'url',
      'https://www.google.com' +
        pathname.replace(/^\/proxy\/google/, '') +
        request.nextUrl.search
    )

    return NextResponse.rewrite(url)
  } else if (pathname.startsWith('/proxy/naver')) {
    const url = new URL('/api/proxy', request.url)
    url.searchParams.set(
      'url',
      'https://search.naver.com' +
        pathname.replace(/^\/proxy\/naver/, '') +
        request.nextUrl.search
    )

    return NextResponse.rewrite(url)
  } else if (pathname.startsWith('/proxy/youtube')) {
    const url = new URL('/api/proxy', request.url)
    url.searchParams.set(
      'url',
      'https://www.youtube.com' +
        pathname.replace(/^\/proxy\/youtube/, '') +
        request.nextUrl.search
    )

    return NextResponse.rewrite(url)
  } else if (pathname.startsWith('/proxy/daum')) {
    const url = new URL('/api/proxy', request.url)
    url.searchParams.set(
      'url',
      'https://search.daum.net' +
        pathname.replace(/^\/proxy\/daum/, '') +
        request.nextUrl.search
    )

    return NextResponse.rewrite(url)
  } else if (pathname.startsWith('/proxy/stackoverflow')) {
    const url = new URL('/api/proxy', request.url)
    url.searchParams.set(
      'url',
      'https://stackoverflow.com' +
        pathname.replace(/^\/proxy\/stackoverflow/, '') +
        request.nextUrl.search
    )

    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}
