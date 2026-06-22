import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pure Beauty Experience — Beauty Class × Emina | Bekasi",
    template: "%s | Pure Beauty Experience",
  },
  description:
    "Pure Beauty Experience × Emina — Exclusive beauty class di Tomoro Coffee, Golden City, Bekasi. Discover Your Beauty, Empower Your Confidence. Dipersembahkan oleh beautyexperience.id.",
  keywords: [
    "beauty class bekasi",
    "pure beauty experience",
    "beauty class emina",
    "makeup class bekasi",
    "beauty event bekasi",
    "workshop kecantikan",
    "emina beauty class",
    "tomoro coffee golden city",
  ],
  authors: [{ name: "Pure Beauty Experience" }],
  creator: "Pure Beauty Experience",
  publisher: "Pure Beauty Experience",
  metadataBase: new URL("https://beautyexperience.my.id"),
  alternates: {
    canonical: "https://beautyexperience.my.id",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://beautyexperience.my.id",
    siteName: "Pure Beauty Experience",
    title: "Pure Beauty Experience — Beauty Class × Emina | Bekasi",
    description:
      "Exclusive beauty class di Tomoro Coffee, Golden City, Bekasi. Discover Your Beauty, Empower Your Confidence.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pure Beauty Experience × Emina - Beauty Class Bekasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Beauty Experience × Emina",
    description:
      "Exclusive beauty class di Tomoro Coffee, Golden City, Bekasi.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/logo.jpeg", sizes: "32x32" },
      { url: "/images/logo.jpeg", sizes: "16x16" },
    ],
    apple: [{ url: "/images/logo.jpeg", sizes: "180x180" }],
    shortcut: "/images/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Nunito:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: "Pure Beauty Experience × Emina — Beauty Class",
              description:
                "Exclusive beauty class di Tomoro Coffee, Golden City, Bekasi. Discover Your Beauty, Empower Your Confidence.",
              startDate: "2026-06-21T14:00:00+07:00",
              endDate: "2026-06-21T17:30:00+07:00",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              location: {
                "@type": "Place",
                name: "Tomoro Coffee - Golden City",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Golden City, Bekasi Utara",
                  addressLocality: "Bekasi",
                  addressRegion: "Jawa Barat",
                  addressCountry: "ID",
                },
              },
              organizer: {
                "@type": "Organization",
                name: "Pure Beauty Experience",
                url: "https://beautyexperience.my.id",
                sameAs: [
                  "https://www.instagram.com/beautyexperience.id/",
                  "https://www.tiktok.com/@beautyexperience.id",
                ],
              },
              image: "https://beautyexperience.my.id/og-image.jpg",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
