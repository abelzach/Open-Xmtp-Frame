import localFont from "next/font/local";
import "./globals.css";
import type { Metadata } from "next";
import { fetchMetadata } from "frames.js/next";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Challengers",
    // provide a full URL to your /frames endpoint
    other: await fetchMetadata(
      new URL(
        "/frames",
        process.env.NEXT_PUBLIC_SITE_URL
          ? `https://${process.env.NEXT_PUBLIC_SITE_URL}`
          : "http://localhost:3000",
      ).toString(),
    ),
  };
}

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
