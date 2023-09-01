import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "nl"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

// import createMiddleware from 'next-intl/middleware'

// export default createMiddleware({
//     locales: ['nl', 'en'],
//     defaultLocale: 'nl',
//     localeDetection: false,
// })

// export const config = {
//     matcher: ['/((?!api|_next|.*\\..*).*)'],
// }
