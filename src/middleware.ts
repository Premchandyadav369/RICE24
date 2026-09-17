
import { NextRequest, NextResponse } from 'next/server';
import { fallbackLng, languages } from './i18n/settings';

export const config = {
  matcher: '/:lng*'
};

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // If the language is already in the path, do nothing.
  if (languages.some(loc => pathname.startsWith(`/${loc}`))) {
    return NextResponse.next();
  }

  // Redirect to the default language.
  if (!pathname.startsWith('/_next')) {
    return NextResponse.redirect(new URL(`/${fallbackLng}${pathname}`, req.url));
  }

  return NextResponse.next();
}
