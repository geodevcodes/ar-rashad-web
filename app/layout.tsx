import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const imageUrl = `${process.env.NEXT_PUBLIC_APP_URL}/opengraph-image.png`;
const APP_NAME = "Ar-Rashad Academy";
const APP_DEFAULT_TITLE =
  "Ar-Rashad Academy - Islamic Learning App | Qur'an, Courses & Daily Duas";
const APP_TITLE_TEMPLATE = "%s | Ar-Rashad Academy";
const APP_DESCRIPTION =
  "Ar-Rashad Academy brings guided Islamic courses, the Qur'an, trusted reciters, and daily duas together in one app, so you can learn at your own pace, wherever you are. Available on iOS and Android.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
  formatDetection: {
    telephone: false,
  },
  keywords: [
    "Ar-Rashad Academy",
    "Islamic learning app",
    "Quran app",
    "Qur'an recitation",
    "learn Quran online",
    "Islamic courses",
    "online Islamic education",
    "daily duas",
    "Muslim app",
    "Deen app",
    "Quran reciters",
    "Islamic studies app",
    "Muslim learning platform",
    "Islamic app for iOS",
    "Islamic app for Android",
  ],
  openGraph: {
    siteName: APP_NAME,
    locale: "en_US",
    type: "website",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    images: [imageUrl],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_DEFAULT_TITLE,
    description: APP_DESCRIPTION,
    site: "@geodevcodes",
    creator: "@geodevcodes",
    images: ["/opengraph-image"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
